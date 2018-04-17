package com.atddbdd.preprocessor.localfunctions;

import org.joda.time.LocalDate;

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
		System.out.println("Double is " + randomDouble);
		int range = (maximum-mininum )/delta + 1; 
		System.out.println("Range is " + range);
		System.out.println("Delta is " + delta);
		int potential = ((int) (range * randomDouble)) * delta  + mininum; 
		System.out.println("potential is " + potential);
		String out = Integer.toString(potential); 
		System.out.println("String is " + out);
		return out; 	
		}

}
