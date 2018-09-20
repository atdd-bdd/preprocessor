package com.atddbdd.preprocessor.localfunctions;

//import org.joda.time.LocalDate;

import com.atddbdd.preprocessor.LocalFunction;
import com.atddbdd.preprocessor.Logging;

public class RandomInteger implements LocalFunction {

	@Override
	public String process(String[] args) {
		if (args.length < 3)
		{
			Logging.error("RandomInteger requires 3 arguments"); 
			return "RandomInteger argument error"; 
		}
		int mininum = Integer.parseInt(args[0]); 
		int maximum = Integer.parseInt(args[1]); 
		int delta = Integer.parseInt(args[2]); 
		double randomDouble = Math.random(); 
		int range = (maximum-mininum )/delta + 1; 
		int potential = ((int) (range * randomDouble)) * delta  + mininum; 
		String out = Integer.toString(potential); 
		return out; 	
		}

}
