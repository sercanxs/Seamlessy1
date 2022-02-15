$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can not login with \u003cnames\u003e as empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters the \"\u003cusername\u003e\" \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that empty username or password warning should be displayed \"Please fill out this field.\" \"\u003cusername\u003e\"\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "names"
      ]
    },
    {
      "cells": [
        "",
        "Employee123",
        "username"
      ]
    },
    {
      "cells": [
        "Employee141",
        "",
        "password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can not login with username as empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"\" \"Employee123\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that empty username or password warning should be displayed \"Please fill out this field.\" \"\"\"Employee123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_empty_username_or_password_warning_should_be_displayed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not login with password as empty",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@190"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the \"Employee141\" \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that empty username or password warning should be displayed \"Please fill out this field.\" \"Employee141\"\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_empty_username_or_password_warning_should_be_displayed(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});