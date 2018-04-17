package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.DefineValues;
import com.atddbdd.preprocessor.FileOperations;

import com.atddbdd.preprocessor.Pathname;
import com.atddbdd.preprocessor.Preprocessor;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

class NameInput {
	public String name;
}

public class StepDefinitions {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 
	}
	@After 
	public void post() {
		TestResetter.post(); 
	}
	String filename;
	String input;
	String output;

	Preprocessor pp = new Preprocessor();

	@When("^processing:$")
	public void processing(String arg1) throws Exception {
		input = arg1;
		output = pp.process(input);
	}

	@When("^processing defines$")
	public void processing_defines() throws Exception {
		// Defines have been processed when input
	}

	@Then("^defines are:$")
	public void defines_are(List<DefineValues> expected) throws Exception {
		List<DefineValues> output = pp.getDefinesAsList();
		boolean result = Debugging.listAreEqual(expected, output);
		assertTrue(result);

	}




	@Then("^result is:$")
	public void result_is(String arg1) throws Exception {
		assertEquals(arg1, output);
	}


	String key;
	String value;
	String inputString;
	String outputString;

	@Given("^defines set up:$")
	public void defines_set_up(List<DefineValues> set) throws Exception {
		pp.setDefinesFromList(set);
	}

	@When("^string is replaced$")
	public void string_is_replaced(String arg1) throws Exception {
		output = pp.replaceDefines(arg1);
	}

	@Then("^output string is$")
	public void output_string_is(String arg1) throws Exception {
		assertEquals(arg1, output);
	}

	@Given("^file (.+?) exists with:$")
	public void file_exists_with(Pathname arg1, String arg2) throws Exception {
		String out = arg2;
		FileOperations.writeInclude(arg1, out);
	}
	
	@When("^add local function:$")
	public void add_local_function(List<NameInput> arg1) throws Exception {
			for (NameInput ni: arg1) {
				pp.addLocalFunction(ni.name);
			}
	}

	@Given("^redefine is (.+)$")
	public void redefine_is(boolean redefine) throws Exception {
		Configuration.allow_redefines = redefine; 
	}
	


}
