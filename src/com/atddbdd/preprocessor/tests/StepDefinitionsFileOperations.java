package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

import java.io.File;

import com.atddbdd.preprocessor.CSVFileParser;
import com.atddbdd.preprocessor.ErrorStrings;
import com.atddbdd.preprocessor.FileOperations;
import com.atddbdd.preprocessor.Pathname;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.When;

public class StepDefinitionsFileOperations {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 
	}
	@After
	public void post() {
		TestResetter.post(); 
	}
	@When("^writing to (.+)$")
	public void writing_to(String filename) throws Exception {
	   File f = new File(filename); 
	   boolean result = FileOperations.write(f, "something");
	   assertFalse(result); 
	}



	@When("^reading to (.+)$")
	public void reading_to(String filename) throws Exception {
		   File f = new File(filename); 
		   String result = FileOperations.read(f);
		   assertEquals(ErrorStrings.CANNOT_READ_FILE, result); 
	}
	
	@When("^reading from csv file (.+)$")
	public void reading_from_csv_file(String filename) throws Exception {
		Pathname path = new Pathname(filename); 
		CSVFileParser.parseIntoTable(path); 
	}

}
