Feature:  Local Functions 

Background:  
When add local function: 
|Name|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsZ|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA|
|com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed| 


Scenario:   Added Local Function Returns Okay
When processing:
"""
#define X = TestFunctionReturnsZ() 
This is X
"""
Then result is: 
"""
This is Z
"""

Scenario:   Local Function Returns Parameter 
When processing:
"""
#define X = TestFunctionReturnsWhatIsPassed(ZZZ) 
This is X
"""
Then result is: 
"""
This is ZZZ
"""

Scenario:   Local Function Not There
When processing:
"""
#define X = NotALocalFunction()
This is X
"""
Then result is: 
"""
This is NotALocalFunction()
"""

@random
#This will only pass when current date is set as result
Scenario:  Today Function 
When processing:
"""
#define X = Today() 
Today is X
"""
Then result is: 
"""
Today is X
"""

@random
#This will only pass when current date plus 3 is set as result
Scenario:  Today Function 
When processing:
"""
#define X = TodayOffsetBy(3) 
Today is X
"""
Then result is: 
"""
Today is X
"""

# NOTE:   Today() and other dates need to return something that is not an arithmetic expression (e.g. 3-2-2015) 
# Default is 3:2:2018, but this can be changed in DateFormatter.  

Scenario:  Difference in Days
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

@random 
Scenario:  Random Number Generator Should Always Give 1 
When processing:
"""
#define RANDOM_NUMBER = RandomInteger(1,1,1)
Random is RANDOM_NUMBER
"""
Then result is: 
"""
Random is 1
"""

@random 
Scenario:  Random Number Generator Gives an appropriate number
When processing:
"""
#define RANDOM_NUMBER = RandomInteger(1,10,1)
Random is RANDOM_NUMBER
"""
Then result is: 
"""
Random is X
"""


@random 
Scenario:  Random Number Generator Gives Something between 1 and 10
When processing:
"""
#define R1 = RandomInteger(1,10,1)
#define R2 = RandomInteger(1,10,1)
#define R3 = RandomInteger(1,10,1)
#define R4 = RandomInteger(1,10,1)
#define R5 = RandomInteger(1,10,1)
#define R6 = RandomInteger(1,10,1)
#define R7 = RandomInteger(1,10,1)
#define R8 = RandomInteger(1,10,1)
#define R9 = RandomInteger(1,10,1)
#define R10 = RandomInteger(1,10,1)
When computing R1,R2,R3,R4,R5,R6,R7,R8,R9,R10
"""
Then result is: 
"""
When computing  X
"""

@random 
Scenario:  Random Number Generator Gives Something at least delta apart
When processing:
"""
#define R1 = RandomInteger(1,9,2)
#define R2 = RandomInteger(1,9,2)
#define R3 = RandomInteger(1,9,2)
#define R4 = RandomInteger(1,9,2)
#define R5 = RandomInteger(1,9,2)
#define R6 = RandomInteger(1,10,3)
#define R7 = RandomInteger(1,10,3)
#define R8 = RandomInteger(1,10,3)
#define R9 = RandomInteger(1,10,3)
#define R10 = RandomInteger(1,10,3)
#define R11 = RandomInteger(1,4,3)
#define R12 = RandomInteger(1,4,3)
#define R13 = RandomInteger(1,4,3)
When computing R1,R2,R3,R4,R5
When computing R6,R7,R8,R9,R10
When computing R11,R12,R13
"""
Then result is: 
"""
When computing X
When computing Y
When computing Z
"""
