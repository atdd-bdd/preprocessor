package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;

import com.atddbdd.preprocessor.CSVFileParser;
import com.atddbdd.preprocessor.Configuration;

import com.atddbdd.preprocessor.Pathname;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionCSV {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 

	}
	@After
	public void post() {
		TestResetter.post(); 
	}
	String output; 
	@When("^parsing (.+) as csv file$")
	public void parsing_as_csv_file(String arg1) throws Exception {
	    Pathname path = Configuration.relativeIncludeDirectory.add(arg1);
		output = CSVFileParser.parseIntoTable(path);
	}

	@Then("^parsed file is:$")
	public void parsed_file_is(String arg1) throws Exception {
		output.replace("\r", "");
		assertEquals(arg1, output); 
	}

}
