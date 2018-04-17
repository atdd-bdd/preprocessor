package com.atddbdd.preprocessor.main;

import com.atddbdd.preprocessor.LoggingInterface;

public class DefaultLogging implements LoggingInterface {

	@Override
	public void debug(String out) {
			System.out.println(out);
	}

	@Override
	public void warning(String out) {
		System.err.println("WARNING " + out);

	}

	@Override
	public void error(String out) {
		System.err.println("***ERROR*** " + out);
	}

	@Override
	public void list(String out) {
		System.out.println(out);
	}

	@Override
	public void info(String out) {
		System.out.println("INFO " + out);

	}
	@Override 
	public void reset() {
		// Nothing to reset - prints have occurred
	}
	@Override
	public void printErrors() {
		// Already printed 
	}
	@Override
	public boolean isErrorStringInLog(String value)
	{
		return false; 	
	}


}
