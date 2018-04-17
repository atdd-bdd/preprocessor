package com.atddbdd.preprocessor.main;


import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.ErrorStrings;
import com.atddbdd.preprocessor.Logging;
import com.atddbdd.preprocessor.Pathname;
import com.atddbdd.preprocessor.PreprocessorException;

public class CommandLineProcessor {
	Options options; 
	public CommandLineProcessor() {
		options = new Options();
		options.addOption(optionSetup("featurein", "Output directory for features"));
		options.addOption(optionSetup("featureout", "Input directory for features"));
		options.addOption(optionSetup("include", "Include directory"));
	}
	public Option optionSetup(String shortName, String description) {
		Option opt = new Option(shortName, true, description);

		return opt;
	}
	public void processCommandLine(String [] args) {
		CommandLineParser parser = new DefaultParser();
	    try {
	        // parse the command line arguments
	        CommandLine line = parser.parse( options, args );
	        setConfiguration(line); 
	        printConfiguration();
	        }
	    catch( org.apache.commons.cli.ParseException exp ) {
	        // oops, something went wrong
	        Logging.error( ErrorStrings.PARSING_FAILED_REASON + exp.getMessage() );
	    }
	}
	public void setConfiguration(CommandLine line) 
	{
		String filename = ""; 
		if( line.hasOption( "featureout" ) ) {
		    try {
		    	filename = line.getOptionValue( "featureout" ); 
				Configuration.outputFeaturePath = new Pathname(filename);
			} catch (PreprocessorException e) {
				Logging.error( ErrorStrings.CONFIGURATION_OUTPUT_FEATURE_PATH_IS_BAD + filename );
			}
		}
		if( line.hasOption( "featurein" ) ) {
	    	filename = line.getOptionValue( "featurein" ); 
		    try {
				Configuration.inputFeaturePath = new Pathname(filename);
			    Configuration.relativeIncludeDirectory= new Pathname(filename); 
			} catch (PreprocessorException e) {
				Logging.error( ErrorStrings.CONFIGURATION_INPUT_FEATURE_PATH_IS_BAD + filename );
			}
		}
		if( line.hasOption( "include" ) ) {
	    	filename = line.getOptionValue( "include" ); 
		    try {
				Configuration.relativeIncludeDirectory= new Pathname(filename);
			} catch (PreprocessorException e) {
				Logging.error( ErrorStrings.CONFIGURATION_INCLUDE_PATH_IS_BAD + filename );
			}
		    
		}
	}
	public void printConfiguration() {
		Logging.list("Configuration is:");
		Logging.list("Output Feature Path: " + Configuration.outputFeaturePath.toString() );; 
		Logging.list("Input Feature Path: " + Configuration.inputFeaturePath.toString() );; 
		Logging.list("Include Path: " + Configuration.relativeIncludeDirectory.toString() );; 
		
	}

}
