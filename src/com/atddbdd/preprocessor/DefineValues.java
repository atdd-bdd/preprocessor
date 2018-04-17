package com.atddbdd.preprocessor;


public class DefineValues {
	public DefineValues(String key, String value) {
		this.define = key; 
		this.value = value;
	}
	public String define;
	public String value; 


	@Override 
	public String toString() {
		return ":" + define + ":=:" + value +":"; 
	}

	@Override
	public boolean equals(Object other)
	{
		if (other.getClass()!= this.getClass()) {
			return false; 
		}
		DefineValues compare = (DefineValues) other; 
		boolean b = this.value.equals(compare.value) && 
				this.define.equals(compare.define); 
		return b; 

	}
/* Not needed for now	
	@Override
	public int hashCode() {
		return this.define.hashCode(); 
	}
*/ 
	
}
