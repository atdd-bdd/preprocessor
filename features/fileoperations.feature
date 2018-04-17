Feature: FileOperations 

Scenario: Write to file in directory that doesn't exist
When writing to xerefewedfes/ewrted 
Then error reported as UNABLE_TO_WRITE_TO

Scenario: Read from file that doesn't exist 
When reading to xerefewedfes/ewrted 
Then error reported as UNABLE_TO_READ

Scenario: Read from csv file that doesn't exist
When reading from csv file xerefewedfes/ewrted.csv
Then error reported as UNABLE_TO_READ
