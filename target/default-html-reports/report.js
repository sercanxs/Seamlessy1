$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User can see the password explicitly if needed",
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
  "name": "Click the eye",
  "keyword": "And "
});
formatter.step({
  "name": "Verify that should able to see password explicitly",
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
        "password"
      ]
    },
    {
      "cells": [
        "Employee143",
        "Employee133"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can see the password explicitly if needed",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
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
  "name": "the user enters the \"Employee143\" \"Employee133\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.the_user_enters_the(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the eye",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.click_the_eye()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that should able to see password explicitly",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_should_able_to_see_password_explicitly()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});