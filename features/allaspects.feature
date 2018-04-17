Feature: Multiple aspects combined in Preprocessor

Background:  
When add local function: 
|Name|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsZ|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed| 


Scenario:  Process include with define 
Given file SampleInclude.txt exists with: 
"""
#define X 14

"""
When processing: 
""" 
First line
#include "SampleInclude.txt"
Value is X 
Last line
"""
Then result is: 
"""
First line
Value is 14 
Last line
"""


Scenario:  Process define in an expression 

Given defines set up:
|Define|Value|
|Y | 15 |
|X | = Y + 3| 
When processing defines
Then defines are:
|Define|Value|
|Y | 15 |
|X | 18| 


Scenario:  Process bad expression 
Given defines set up:
|Define|Value|
|Y | q17 |
|X | = Y + 3| 
When processing defines
Then defines are:
|Define|Value|
|Y | q17 |
|X | q17 + 3| 


Scenario:  Process an internal function in expression 

Given defines set up:
|Define|Value|
|X |= TestFunctionReturnsAAA() |
|Y | = TestFunctionReturnsAAA(a) | 
|Z | = TestFunctionReturnsAAA(a,b)  | 
When processing defines
Then defines are:
|Define|Value|
|X |AAA|
|Y |AAAa| 
|Z |AAAab| 

Scenario:  Process define within function parameter
Given defines set up:
|Define|Value|
|X|Something to append|
|Y|= TestFunctionReturnsAAA(X) | 
When processing defines
Then defines are:
|Define|Value|
|X|Something to append|
|Y|AAASomething to append|

Scenario:   Process a function parameter in an expression
Given defines set up:
|Define|Value|
|Y|= TestFunctionReturnsWhatIsPassed(11) + 3| 
When processing defines
Then defines are:
|Define|Value|
|Y|14|

