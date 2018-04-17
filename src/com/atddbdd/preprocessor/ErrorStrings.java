package com.atddbdd.preprocessor;

import java.lang.reflect.Field;

public class ErrorStrings {
	public static final String CONFIGURATION_INCLUDE_PATH_IS_BAD = "Configuration.Include Path is bad: ";
	public static final String CONFIGURATION_INPUT_FEATURE_PATH_IS_BAD = "Configuration Input Feature Path is bad: ";
	public static final String CONFIGURATION_OUTPUT_FEATURE_PATH_IS_BAD = "Configuration Output Feature Path is bad: ";
	public static final String PARSING_FAILED_REASON = "Parsing failed.  Reason: ";
	public static final String UNABLE_TO_INITIALIZE_CONFIGURATION_WITH_PATHNAMES = "Unable to initialize configuration with pathnames";
	public static final String UNABLE_TO_READ = "Unable to read ";
	public static final String MAX_INPUT_FILE_EXCEEDED = "Max input file exceeded: ";
	public static final String UNABLE_TO_WRITE_TO = "Unable to write to ";
	public static final String EXITING_ON_ERROR = "Exiting on error";
	public static final String LOCAL_FUNCTION_CLASS_NOT_FOUND = "Local Function class not found: ";
	public static final String NO_INCLUDE_FILENAME_FOR_LINE = "No include filename for line ";
	public static final String NO_DEFINE_FOR_LINE = "No define for line ";
	public static final String DEFINE_USED_IN_DEFINE = "Define used in define recursively ";
	public static final String NOT_FOUND = "String not found";
	public static final String ILLEGAL_ARGUMENT = "Illegal argument";
	public static final String DUPLICATE_DEFINE = "Duplicate define for ";
	public static final String CANNOT_EVALUATE = "Cannot evaluate ";
	public static final String BAD_PATHNAME = PreprocessorException.BAD_PATHNAME + " after adding: "; 
	public static final String INCLUDE_FILE_ERROR = "Include file " + Pathname.BAD_PATHNAME ;
	public static final String CANNOT_READ_INCLUDE = "***Cannot read include file";
	public static final String CANNOT_READ_FILE = "Cannot read file ";
	public static String getStringforError(String errorString) {
		Field[] declaredFields = ErrorStrings.class.getDeclaredFields();
		for (Field field : declaredFields) {
			String name = field.getName();
		    if (name.equals(errorString))
		    {
		    	String value;
			try {
					value = (String) field.get(null);
			    	return value ;
				} catch (IllegalArgumentException | IllegalAccessException e) {
					Logging.error(ILLEGAL_ARGUMENT + " " + errorString);
					System.err.println(ILLEGAL_ARGUMENT + " " + errorString);
					}
		    }
		}
			Logging.error(ILLEGAL_ARGUMENT + " " + errorString);
		    return NOT_FOUND;
		
	       	}

}
