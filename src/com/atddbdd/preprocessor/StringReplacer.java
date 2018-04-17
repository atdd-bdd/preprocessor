package com.atddbdd.preprocessor;

public class StringReplacer {
	StringBuffer sb = new StringBuffer();
	int start = 0; 
	int end; 
	int last_char = start; 
	int size; 
	String input; 
	public StringReplacer(String input) {
		this.input = input; 
		start = 0; 
		size = input.length(); 
		end = input.length();
	}
	public void replaceAndCopyPrevious(int start, int end, String replace)
	{
		String previous = input.substring(last_char, start);
		sb.append(previous);
		sb.append(replace);
		last_char = end; 
	}
	public String finishAndReturnString() {
	
		if (end >= last_char)
			sb.append(input.substring(last_char, end)); 
		String output = sb.toString();
		return output; 
	}
	



}
