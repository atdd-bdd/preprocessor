package com.atddbdd.preprocessor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.atddbdd.preprocessor.expressions.ExpressionCalculator;

public class DefineCollection {
	 private Map<String, String> defines = new HashMap<String, String>();
	static final String DEFINE_REGEX = "([\\w_\\.]+)";
	public void clear() {
		defines.clear(); 
		
	}
	public  List<DefineValues> getDefinesAsList() {
		List<DefineValues> output = new ArrayList<DefineValues>();
		Set<String> keys = defines.keySet();
		for (String key : keys) {
			output.add(new DefineValues(key, defines.get(key)));
		}
		return output;
	}

	public String getAsReplacement(String term) {
		String replace;
		replace = defines.get(term);
		if (replace == null)
			replace = term; 
		return replace; 
	}

	public void add(String define, String value) {
		if (defines.containsKey(define)) {
			if (!Configuration.allow_redefines) {
				Logging.warning(ErrorStrings.DUPLICATE_DEFINE + define + " " + value);
				return; 
			}
		}
		defines.put(define, value); 
		// Do replacement as it defined
		processADefine(define); 

	}
	

	private void processADefine(String key) {
		String regex = "\\s*=\\s*?(.*)$"; 
		Pattern p = Pattern.compile(regex);
		String value = defines.get(key);
		Matcher m = p.matcher(value); 
		if (m.find()) {
			// Process the match 
			String expression = m.group(1).trim(); 
			String expressionReplaced = replaceDefines(expression, key); 
			String expressionAfterFunction = expressionReplaced;
			if (expressionReplaced.contains("("))
				expressionAfterFunction = FunctionCalculator.calculate(expressionReplaced);
			String expressionAfterCalculator = ExpressionCalculator.calculate(expressionAfterFunction); 
			defines.put(key, expressionAfterCalculator); 
			}
	}
	// This is for a define value, not the original file 
	// Need to be recursive 
		public  String replaceDefines(String expression, String key) {
			int count = 0;
			return replaceDefinesOne(expression, count, key);
		}

		private String replaceDefinesOne(String expression, int count, String key) {
			if (count >= Configuration.maximum_recursion_includes)
				return expression; 
			Logging.debug("Replacing " + expression + " count " + count);
			String regex = DefineCollection.DEFINE_REGEX; 
			Pattern p = Pattern.compile(regex);
			Matcher m = p.matcher(expression); 
			StringReplacer sr = new StringReplacer(expression); 
			boolean defineReplaced = false; 
			while (m.find()) {
				String term = m.group(1); 
				if (term.equals(key))
				{
					Logging.error(ErrorStrings.DEFINE_USED_IN_DEFINE + key);
					return expression; 
				}
				String replace = getAsReplacement(term);
				if (!replace.equals(term))
					defineReplaced = true;
				sr.replaceAndCopyPrevious(m.start(), m.end(), replace);
				
				}
			String output = sr.finishAndReturnString();
			if (defineReplaced) {
				count++; 
				output = replaceDefinesOne(output, count, key); 
			}
			return output;
		}
		boolean setDefinesFromListA(List<DefineValues> list) {
			clear();
			for (DefineValues dv : list) {
				add(dv.define.trim(), dv.value.trim());
			}
			return true;
		}
			
}
