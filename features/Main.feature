
Feature:  Main Program 

Background: 
Given delete feature output


Scenario:  Full Program 

Given include file TestInclude.txt exists with: 
"""
#define X 1
#define Y = X + 3

"""
Given include file TestCSV.csv exists with: 
"""
FieldOne, FieldTwo
1,2

"""
Given feature file TestFeature.feature exists with: 
"""
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

"""
When main program run 
Then feature file TestFeature.feature contains 
"""
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

"""



Scenario:  Full Program with nested features and includes

Given include file /folder/TestInclude.txt exists with: 
"""
#define X 1
#define Y = X + 3

"""
Given feature file folder/TestFeature.feature exists with: 
"""
Feature: Test Feature
#include "folder/TestInclude.txt" 
Given value is X
When processed
Then result is Y

"""
When main program run 
Then feature file folder/TestFeature.feature contains 
"""
Feature: Test Feature
Given value is 1
When processed
Then result is 4

"""


Scenario: Delete files 
Given feature out file TestFeature.feature exists with: 
"""
Feature: Test Feature
Given value is X

"""
Given feature out file foldertest/TestOneFeature.feature exists with: 
"""
Feature: Test One Feature
Given value is Y 

"""
When delete feature output
Then feature out file foldertest/TestOneFeature.feature does not exist 
Then feature out file TestFeature.feature does not exist


Scenario: Configuration value settings
Given configuration values are:
|Name|Value|
|inputFeaturePath|featurein|
|outputFeaturePath|featureout|
|relativeIncludeDirectory|featurein|
When parameters are:
|Argv|
|-featurein|
|xxx|
|-featureout|
|yyy|
|-include|
|zzz|
Then configuration values are: 
|Name|Value|
|inputFeaturePath|xxx|
|outputFeaturePath|yyy|
|relativeIncludeDirectory|zzz|

 
Scenario: To execute command line settings in parser
* executing program as:
"""
java -jar preprocessor.jar -featurein featurein -featureout featureout -include featurein 
"""

 
Scenario: To execute command line settings in parser
* executing program as:
"""
java -jar preprocessor.jar 
"""


