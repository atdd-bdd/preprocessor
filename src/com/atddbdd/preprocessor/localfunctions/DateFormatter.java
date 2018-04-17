package com.atddbdd.preprocessor.localfunctions;

import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;


public class DateFormatter {
	static  DateTimeFormatter getLocalePattern()
	{
			String pattern =
                "dd-MMM-yyyy";
			 DateTimeFormatter dtf=	DateTimeFormat.forPattern(pattern); 
			 return dtf;
	}
}
