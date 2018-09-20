package com.atddbdd.preprocessor;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Includes {
	public static String processIncludeLineA(String includeLine) {
		// Logging.debug("Include line is " + includeLine);
		String regex = "^\\s*"+Preprocessor.INCLUDE+"\\s+([\"<])([A-Za-z0-9\\/\\._]+?)([\">])";
		String output = "INCLUDE NOT FOUND\n";
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(includeLine);
		if (m.find()) {
			//  String tag = m.group(1);
			String filename = m.group(2);
			Pathname pathin;
			try {
				pathin = new Pathname(filename);
				if (!filename.endsWith(".csv")) {
					output = FileOperations.readInclude(pathin);
					if (output.equals(ErrorStrings.CANNOT_READ_FILE))
						throw new PreprocessorException(ErrorStrings.CANNOT_READ_INCLUDE + " " + pathin);
				}
				else {
					Pathname path = Configuration.relativeIncludeDirectory.add(pathin);
					output = CSVFileParser.parseIntoTable(path);
				}
			} catch (PreprocessorException e) {
				Logging.error(ErrorStrings.CANNOT_READ_INCLUDE + filename);
				output = "INCLUDE NOT FOUND\n";
			}

		} else {
			Logging.error(ErrorStrings.NO_INCLUDE_FILENAME_FOR_LINE + includeLine);
		}
		Logging.debug("Include replacement is " + output);
		return output;
	}
}
