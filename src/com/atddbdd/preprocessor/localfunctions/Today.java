package com.atddbdd.preprocessor.localfunctions;

import org.joda.time.LocalDate;

import com.atddbdd.preprocessor.LocalFunction;
import com.atddbdd.preprocessor.Logging;

public class Today implements LocalFunction {

	@Override
	public String process(String[] args) {
		LocalDate today = new LocalDate();
		Logging.debug("Today is " + today);
		String out = today.toString(DateFormatter.getLocalePattern());
		return out; 	
		}

}
