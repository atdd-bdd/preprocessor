package com.atddbdd.preprocessor.tests;

import com.atddbdd.preprocessor.LocalFunction;

public class TestFunctionReturnsWhatIsPassed implements LocalFunction {
		public String process(String [] args)
		{
			return args[0]; 
		}

	}

