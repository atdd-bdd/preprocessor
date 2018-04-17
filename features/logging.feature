Feature: Logging 

@external
Scenario:  Do some logging 
Given configuration debug is true 
When logging:
|Type|Message|
|Info|information|
|Debug|debug info|
|Warning|warning info|
|Warning|warning info 2|
|Error|error info|
Then look at console for messages 
Then error count should be 1 
Then warning count should be 2


Scenario:  Attempt to read error that does not exist
Then check for error reported as XXXXX
Then error reported as ILLEGAL_ARGUMENT

