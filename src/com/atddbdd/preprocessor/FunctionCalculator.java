package com.atddbdd.preprocessor;

import java.lang.reflect.Constructor;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FunctionCalculator {
	static final String NO_FUNCTION_FOUND = "NO_FUNCTION_FOUND";

	private static Map<String, LocalFunction> functions = new HashMap<String, LocalFunction>();

	public static String calculate(String expression) {
		String regex = "([\\w_\\.]+?)\\((.*?)\\)";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(expression);
		StringReplacer sr = new StringReplacer(expression); 
		while (m.find()) {
			String name = m.group(1);
			String parameter = m.group(2);
			String replace; 
			String parameters[] = parameter.split(",");
			LocalFunction lf = functions.get(name);
			if (lf != null)
				replace = lf.process(parameters);
			else 
				replace = m.group(); 
			sr.replaceAndCopyPrevious(m.start(), m.end(), replace);
			}
		String output = sr.finishAndReturnString();
		return output;
	}

	public static void addFunction(LocalFunction lf) {
		String name = getFunctionName(lf);
		functions.put(name, lf);
	}
	public static void addLocationFunctionA(String name) {
		try {
			Class<?> c = Class.forName(name);
			Constructor<?> cons = c.getConstructor();
			LocalFunction lf = (LocalFunction) cons.newInstance();
			addFunction(lf);
		} catch (Exception e) {
			Logging.error(ErrorStrings.LOCAL_FUNCTION_CLASS_NOT_FOUND + name + " " + e.getMessage());
		}
	}
	private static String getFunctionName(LocalFunction lf) {
		Class <?> c = lf.getClass();
		String fullname = c.getName();
		String parts[] = fullname.split("\\.");
		String name = parts[parts.length - 1];
		return name;
	}

}
