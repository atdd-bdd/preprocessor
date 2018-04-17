package com.atddbdd.preprocessor.localfunctions;


import org.joda.time.Days;

import org.joda.time.LocalDate;

import com.atddbdd.preprocessor.LocalFunction;

public class DaysDifference implements LocalFunction {

	@Override
	public String process(String[] args) {
			LocalDate first = LocalDate.parse(args[0], DateFormatter.getLocalePattern());
		LocalDate second = LocalDate.parse(args[1], DateFormatter.getLocalePattern());
		Days diffInDays = Days.daysBetween(first, second);
		int days = diffInDays.getDays();
		String out = new Integer(days).toString(); 
		return out; 
	}

}
