package com.atddbdd.preprocessor;

public class PreprocessorException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	static final String BAD_PATHNAME = "Bad Pathname"; 

	public PreprocessorException(String message) {
		super(message); 
	}
}
