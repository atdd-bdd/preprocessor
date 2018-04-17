Feature: Expressions in Preprocessor

Scenario:  Calculate Expression 
Given expression "1 + 2"
When evaluated 
Then result is "3" 

Given expression "1.1 + 2.3"
When evaluated 
Then result is "3.4" 

Scenario: Expression in defines 
When processing:
""" 
#define X 1
#define Y = X + 3
Feature: Test Feature
Scenario: One
Given value is X
When processed
Then result is Y
"""
Then result is:
"""
Feature: Test Feature
Scenario: One
Given value is 1
When processed
Then result is 4
"""

Scenario: Bad Expression in defines 
When processing:
""" 
#define X 1
#define Y = X &* 3
Feature: Test Feature
Scenario: One
Given value is X
When processed
Then result is Y
"""
Then result is:
"""
Feature: Test Feature
Scenario: One
Given value is 1
When processed
Then result is 1 &* 3
"""
Then error reported as CANNOT_EVALUATE


Scenario: Difference in Days 
When processing:
"""
#define TODAY = Today()
#define THREE_DAYS_FROM_NOW = TodayOffsetBy(3) 
#define DIFFERENCE = DaysDifference(TODAY,THREE_DAYS_FROM_NOW)  
Difference is DIFFERENCE
"""
Then result is:
"""
Difference is 3
"""



