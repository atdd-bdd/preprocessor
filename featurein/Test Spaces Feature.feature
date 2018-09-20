Feature: Test Feature
#include "TestInclude.txt" 
Scenario: One
Given value is X
When processed
Then result is Y
Scenario Outline: Two 
Given value is <FieldOne>
When processed 
Then result is <FieldTwo> 
Examples:
#include "TestCSV.csv"
