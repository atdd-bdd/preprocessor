package com.atddbdd.preprocessor.tests;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) 


@CucumberOptions( plugin = { "pretty", "html:target/cucumber"},
			features ="features", 
			glue = "classpath:com.atddbdd.preprocessor.tests" 
			)




public class CucumberDriverCoverage {


	void test() {
		
	}

}
