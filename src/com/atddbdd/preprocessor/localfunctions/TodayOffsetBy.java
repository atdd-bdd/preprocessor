package com.atddbdd.preprocessor.localfunctions;

import org.joda.time.LocalDate;


import com.atddbdd.preprocessor.LocalFunction;

public class TodayOffsetBy implements LocalFunction {

	@Override
	public String process(String[] args) {
		
		LocalDate today = new LocalDate();
		LocalDate result;
		int days = new Integer(args[0]); 
		result = today.plusDays(days); 
		String out = result.toString(DateFormatter.getLocalePattern()); 
		return out; 
	}

}
