package com.atddbdd.preprocessor;

import java.io.File;
import java.io.IOException;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

public class CSVFileParser {
	public static String parseIntoTable(Pathname filename) {
		StringBuffer result = new StringBuffer();
		File csvData = new File(filename.toString()); 
		CSVParser parser;
		try {
			parser = CSVParser.parse(csvData, Configuration.charset, CSVFormat.RFC4180);
			for (CSVRecord csvRecord : parser) {
				result.append("|");
				int size = csvRecord.size();
				for (int i = 0; i < size; i++) {
					result.append(csvRecord.get(i).trim());
					result.append("|");
				}
				result.append("\n");
			}
		} 
		catch (IOException e) {
			result.append("Unable to read csv file " + filename);
			Logging.error(ErrorStrings.UNABLE_TO_READ + filename);
		}
		String output = result.toString();
		return output;
	}
}
