package com.atddbdd.preprocessor.tests;

import java.util.List;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.ConfigurationValues;
import com.atddbdd.preprocessor.DefineValues;
import com.atddbdd.preprocessor.Logging;

public class Debugging {
	static public void printConfigurationComparison(List<ConfigurationValues> expected, List<ConfigurationValues> output) {
		Configuration.turnOnDebuggingandSaveCurrentFlag();
		Logging.debug("Expected");
		for (ConfigurationValues cv: expected) {
			Logging.debug(cv.toString());
		}
			Logging.debug("Output");
		for (ConfigurationValues cv: output) {
				Logging.debug(cv.toString());
		}
		Configuration.turnOffDebuggingandRestoreCurrentFlag();
	}
	public static void printDefineValues(List<DefineValues> expected, List<DefineValues> output) {
		Configuration.turnOnDebuggingandSaveCurrentFlag();
		Logging.debug("Expected");
		for (DefineValues dv: expected)
		{
			Logging.debug(dv.toString());
		}
			Logging.debug("Output");
		for (DefineValues dv: output)
		{
			Logging.debug(dv.toString());
		}
		Configuration.turnOffDebuggingandRestoreCurrentFlag();
	}
	
	static public boolean listAreEqual(List<DefineValues> expected, List<DefineValues> output) {
		boolean result2 = expected.containsAll(output);
		boolean result1 = output.containsAll(expected);
		boolean result = result1 && result2;
		if (!result)
			printDefineValues(expected, output);
		return result;
	}
}
