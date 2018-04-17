package com.atddbdd.preprocessor.tests;

import com.atddbdd.preprocessor.LocalFunction;

public class TestFunctionReturnsZ  implements LocalFunction {
		public String process(String [] args)
		{
			String result = "Z";
			return result; 
		}

}
