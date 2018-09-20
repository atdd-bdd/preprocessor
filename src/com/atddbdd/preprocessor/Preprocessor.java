package com.atddbdd.preprocessor;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.atddbdd.preprocessor.localfunctions.DaysDifference;
import com.atddbdd.preprocessor.localfunctions.RandomInteger;
import com.atddbdd.preprocessor.localfunctions.Today;
import com.atddbdd.preprocessor.localfunctions.TodayOffsetBy;

public class Preprocessor {
	static final String INCLUDE = "#include";
	static final String WHITESPACE = "\\s+";


	protected DefineCollection defineCollection = new DefineCollection();

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
		String regex = DefineCollection.DEFINE_REGEX;
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
	private static final String lineRegex = "(.*?)(\\n|\\r\\n|$)";
	private static Pattern linePattern = Pattern.compile(lineRegex);

	protected String getDefines(String lines)  {
		ArrayList<String> lineCollection = new ArrayList<String>(); 
		Matcher m = linePattern.matcher(lines);
		while (m.find()) {
			lineCollection.add(lines.substring(m.start(), m.end()));
		}
		AlternativeStringReplacer asr = new AlternativeStringReplacer(); 
		Iterator<String> iterator = lineCollection.iterator(); 
		while (iterator.hasNext()) {	
			String line = iterator.next(); 	
			String unusedLine = checkForDefine(line, iterator); 
			if (unusedLine != null) 
				asr.copy(unusedLine);
		}
		String output = asr.ReturnString(); 
		return output;
	}

	private static final String DEFINE = "#(define|Define)";
	private static final String DEFINE_START = "efine"; 
	private static final String defineLineRegex = DEFINE + "\\s" + DefineCollection.DEFINE_REGEX + "\\s+(.*?)$";
	private static final String defineDefineRegex = DEFINE + "\\s*$";
	private static final Pattern defineLinePattern = Pattern.compile(defineLineRegex);
	private static final Pattern defineDefinePattern = Pattern.compile(defineDefineRegex);

	private String checkForDefine(String line, Iterator<String> iterator) {
		if (!line.contains(DEFINE_START))
			return line; 
		Matcher m = defineLinePattern.matcher(line);
		if (m.find()) {
			// Full define name value 
			String define = m.group(2); 
			String value = m.group(3).trim();
			if (value == null)
				value = ""; 
			defineCollection.add(define, value);
			return null; 
			}
		else {
			Matcher m1 = defineDefinePattern.matcher(line);
			if (m1.find()) {
				return processMultiDefinitions(line, iterator); 
				}
			else 
				return line; 
		}
	}

	static final String defineTableLineRegex = "\\|\\s*"+DefineCollection.DEFINE_REGEX 
			+ "\\s*\\|\\s*(.*?)\\s*\\|"; 
	static final Pattern defineTablePattern = Pattern.compile(defineTableLineRegex);

	private String processMultiDefinitions(String line, Iterator<String> iterator) {
		// get the defines 
		String aline = line; 
		while (iterator.hasNext()) {
			aline = iterator.next(); 
			Matcher m = defineTablePattern.matcher(aline);
			if (m.find()) {
				String define = m.group(1);
				String value = m.group(2);
				if (value == null)
					value = ""; 
				else 
					value = value.trim(); 
				defineCollection.add(define, value);
				}
			else 
				return aline; 
		}
		return "";
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
