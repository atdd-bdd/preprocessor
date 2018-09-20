package com.atddbdd.preprocessor;

import com.atddbdd.preprocessor.main.DefaultLogging;

public class Logging {
	private static int number_warnings = 0; 
	private static int number_errors = 0; 
	public static LoggingInterface li = new DefaultLogging(); 
	public static void debug(String out)
	{
		if (Configuration.debugging)
			li.debug(out); 	
	}
	public static void warning(String out) {
		number_warnings++;
			li.warning(out);
	}
	public static void error(String out) {
		number_errors++;
			li.error(out);
	}
	public static void list(String out) {
		li.list(out);
	}
	public static void info(String out) {
		li.info(out);
	}
	public static int getNumberErrors()
	{
		return number_errors; 
	}
	public static int getNumberWarnings()
	{
		return number_warnings; 
	}
	public static void resetCounts() {
		li.reset(); 
		number_errors = 0;
		number_warnings = 0; 
	}
	public static void printErrors() {
		li.printErrors();
	}
	public static boolean isErrorStringInLog(String errorString) {
		String actual = ErrorStrings.getStringforError(errorString);
		return li.isErrorStringInLog(actual); 
	}
}
