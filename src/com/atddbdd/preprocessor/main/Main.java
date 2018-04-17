package com.atddbdd.preprocessor.main;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import com.atddbdd.preprocessor.Configuration;
import com.atddbdd.preprocessor.ErrorStrings;
import com.atddbdd.preprocessor.FileOperations;
import com.atddbdd.preprocessor.Logging;
import com.atddbdd.preprocessor.Pathname;
import com.atddbdd.preprocessor.Preprocessor;

public class Main {
	static final int ERROR_EXIT_CODE = 1; 
	public static void main(String [] args) {
		Configuration.resetToDefault();
		setConfigurationFromArguments(args); 
		mainMethod(); 
		
		if (Logging.getNumberErrors() > 0) {
			Logging.error(ErrorStrings.EXITING_ON_ERROR); 
			System.exit(ERROR_EXIT_CODE);
		}
		else 
			System.exit(0);
	}

	public static void mainMethod() {
		Logging.list("Cucumber Preprocessor");
		listPackages();
		Locale.setDefault(Configuration.currentLocale);
		List<Pathname> features = findFeatureFiles();
		convertFeatures(features, Configuration.outputFeaturePath);
		}

	private static List<Pathname> findFeatureFiles() {
		List<Pathname> features = findFeatures(Configuration.inputFeaturePath);
		Logging.list("Feature files are: ");
		for (Pathname f: features)
		{
			Logging.list("Files are " + f);
		}
		return features;
	}

	private static void convertFeatures(List<Pathname> features, Pathname outputFeaturePath) {
		for (Pathname f: features) {
			Pathname reduced = f.remove(Configuration.inputFeaturePath); 
			Pathname out = outputFeaturePath.add(reduced); 
			translate(f, out); 
		}
		
	}

	private static void translate(Pathname in, Pathname out) {
		String input = FileOperations.readNoPath(in); 
		String output = new Preprocessor().process(input); 
		FileOperations.writeNoPath(out, output); 
		
	}

	private static List<Pathname> findFeatures(Pathname inputFeaturePath) {
		// Starting in the directory, return all the feature files in it 
		// Will make directory recursive later 
		int count = 0; 
		List<Pathname> files = new ArrayList<Pathname>(); 
		findFeaturesOne(inputFeaturePath, files, count); 
		return files; 
	}

	private static void findFeaturesOne(Pathname inputFeaturePath, List<Pathname> files, int count) {
		if (count > Configuration.maximum_recursion_directories)
			return;
		File directory = new File(inputFeaturePath.toString()); 
		if (directory.isDirectory())
		{
			File [] fileList = directory.listFiles(); 
			for (File f: fileList)
			{
				String name = f.getName();
				Pathname path = inputFeaturePath.add(name); 
				if (name.endsWith(".feature")) {
					files.add(path); 
				}
				if (f.isDirectory())
				{
					count++;
					findFeaturesOne(path, files, count); 
				}
			}
		}
		
		return ;
	}

	public static void setConfigurationFromArguments(String[] args) {
		CommandLineProcessor clp = new CommandLineProcessor(); 
		clp.processCommandLine(args);
	}
	public static void listPackages() {
	String packages [] = { 
			"commons-cli-1.4.jar",
			"commons-csv-1.5.jar",
			"cucumber-core-2.3.1.jar",
			"cucumber-html-0.2.3.jar",
			"cucumber-java-2.3.1.jar",
			"cucumber-junit-2.3.1.jar",
			"cucumber-jvm-deps-1.0.6.jar",
			"EvalEx-2.0.jar",
			"gherkin-5.0.0.jar",
			"joda-convert-2.0.1.jar",
			"joda-time-2.9.9.jar",
			"junit-4.7.jar",
			"mxparser.jar",
			"tag-expressions-1.1.1.jar"}; 
	Logging.list("This jar includes the following packages");
	
	for (String p: packages) {
		Logging.list(p); 
	}

	}
}
