Feature: Multi Defines in Preprocessor



@test
Scenario: Intermediate Files in creating Defines 
When processing:
""" 
First line
#define
|X|12|
|Y|10| 
Value is X 
Last line
"""
Then defines are:
|Define|Value|
|X|12| 
|Y|10| 

@test
Scenario: No value for define results in empty string 
When processing:
""" 
First line
#define
|X||
Value is X 
Last line
"""
Then defines are:
|Define|Value|
|X|| 


@test
Scenario:  Two defines are replaced in file
When processing: 
""" 
First line
#define
|X|12|
|Y|10| 
Value is X
Value is Y
Last line
"""
Then result is: 
"""
First line
Value is 12
Value is 10
Last line
"""


