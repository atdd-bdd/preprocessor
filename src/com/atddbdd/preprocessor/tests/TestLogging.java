package com.atddbdd.preprocessor.tests;

import java.util.ArrayList;
import java.util.List;

import com.atddbdd.preprocessor.LoggingInterface;

public class TestLogging implements LoggingInterface {
	static List<String> log = new ArrayList<String>(); 
	public static boolean findInLog(String typeToFind, String toFind)
	{
		System.out.println("Looking for " + typeToFind);
		String regex = typeToFind + ".*?" + toFind; 
		for (String l : log) {
			System.out.println("line is " + l);
			if (l.contains(regex))
				return true;
		}
		return false; 
	}
	@Override
	public void debug(String out) {
		System.out.println("DEBUG:" +  out);
	}

	@Override
	public void warning(String out) {
		log.add("WARNING " + out);
	}

	@Override
	public void error(String out) {
		log.add("***ERROR*** " + out);
	}

	@Override
	public void list(String out) {
		log.add(out);
	}

	@Override
	public void info(String out) {
		log.add("INFO " + out);

	}
	@Override 
	public void reset() {
		log = new ArrayList<String>(); 
	}
	
	public void printErrors() {
		for (String s: log) {
		System.out.println(s);
		}
	}
	@Override
	public boolean isErrorStringInLog(String value) {
	for (String s: log) {
		if (s.contains(value))
			return true;
	}
	return false;
}

}
