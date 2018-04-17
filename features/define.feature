Feature: Defines in Preprocessor

Notes:
Processing steps: 
I.   Merge #include file contents with current file 
II.  Recognize #defines, remove from source and make a map of them 
III. If define replacement starts with =, then
	a.) Replace defines within defines 
	b.) call local functions if function () appears in replacement 
	c.) call expression evaluator (mathematical expressions)  
	
	If defines or local functions not found, then expression remains the same 
	If expression cannot be evaluated, then expression remains the same 


Scenario: Intermediate Files in creating Defines 
When processing:
""" 
First line
#define X 12
Value is X 
Last line
"""
Then defines are:
|Define|Value|
|X|12| 


Scenario: No value for define results in empty string 
When processing:
""" 
First line
#define X 
Value is X 
Last line
"""
Then defines are:
|Define|Value|
|X|| 

Scenario: Allowable Defines Names 
When processing:
""" 
First line
#define X 12
#define X___123Z 13 
#define X.Y 14 
#define X&@#$ 18 
"""
Then defines are:
|Define  |Value|
|X       |12   | 
|X___123Z|13   | 
|X.Y     |14   | 

Scenario:  One Define is replaced in file
When processing: 
""" 
First line
#define X 12
Value is X 
Last line
"""
Then result is: 
"""
First line
Value is 12 
Last line
"""

Scenario: Defines are replaced at beginning and end of lines
When processing:
""" 
X at beginning
#define X 12
at end X
"""
Then result is: 
""" 
12 at beginning
at end 12
"""

Scenario: Replace Defines Using Intermediate Setup Defines 
Given defines set up:
|Define|Value|
|X|12| 
When string is replaced
"""
X is X is X
"""
Then output string is
"""
12 is 12 is 12
"""

Scenario: Check that intermediate files match the setup files
Given defines set up:
|Define|Value|
|X|12| 
|Y|15|
When processing defines
Then defines are:
|Define|Value|
|X|12| 
|Y|15|

Scenario: Replace Defines with Two Setup Defines
Given defines set up:
|Define|Value|
|X|12|
|Y|21| 
When string is replaced
"""
X is Y is X
"""
Then output string is
"""
12 is 21 is 12
"""

Scenario: Replacement with two defines in file 
When processing: 
""" 
First line
#define X 12
#define Y 14
Value is X 
Y is another value
Last line
"""
Then result is: 
"""
First line
Value is 12 
14 is another value
Last line
"""

Scenario: Redefine in file uses last value as default configuration
When processing: 
""" 
First line
#define X 12
#define X 14
Value is X 
Last line
"""
Then result is: 
"""
First line
Value is 14 
Last line
"""

Scenario:  Process one expression 

When processing: 
""" 
First line
#define X = 12 + 3
Value is X end
Last line
"""
Then result is: 
"""
First line
Value is 15 end
Last line
"""


Scenario: Process define using another define in expression 
Given defines set up:
|Define|Value|
|X|12| 
|Y|= X|
When processing defines
Then defines are:
|Define|Value|
|X|12| 
|Y|12|


Scenario: Process Define with Redefine Not Allowed  
Given redefine is false 
Given defines set up:
|Define|Value|
|X|12| 
|X|14|
When processing defines
Then defines are:
|Define|Value|
|X|12| 
Then error reported as DUPLICATE_DEFINE


Scenario: Process Define with Redefine  Allowed  
Given redefine is true 
Given defines set up:
|Define|Value|
|X|12| 
|X|14|
When processing defines
Then defines are:
|Define|Value|
|X|14| 


Scenario: Process Define with Forward Defines and show define not replaced
Given defines set up:
|Define|Value|
|X|= Y| 
|Y|14|
When processing defines
Then defines are:
|Define|Value|
|X|Y| 
|Y|14|

 
Scenario: Process define using itself as value 
Given defines set up:
|Define|Value|
|Y|= Y|
When processing defines
Then defines are:
|Define|Value|
|Y|Y|
Then error reported as DEFINE_USED_IN_DEFINE


