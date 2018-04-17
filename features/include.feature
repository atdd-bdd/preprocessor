Feature: Include Files in Preprocessor

Scenario:  Process a simple include
#Note that """ needs a line break at the end to put on a separate line
Given file SampleInclude.txt exists with: 
"""
Something to include

"""
When processing: 
""" 
First line
#include "SampleInclude.txt" 
Last line
"""
Then result is: 
"""
First line
Something to include
Last line
"""

Scenario:  Process two include files
Given file SampleInclude.txt exists with: 
"""
Something to include

"""
Given file SampleIncludeOther.txt exists with: 
"""
Other to include

"""
When processing: 
""" 
First line
#include "SampleInclude.txt"
#include "SampleIncludeOther.txt"
Last line
"""
Then result is: 
"""
First line
Something to include
Other to include
Last line
"""

Scenario:  Process  nested includes
Given file SampleInclude.txt exists with: 
"""
Something to include
#include "SampleIncludeOther.txt"

"""
Given file SampleIncludeOther.txt exists with: 
"""
Other to include

"""
When processing: 
""" 
First line
#include "SampleInclude.txt"
Last line
"""
Then result is: 
"""
First line
Something to include
Other to include
Last line
"""

Scenario: CSV File
Given include file TestCSV.csv exists with:
"""
FieldOne, FieldTwo
1,2

"""
When processing:
"""
Feature: Test Feature
Scenario Outline: Two 
Given value is <FieldOne>
When processed 
Then result is <FieldTwo> 
Examples:
#include "TestCSV.csv"

"""
Then result is:
"""
Feature: Test Feature
Scenario Outline: Two 
Given value is <FieldOne>
When processed 
Then result is <FieldTwo> 
Examples:
|FieldOne|FieldTwo|
|1|2|

"""

Scenario:  A nested include that exceeds recursion limit
Given file SampleIncludeRecursive.txt exists with: 
"""
Something to include
#include "SampleIncludeRecursive.txt"

"""
When processing: 
""" 
First line
#include "SampleIncludeRecursive.txt"
Last line
"""
Then result is: 
"""
First line
Something to include
Something to include
Something to include
Something to include
Something to include
Something to include
Something to include
Something to include
Something to include
Something to include
#include "SampleIncludeRecursive.txt"
Last line
"""

Scenario:  Process include that does not exist
When processing: 
""" 
First line
#include "IncludeThatDoesNotExist.txt" 
Last line
"""
Then result is: 
"""
First line
INCLUDE NOT FOUND
Last line
"""
Then error reported as CANNOT_READ_INCLUDE


Scenario:  Process include line without a filename
When processing: 
""" 
First line
#include 
Last line
"""
Then result is: 
"""
First line
INCLUDE NOT FOUND
Last line
"""
Then error reported as NO_INCLUDE_FILENAME_FOR_LINE

