package com.atddbdd.preprocessor;

import java.io.File;

public class Pathname {
	private static final String PATHNAME_REGEX = "[ \\w_\\\\.-\\\\/]+";
	public static final String BAD_PATHNAME = "Bad Pathname"; 
	String value; 
	public Pathname(String filename) throws PreprocessorException 
	{
		String output = filename.trim(); 
		// Do a check and through exception
		this.value = output; 
		if (!output.matches(PATHNAME_REGEX)) {
			reportBadPathname(filename);
			throw new PreprocessorException(BAD_PATHNAME + ":" + filename);
		}
	}

	static public void reportBadPathname(String filename) {
		Logging.error(ErrorStrings.BAD_PATHNAME +  filename); 
	}
	
	@Override 
	public String toString()
	{
		return value; 
	}
	public Pathname add(Pathname additional)
	{
		return add(additional.toString());
	}
	public Pathname add(String additional)
	{
		// Take ending and beginning off both 
		if (!additional.matches(PATHNAME_REGEX)) {
			reportBadPathname(additional);
			return this; 
		}
		File one = new File(value, additional);
		String result = one.getPath(); 
		try {
			return new Pathname(result);
		} catch (PreprocessorException e) {
			reportBadPathname(additional); 
			return this; 
		} 
		
	}
	public Pathname remove(Pathname inputFeaturePath) {
		String result = value; 
		String toRemove = "^" + inputFeaturePath.toString(); 
		result = result.replaceFirst(toRemove,""); 
		try {
			return new Pathname(result);
		} catch (PreprocessorException e) {
			reportBadPathname(result);
			return this; 
		}
	}
}
