Feature: CSV Files 


Scenario: Parse a CSV file 
Given file SampleInclude.csv exists with: 
"""
a1,b1,c1
a2,b2,c2

"""
When parsing SampleInclude.csv as csv file
Then parsed file is: 
"""
|a1|b1|c1|
|a2|b2|c2|

"""