package com.atddbdd.preprocessor;

public class ConfigurationValues {
	public String name;
	public String value;

	public ConfigurationValues(String name, String value) {
		this.name = name;
		this.value = value;
	}

	@Override
	public String toString() {
		return (name + "=" + value);
	}
	@Override
	public boolean equals(Object other) {
		if (other.getClass() != this.getClass()) {
			return false;
		}
		ConfigurationValues compare = (ConfigurationValues) other;
		boolean b = this.value.equals(compare.value) && this.name.equals(compare.name);
		return b;

	}
/* Not yet needed
	@Override
	public int hashCode() {
		return this.name.hashCode();
	}
*/ 
}
