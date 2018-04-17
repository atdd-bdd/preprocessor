package com.atddbdd.preprocessor.tests;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.FileOperations;
import com.atddbdd.preprocessor.Logging;

public class TestResetter {

	public static void reset() {
		Configuration.resetToDefault();
		Logging.resetCounts();	
		Logging.li = new TestLogging(); 
		FileOperations.deleteDirectory(Configuration.outputFeaturePath); 
	    Configuration.turnOffDebuggingandRestoreCurrentFlag();
	}

	public static void post() {
		Configuration.turnOffDebuggingandRestoreCurrentFlag();
		//Logging.printErrors();	
	}

}
