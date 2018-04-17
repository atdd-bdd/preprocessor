package com.atddbdd.preprocessor.tests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.List;

import com.atddbdd.preprocessor.Logging;
import com.atddbdd.preprocessor.Pathname;
import com.atddbdd.preprocessor.PreprocessorException;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
class PathnameInput 
{
	String pathname;
	boolean valid;
	String error;
}
class PathnameAddInput 
{
	String pathname;
	String add;
	String result; 
	String error; 
}
public class StepDefinitionsADT {
	@Before 
	public void pre()
	{
		TestResetter.reset(); 

	}
	@After
	public void post() {
		TestResetter.post(); 
	}
@Given("^pathname When processed Then valid or not$")
public void pathname_When_processed_Then_valid_or_not(List<PathnameInput> list) throws Exception {
	for (PathnameInput pi: list) {
		try {
			new Pathname(pi.pathname);
			assertTrue(pi.valid); 
		}
		catch(PreprocessorException e) {
			assertFalse(pi.valid);
			if (pi.error!= null) {
				boolean result = Logging.isErrorStringInLog(pi.error);
				assertTrue(result); 
			}
			
		
		}
	}
}

@Given("^Pathname When added Then result is$")
public void pathanme_When_added_Then_result_is(List<PathnameAddInput> list) throws Exception {
   for (PathnameAddInput pai: list) {
		try {
			Pathname original = new Pathname(pai.pathname);
			Pathname added = original.add(pai.add);
			assertEquals(pai.result, added.toString());
		}
		catch(PreprocessorException e) {
			boolean result = Logging.isErrorStringInLog(pai.error);
			assertTrue(result); 
		}
   }
}
}
