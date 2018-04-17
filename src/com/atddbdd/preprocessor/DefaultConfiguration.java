package com.atddbdd.preprocessor;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import java.util.Locale;

public class DefaultConfiguration {
	public static Pathname relativeIncludeDirectory;
	public static Locale currentLocale = Locale.US;
	public static Pathname inputFeaturePath;
	public static Pathname outputFeaturePath;
	public static boolean debugging = false;
	public static Charset charset = StandardCharsets.US_ASCII;
	public static int maximum_recursion_includes = 10;
	public static int maximum_recursion_defines = 10;
	public static boolean allow_redefines = true;
	public static int maximum_recursion_directories = 10;
		static {
		try {
			relativeIncludeDirectory = new Pathname("featurein");
			inputFeaturePath = new Pathname("featurein");
			outputFeaturePath = new Pathname("featureout");
		} catch (PreprocessorException e) {
			Logging.error(ErrorStrings.UNABLE_TO_INITIALIZE_CONFIGURATION_WITH_PATHNAMES);
		}
	}

}
