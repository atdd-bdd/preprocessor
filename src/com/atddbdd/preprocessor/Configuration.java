package com.atddbdd.preprocessor;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Configuration {

	public static void resetToDefault() {
		relativeIncludeDirectory = DefaultConfiguration.relativeIncludeDirectory;
		currentLocale = DefaultConfiguration.currentLocale;
		inputFeaturePath = DefaultConfiguration.inputFeaturePath;
		outputFeaturePath = DefaultConfiguration.outputFeaturePath;
		debugging = DefaultConfiguration.debugging;
		charset = DefaultConfiguration.charset;
		maximum_recursion_includes = DefaultConfiguration.maximum_recursion_includes;
		maximum_recursion_defines = DefaultConfiguration.maximum_recursion_defines;
		allow_redefines = DefaultConfiguration.allow_redefines;
		maximum_recursion_directories = DefaultConfiguration.maximum_recursion_directories;
		
				}

	public static List<ConfigurationValues> getAsList() {
		List<ConfigurationValues> list = new ArrayList<ConfigurationValues>();
		list.add(new ConfigurationValues("inputFeaturePath", inputFeaturePath.toString()));
		list.add(new ConfigurationValues("outputFeaturePath", outputFeaturePath.toString()));
		list.add(new ConfigurationValues("relativeIncludeDirectory", relativeIncludeDirectory.toString()));
		return list;
	}
	private static boolean oldDebugging = false; 
	public static void turnOnDebuggingandSaveCurrentFlag() {
		oldDebugging = Configuration.debugging; 
		Configuration.debugging = true; 
	}
	public static void turnOffDebuggingandRestoreCurrentFlag() {
		Configuration.debugging = false; 
		Configuration.debugging = oldDebugging; 
	}
	
	public static Pathname relativeIncludeDirectory;
	public static Locale currentLocale ;
	public static Pathname inputFeaturePath;
	public static Pathname outputFeaturePath;
	public static boolean debugging;
	public static Charset charset;
	public static int maximum_recursion_includes;
	public static int maximum_recursion_defines;
	public static boolean allow_redefines;
	public static int maximum_recursion_directories;

	}


