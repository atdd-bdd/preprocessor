Feature: Abstract Data Types 

Scenario:   Valid Pathnames 
Given pathname When processed Then valid or not 
|Pathname   |Valid| Error        |
|feature    |true |              |
|feature/   |true |              |
|feature*** |false| BAD_PATHNAME |

Scenario: Adding to Pathname 
Given Pathname When added Then result is 
|Pathname        |Add          |Result|
|feature         |something    |feature\something|
|feature\\       |something    |feature\something| 
|feature/        |/something   |feature\something| 
|feature         |\\something  |feature\something| 
|feature\\folder |/something          |feature\\folder\\something|
|feature\\folder |/something\\folder  |feature\\folder\\something\\folder|

Scenario: Adding invalid to Pathname 
Given Pathname When added Then result is 
|Pathname   |Add             |Result  |Error|
|feature    |something****   |feature |BAD_PATHNAME| 