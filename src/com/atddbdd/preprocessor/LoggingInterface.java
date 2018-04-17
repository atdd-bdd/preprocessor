package com.atddbdd.preprocessor;

public interface LoggingInterface {
	public void debug(String out);
	
	public void warning(String out);
	
	public  void error(String out); 
	
	public  void list(String out);

	public  void info(String out);

	public void reset();
	
	public void printErrors();

	public boolean isErrorStringInLog(String value);

}
