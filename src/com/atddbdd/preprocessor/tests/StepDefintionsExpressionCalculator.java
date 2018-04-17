package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;

import com.atddbdd.preprocessor.expressions.ExpressionCalculator;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefintionsExpressionCalculator {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 

	}
	@After
	public void post() {
		TestResetter.post(); 
	}
	
	String input; 
	String output; 
	@Given("^expression \"([^\"]*)\"$")
	public void expression(String arg1) throws Exception {
	   input = arg1; 
	}

	@When("^evaluated$")
	public void evaluated() throws Exception {
	    output = ExpressionCalculator.calculate(input); 
	}

	@Then("^result is \"([^\"]*)\"$")
	public void result_is(String arg1) throws Exception {
	    assertEquals(arg1, output); 
	}




}
