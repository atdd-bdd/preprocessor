$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ADT.feature");
formatter.feature({
  "name": "Abstract Data Types",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid Pathnames",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "pathname When processed Then valid or not",
  "rows": [
    {
      "cells": [
        "Pathname",
        "Valid",
        "Error"
      ]
    },
    {
      "cells": [
        "feature",
        "true",
        ""
      ]
    },
    {
      "cells": [
        "feature/",
        "true",
        ""
      ]
    },
    {
      "cells": [
        "feature***",
        "false",
        "BAD_PATHNAME"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsADT.pathname_When_processed_Then_valid_or_not(PathnameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding to Pathname",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Pathname When added Then result is",
  "rows": [
    {
      "cells": [
        "Pathname",
        "Add",
        "Result"
      ]
    },
    {
      "cells": [
        "feature",
        "something",
        "feature\\something"
      ]
    },
    {
      "cells": [
        "feature\\",
        "something",
        "feature\\something"
      ]
    },
    {
      "cells": [
        "feature/",
        "/something",
        "feature\\something"
      ]
    },
    {
      "cells": [
        "feature",
        "\\something",
        "feature\\something"
      ]
    },
    {
      "cells": [
        "feature\\folder",
        "/something",
        "feature\\folder\\something"
      ]
    },
    {
      "cells": [
        "feature\\folder",
        "/something\\folder",
        "feature\\folder\\something\\folder"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsADT.pathanme_When_added_Then_result_is(PathnameAddInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Adding invalid to Pathname",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Pathname When added Then result is",
  "rows": [
    {
      "cells": [
        "Pathname",
        "Add",
        "Result",
        "Error"
      ]
    },
    {
      "cells": [
        "feature",
        "something****",
        "feature",
        "BAD_PATHNAME"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsADT.pathanme_When_added_Then_result_is(PathnameAddInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/CoverageHigher.feature");
formatter.feature({
  "name": "Just to make Coverage Higher",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Call Methods that are not used normally",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Unused Methods",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsCoverage.unused_Methods()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/LocalFunctions.feature");
formatter.feature({
  "name": "Local Functions",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Added Local Function Returns Okay",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define X \u003d TestFunctionReturnsZ() \nThis is X"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "This is Z"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Local Function Returns Parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define X \u003d TestFunctionReturnsWhatIsPassed(ZZZ) \nThis is X"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "This is ZZZ"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Local Function Not There",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define X \u003d NotALocalFunction()\nThis is X"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "This is NotALocalFunction()"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Difference in Days",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define TODAY \u003d Today()\n#define THREE_DAYS_FROM_NOW \u003d TodayOffsetBy(3) \n#define DIFFERENCE \u003d DaysDifference(TODAY,THREE_DAYS_FROM_NOW)  \nDifference is DIFFERENCE"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "Difference is 3"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/Main.feature");
formatter.feature({
  "name": "Main Program",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Full Program",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "include file TestInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "#define X 1\n#define Y \u003d X + 3\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.include_file_TestInclude_txt_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "include file TestCSV.csv exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "FieldOne, FieldTwo\n1,2\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.include_file_TestInclude_txt_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature file TestFeature.feature exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Feature: Test Feature\n#include \"TestInclude.txt\" \nScenario: One\nGiven value is X\nWhen processed\nThen result is Y\nScenario Outline: Two \nGiven value is \u003cFieldOne\u003e\nWhen processed \nThen result is \u003cFieldTwo\u003e \nExamples:\n#include \"TestCSV.csv\"\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_TestFeature_feature_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "main program run",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsMain.main_program_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature file TestFeature.feature contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "Feature: Test Feature\nScenario: One\nGiven value is 1\nWhen processed\nThen result is 4\nScenario Outline: Two \nGiven value is \u003cFieldOne\u003e\nWhen processed \nThen result is \u003cFieldTwo\u003e \nExamples:\n|FieldOne|FieldTwo|\n|1|2|\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_TestFeature_feature_contains(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Full Program with nested features and includes",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "include file /folder/TestInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "#define X 1\n#define Y \u003d X + 3\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.include_file_TestInclude_txt_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature file folder/TestFeature.feature exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Feature: Test Feature\n#include \"folder/TestInclude.txt\" \nGiven value is X\nWhen processed\nThen result is Y\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_TestFeature_feature_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "main program run",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsMain.main_program_run()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature file folder/TestFeature.feature contains",
  "keyword": "Then ",
  "doc_string": {
    "value": "Feature: Test Feature\nGiven value is 1\nWhen processed\nThen result is 4\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_TestFeature_feature_contains(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete files",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "feature out file TestFeature.feature exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Feature: Test Feature\nGiven value is X\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_out_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature out file foldertest/TestOneFeature.feature exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Feature: Test One Feature\nGiven value is Y \n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.feature_out_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature out file foldertest/TestOneFeature.feature does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsMain.feature_file_foldertest_TestOneFeature_feature_does_not_exist(Pathname)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "feature out file TestFeature.feature does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsMain.feature_file_foldertest_TestOneFeature_feature_does_not_exist(Pathname)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Configuration value settings",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "configuration values are:",
  "rows": [
    {
      "cells": [
        "Name",
        "Value"
      ]
    },
    {
      "cells": [
        "inputFeaturePath",
        "featurein"
      ]
    },
    {
      "cells": [
        "outputFeaturePath",
        "featureout"
      ]
    },
    {
      "cells": [
        "relativeIncludeDirectory",
        "featurein"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.configuration_values_are(ConfigurationValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "parameters are:",
  "rows": [
    {
      "cells": [
        "Argv"
      ]
    },
    {
      "cells": [
        "-featurein"
      ]
    },
    {
      "cells": [
        "xxx"
      ]
    },
    {
      "cells": [
        "-featureout"
      ]
    },
    {
      "cells": [
        "yyy"
      ]
    },
    {
      "cells": [
        "-include"
      ]
    },
    {
      "cells": [
        "zzz"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsMain.parameters_are(ParameterInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "configuration values are:",
  "rows": [
    {
      "cells": [
        "Name",
        "Value"
      ]
    },
    {
      "cells": [
        "inputFeaturePath",
        "xxx"
      ]
    },
    {
      "cells": [
        "outputFeaturePath",
        "yyy"
      ]
    },
    {
      "cells": [
        "relativeIncludeDirectory",
        "zzz"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsMain.configuration_values_are(ConfigurationValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute command line settings in parser",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "executing program as:",
  "keyword": "* ",
  "doc_string": {
    "value": "java -jar preprocessor.jar -featurein featurein -featureout featureout -include featurein "
  }
});
formatter.match({
  "location": "StepDefinitionsMain.executing_program_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "delete feature output",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsMain.delete_feature_output()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To execute command line settings in parser",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "executing program as:",
  "keyword": "* ",
  "doc_string": {
    "value": "java -jar preprocessor.jar "
  }
});
formatter.match({
  "location": "StepDefinitionsMain.executing_program_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/allaspects.feature");
formatter.feature({
  "name": "Multiple aspects combined in Preprocessor",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process include with define",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "file SampleInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "#define X 14\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"SampleInclude.txt\"\nValue is X \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nValue is 14 \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process define in an expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "15"
      ]
    },
    {
      "cells": [
        "X",
        "\u003d Y + 3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "15"
      ]
    },
    {
      "cells": [
        "X",
        "18"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process bad expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "q17"
      ]
    },
    {
      "cells": [
        "X",
        "\u003d Y + 3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "q17"
      ]
    },
    {
      "cells": [
        "X",
        "q17 + 3"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process an internal function in expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "\u003d TestFunctionReturnsAAA()"
      ]
    },
    {
      "cells": [
        "Y",
        "\u003d TestFunctionReturnsAAA(a)"
      ]
    },
    {
      "cells": [
        "Z",
        "\u003d TestFunctionReturnsAAA(a,b)"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "AAA"
      ]
    },
    {
      "cells": [
        "Y",
        "AAAa"
      ]
    },
    {
      "cells": [
        "Z",
        "AAAab"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process define within function parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "Something to append"
      ]
    },
    {
      "cells": [
        "Y",
        "\u003d TestFunctionReturnsAAA(X)"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "Something to append"
      ]
    },
    {
      "cells": [
        "Y",
        "AAASomething to append"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "add local function:",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsZ"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsAAA"
      ]
    },
    {
      "cells": [
        "com.atddbdd.preprocessor.tests.TestFunctionReturnsWhatIsPassed"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.add_local_function(NameInput\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Process a function parameter in an expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "\u003d TestFunctionReturnsWhatIsPassed(11) + 3"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "14"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/csv.feature");
formatter.feature({
  "name": "CSV Files",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Parse a CSV file",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "file SampleInclude.csv exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "a1,b1,c1\na2,b2,c2\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "parsing SampleInclude.csv as csv file",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionCSV.parsing_as_csv_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "parsed file is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "|a1|b1|c1|\n|a2|b2|c2|\n"
  }
});
formatter.match({
  "location": "StepDefinitionCSV.parsed_file_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/define.feature");
formatter.feature({
  "name": "Defines in Preprocessor",
  "description": "Notes:\nProcessing steps: \nI.   Merge #include file contents with current file \nII.  Recognize #defines, remove from source and make a map of them \nIII. If define replacement starts with \u003d, then\n\ta.) Replace defines within defines \n\tb.) call local functions if function () appears in replacement \n\tc.) call expression evaluator (mathematical expressions)  \n\t\n\tIf defines or local functions not found, then expression remains the same \n\tIf expression cannot be evaluated, then expression remains the same ",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Intermediate Files in creating Defines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X 12\nValue is X \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "No value for define results in empty string",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X \nValue is X \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        ""
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Allowable Defines Names",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X 12\n#define X___123Z 13 \n#define X.Y 14 \n#define X\u0026@#$ 18 "
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "X___123Z",
        "13"
      ]
    },
    {
      "cells": [
        "X.Y",
        "14"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "One Define is replaced in file",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X 12\nValue is X \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nValue is 12 \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Defines are replaced at beginning and end of lines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "X at beginning\n#define X 12\nat end X"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "12 at beginning\nat end 12"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Replace Defines Using Intermediate Setup Defines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "string is replaced",
  "keyword": "When ",
  "doc_string": {
    "value": "X is X is X"
  }
});
formatter.match({
  "location": "StepDefinitions.string_is_replaced(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "output string is",
  "keyword": "Then ",
  "doc_string": {
    "value": "12 is 12 is 12"
  }
});
formatter.match({
  "location": "StepDefinitions.output_string_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check that intermediate files match the setup files",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "Y",
        "15"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "Y",
        "15"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Replace Defines with Two Setup Defines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "Y",
        "21"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "string is replaced",
  "keyword": "When ",
  "doc_string": {
    "value": "X is Y is X"
  }
});
formatter.match({
  "location": "StepDefinitions.string_is_replaced(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "output string is",
  "keyword": "Then ",
  "doc_string": {
    "value": "12 is 21 is 12"
  }
});
formatter.match({
  "location": "StepDefinitions.output_string_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Replacement with two defines in file",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X 12\n#define Y 14\nValue is X \nY is another value\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nValue is 12 \n14 is another value\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Redefine in file uses last value as default configuration",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X 12\n#define X 14\nValue is X \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nValue is 14 \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process one expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#define X \u003d 12 + 3\nValue is X end\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nValue is 15 end\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process define using another define in expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "Y",
        "\u003d X"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "Y",
        "12"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process Define with Redefine Not Allowed",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "redefine is false",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.redefine_is(boolean)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "X",
        "14"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as DUPLICATE_DEFINE",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process Define with Redefine  Allowed",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "redefine is true",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.redefine_is(boolean)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "12"
      ]
    },
    {
      "cells": [
        "X",
        "14"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "14"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process Define with Forward Defines and show define not replaced",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "\u003d Y"
      ]
    },
    {
      "cells": [
        "Y",
        "14"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "X",
        "Y"
      ]
    },
    {
      "cells": [
        "Y",
        "14"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process define using itself as value",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "defines set up:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "\u003d Y"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.defines_set_up(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing defines",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.processing_defines()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "defines are:",
  "rows": [
    {
      "cells": [
        "Define",
        "Value"
      ]
    },
    {
      "cells": [
        "Y",
        "Y"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.defines_are(DefineValues\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as DEFINE_USED_IN_DEFINE",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/expression.feature");
formatter.feature({
  "name": "Expressions in Preprocessor",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Calculate Expression",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "expression \"1 + 2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.expression(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "evaluated",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.evaluated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "expression \"1.1 + 2.3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.expression(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "evaluated",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.evaluated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is \"3.4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefintionsExpressionCalculator.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Expression in defines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define X 1\n#define Y \u003d X + 3\nFeature: Test Feature\nScenario: One\nGiven value is X\nWhen processed\nThen result is Y"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "Feature: Test Feature\nScenario: One\nGiven value is 1\nWhen processed\nThen result is 4"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Bad Expression in defines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define X 1\n#define Y \u003d X \u0026* 3\nFeature: Test Feature\nScenario: One\nGiven value is X\nWhen processed\nThen result is Y"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "Feature: Test Feature\nScenario: One\nGiven value is 1\nWhen processed\nThen result is 1 \u0026* 3"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as CANNOT_EVALUATE",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Difference in Days",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "#define TODAY \u003d Today()\n#define THREE_DAYS_FROM_NOW \u003d TodayOffsetBy(3) \n#define DIFFERENCE \u003d DaysDifference(TODAY,THREE_DAYS_FROM_NOW)  \nDifference is DIFFERENCE"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "Difference is 3"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/fileoperations.feature");
formatter.feature({
  "name": "FileOperations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Write to file in directory that doesn\u0027t exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "writing to xerefewedfes/ewrted",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsFileOperations.writing_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as UNABLE_TO_WRITE_TO",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Read from file that doesn\u0027t exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "reading to xerefewedfes/ewrted",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsFileOperations.reading_to(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as UNABLE_TO_READ",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Read from csv file that doesn\u0027t exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "reading from csv file xerefewedfes/ewrted.csv",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionsFileOperations.reading_from_csv_file(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as UNABLE_TO_READ",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/include.feature");
formatter.feature({
  "name": "Include Files in Preprocessor",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Process a simple include",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "file SampleInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Something to include\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"SampleInclude.txt\" \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nSomething to include\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process two include files",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "file SampleInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Something to include\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "file SampleIncludeOther.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Other to include\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"SampleInclude.txt\"\n#include \"SampleIncludeOther.txt\"\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nSomething to include\nOther to include\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process  nested includes",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "file SampleInclude.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Something to include\n#include \"SampleIncludeOther.txt\"\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "file SampleIncludeOther.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Other to include\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"SampleInclude.txt\"\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nSomething to include\nOther to include\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "CSV File",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "include file TestCSV.csv exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "FieldOne, FieldTwo\n1,2\n"
  }
});
formatter.match({
  "location": "StepDefinitionsMain.include_file_TestInclude_txt_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "Feature: Test Feature\nScenario Outline: Two \nGiven value is \u003cFieldOne\u003e\nWhen processed \nThen result is \u003cFieldTwo\u003e \nExamples:\n#include \"TestCSV.csv\"\n"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "Feature: Test Feature\nScenario Outline: Two \nGiven value is \u003cFieldOne\u003e\nWhen processed \nThen result is \u003cFieldTwo\u003e \nExamples:\n|FieldOne|FieldTwo|\n|1|2|\n"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A nested include that exceeds recursion limit",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "file SampleIncludeRecursive.txt exists with:",
  "keyword": "Given ",
  "doc_string": {
    "value": "Something to include\n#include \"SampleIncludeRecursive.txt\"\n"
  }
});
formatter.match({
  "location": "StepDefinitions.file_exists_with(Pathname,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"SampleIncludeRecursive.txt\"\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\nSomething to include\n#include \"SampleIncludeRecursive.txt\"\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process include that does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \"IncludeThatDoesNotExist.txt\" \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nINCLUDE NOT FOUND\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as CANNOT_READ_INCLUDE",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Process include line without a filename",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "processing:",
  "keyword": "When ",
  "doc_string": {
    "value": "First line\n#include \nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.processing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "result is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "First line\nINCLUDE NOT FOUND\nLast line"
  }
});
formatter.match({
  "location": "StepDefinitions.result_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as NO_INCLUDE_FILENAME_FOR_LINE",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("features/logging.feature");
formatter.feature({
  "name": "Logging",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Attempt to read error that does not exist",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "check for error reported as XXXXX",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.check_for_error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error reported as ILLEGAL_ARGUMENT",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsLogging.error_reported_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});