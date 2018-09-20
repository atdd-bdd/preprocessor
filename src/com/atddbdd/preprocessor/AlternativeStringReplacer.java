package com.atddbdd.preprocessor;
import java.util.ArrayList;
public class AlternativeStringReplacer {
	ArrayList<String> out = new ArrayList<String>();
	
	public AlternativeStringReplacer() {
	}
	public void copy(String line)
	{
		out.add(line);
	}
	public String ReturnString() {
		StringBuffer sb = new StringBuffer(); 
		for (int i =0; i < out.size(); i++)
		{
			sb.append(out.get(i)); 
		}
		String output = sb.toString();
		return output; 
	}
	



}
