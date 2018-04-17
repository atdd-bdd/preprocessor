package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.List;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.Logging;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
class LoggingInput 
{
	String type;
	String message; 
}
public class StepDefinitionsLogging {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 
	    Configuration.turnOnDebuggingandSaveCurrentFlag(); 

	}
	@After
	public void post() {
		//Logging.printErrors();
		TestResetter.post(); 
	    Configuration.turnOffDebuggingandRestoreCurrentFlag();
	}
	@Given("^configuration debug is true$")
	public void configuration_debug_is_true() throws Exception {
	}

	@When("^logging:$")
	public void logging(List<LoggingInput> list) throws Exception {
		Logging.resetCounts(); 
		for (LoggingInput li: list)
	   {
		   outputLogMessage(li.type, li.message); 
	   }
	}

	private void outputLogMessage(String type, String message) {
		if (type.equals("Info"))
			Logging.info(message);
		if (type.equals("Debug"))
			Logging.debug(message); 
		if (type.equals("Warning"))
			Logging.warning(message); 
		if (type.equals("Error"))
			Logging.error(message); 
		
	}

	@Then("^look at console for messages$")
	public void look_at_console_for_messages() throws Exception {
	    System.out.println("*** TEST **** Examine console for messages" );
	}
	@Then("^error count should be (\\d+)$")
	public void error_count_should_be(int arg1) throws Exception {
		assertEquals(arg1, Logging.getNumberErrors());
	}

	@Then("^warning count should be (\\d+)$")
	public void warning_count_should_be(int arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		assertEquals(arg1, Logging.getNumberWarnings());
	}
	
	@Then("^error reported as (.+)$")
	public void error_reported_as(String errorString) throws Exception {
		boolean result = Logging.isErrorStringInLog(errorString);
		assertTrue(result); 
	}
	
	@Then("^check for error reported as (.+)$")
	public void check_for_error_reported_as(String errorString) throws Exception {
		boolean result = Logging.isErrorStringInLog(errorString);
	}
	

}
