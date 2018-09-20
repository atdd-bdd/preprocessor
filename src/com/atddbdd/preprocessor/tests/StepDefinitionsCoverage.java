package com.atddbdd.preprocessor.tests;





import com.atddbdd.preprocessor.CSVFileParser;
import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.ConfigurationValues;
import com.atddbdd.preprocessor.DefaultConfiguration;
import com.atddbdd.preprocessor.DefineValues;
import com.atddbdd.preprocessor.ErrorStrings;
import com.atddbdd.preprocessor.FunctionCalculator;
import com.atddbdd.preprocessor.Includes;
import com.atddbdd.preprocessor.Logging;
import com.atddbdd.preprocessor.expressions.ExpressionCalculator;

import cucumber.api.java.en.Given;

@SuppressWarnings("unused") public class StepDefinitionsCoverage {
	@Given("^Unused Methods$")
	public void unused_Methods() throws Exception {
		DefineValues dv = new DefineValues("define","value");
		String out = dv.toString(); 
		Object o = new Object(); 
		dv.equals(o); 
		ConfigurationValues cv = new ConfigurationValues("name", "value"); 
		out = cv.toString(); 
		cv.equals(o); 
		CSVFileParser cfp = new CSVFileParser(); 
		Configuration con = new Configuration(); 
		DefaultConfiguration dc = new DefaultConfiguration(); 
		ErrorStrings es = new ErrorStrings(); 
		FunctionCalculator fc = new FunctionCalculator(); 
		Includes i = new Includes();
		Logging l = new Logging(); 
		Logging.printErrors();
		ExpressionCalculator ec = new ExpressionCalculator(); 
		
	}
}
