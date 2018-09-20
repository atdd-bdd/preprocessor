Feature: Test Feature
Scenario: One
Given value is 1
When processed
Then result is 4
Scenario Outline: Two 
Given value is <FieldOne>
When processed 
Then result is <FieldTwo> 
Examples:
|FieldOne|FieldTwo|
|1|2|
