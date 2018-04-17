package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.ConfigurationValues;
import com.atddbdd.preprocessor.FileOperations;
import com.atddbdd.preprocessor.Logging;
import com.atddbdd.preprocessor.Pathname;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

class ParameterInput {
	String argv;
}

public class StepDefinitionsMain {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 
	}
	@After
	public void post() {
		TestResetter.post(); 
	}
	
	@Given("^include file (.+) exists with:$")
	public void include_file_TestInclude_txt_exists_with(Pathname path, String arg1) throws Exception {
		FileOperations.writeInclude(path, arg1);

	}

	@Given("^feature file (.+) exists with:$")
	public void feature_TestFeature_feature_exists_with(Pathname path, String arg1) throws Exception {
		FileOperations.writeFeatureIn(path, arg1);
	}

	@When("^main program run$")
	public void main_program_run() throws Exception {
		com.atddbdd.preprocessor.main.Main.mainMethod();
	}

	// feature file TestFeature.feature contains
	@Then("^feature file (.+) contains$")
	public void feature_TestFeature_feature_contains(Pathname path, String arg1) throws Exception {
		String output = FileOperations.readFeatureOut(path);
		assertEquals(arg1, output);
	}

	@Given("^feature out file (.+) exists with:$")
	public void feature_out_exists_with(Pathname path, String arg1) throws Exception {
		Logging.debug("Writing " + path);
		FileOperations.writeFeatureOut(path, arg1);
	}

	@When("^delete feature output$")
	public void delete_feature_output() throws Exception {
		Logging.debug("Deleting " + Configuration.outputFeaturePath);
		// Write code here that turns the phrase above into concrete actions
		FileOperations.deleteDirectory(Configuration.outputFeaturePath);
	}

	@Then("^feature out file (.+) does not exist$")
	public void feature_file_foldertest_TestOneFeature_feature_does_not_exist(Pathname path) throws Exception {
		Logging.debug("Attempting to read " + path);
		boolean result = FileOperations.existsFeatureOut(path);
		if (result)
			fail();
	}

	@Given("^configuration values are:$")
	public void configuration_values_are(List<ConfigurationValues> expected) throws Exception {
		List<ConfigurationValues> output = Configuration.getAsList();
		boolean result = listAreEqual(expected, output);
		assertTrue(result);
	}

	public boolean listAreEqual(List<ConfigurationValues> expected, List<ConfigurationValues> output) {
		boolean result2 = expected.containsAll(output);
		boolean result1 = output.containsAll(expected);
		boolean result = result1 && result2;
		if (!result){
			Debugging.printConfigurationComparison(expected, output);

		}		
		return result;

	}
	

	@When("^parameters are:$")
	public void parameters_are(List<ParameterInput> expected) throws Exception {
		String [] array = new String[expected.size()]; 
		int count = 0;
		for (ParameterInput pi: expected) {
			array[count] = pi.argv; 
			count++; 
		}
		
		com.atddbdd.preprocessor.main.Main.setConfigurationFromArguments(array);
		}
	@When("^executing program as:$")
	public void executing_program_as(String arg1) throws Exception {
		System.out.println("Executing " + arg1);	
		Process proc = Runtime.getRuntime().exec(arg1); 
		int exitValue = proc.waitFor(); 
		System.out.println("Exit is " + exitValue);
		assertEquals(0, exitValue); 
	}

}
