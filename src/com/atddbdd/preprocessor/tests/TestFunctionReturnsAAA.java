package com.atddbdd.preprocessor.tests;

import com.atddbdd.preprocessor.LocalFunction;

public class TestFunctionReturnsAAA implements LocalFunction {
	public String process(String [] args)
	{
		String result = "AAA";
		for (String a: args) {
			result += a; 
		}
		return result; 
	}

}
