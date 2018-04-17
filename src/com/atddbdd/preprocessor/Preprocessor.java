package com.atddbdd.preprocessor;

import java.util.List;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.atddbdd.preprocessor.localfunctions.DaysDifference;
import com.atddbdd.preprocessor.localfunctions.RandomInteger;
import com.atddbdd.preprocessor.localfunctions.Today;
import com.atddbdd.preprocessor.localfunctions.TodayOffsetBy;

public class Preprocessor {
	static final String INCLUDE = "#include";
	static final String DEFINE = "#define";
	static final String WHITESPACE = "\\s+";
	static final String DEFINE_REGEX = "([\\w_\\.]+)";

	private DefineCollection defineCollection = new DefineCollection();

	public Preprocessor() {
		FunctionCalculator.addFunction(new Today());
		FunctionCalculator.addFunction(new TodayOffsetBy());
		FunctionCalculator.addFunction(new DaysDifference());
		FunctionCalculator.addFunction(new RandomInteger());
	}

	public String process(String input) {
		String lines;
		String lines1;
		String output;
		lines = doImports(input);
		lines1 = getDefines(lines);
		output = replaceDefines(lines1);
		return output;
	}

	public boolean setDefinesFromList(List<DefineValues> list) {
		return defineCollection.setDefinesFromListA(list);
	}

	public List<DefineValues> getDefinesAsList() {
		return defineCollection.getDefinesAsList();

	}

	public String replaceDefines(String lines) {
		String regex = DEFINE_REGEX;
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(lines);
		StringReplacer sr = new StringReplacer(lines);
		while (m.find()) {
			String term = m.group(1);
			String replace = defineCollection.getAsReplacement(term);
			sr.replaceAndCopyPrevious(m.start(), m.end(), replace);
		}
		String output = sr.finishAndReturnString();
		return output;
	}

	private String getDefines(String lines) {
		String regex = "("+DEFINE+".*?)(\\n|\\r\\n|$)";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(lines);
		StringReplacer sr = new StringReplacer(lines);
		while (m.find()) {
			sr.replaceAndCopyPrevious(m.start(), m.end(), "");
			String defineLine = lines.substring(m.start(), m.end());
			processDefineLine(defineLine);
		}
		String output = sr.finishAndReturnString();
		return output;
	}

	private void processDefineLine(String defineLine) {
		defineCollection.processDefineLine(defineLine);
	}

	private String getIncludes(String lines) {
		int count = 0;
		return processOneInclude(lines, count);
	}

	private String processOneInclude(String lines, int count) {
		if (count >= Configuration.maximum_recursion_includes)
			return lines;
		String regex = "("+INCLUDE+".*?)(\n|\r\n|$)";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(lines);
		boolean include_performed = false;
		StringReplacer sr = new StringReplacer(lines);
		while (m.find()) {
			String includeLine = lines.substring(m.start(), m.end());
			String replace = processIncludeLine(includeLine);
			sr.replaceAndCopyPrevious(m.start(), m.end(), replace);
			include_performed = true;
		}
		String output = sr.finishAndReturnString();
		if (include_performed) {
			count++;
			output = processOneInclude(output, count);
		}
		return output;
	}

	private String processIncludeLine(String includeLine) {
		return Includes.processIncludeLineA(includeLine);

	}

	

	private String doImports(String input) {
		return getIncludes(input);

	}


	public void addLocalFunction(String name) {
		FunctionCalculator.addLocationFunctionA(name);

	}

	
}
