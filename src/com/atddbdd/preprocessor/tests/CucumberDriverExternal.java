package com.atddbdd.preprocessor.tests;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 


@CucumberOptions( plugin = { "pretty", "html:target/cucumber"},
			features ="features", 
			glue = "classpath:com.atddbdd.preprocessor.tests" 
			, tags = "@external"			)  



public class CucumberDriverExternal {


	void test() {
		
	}

}
