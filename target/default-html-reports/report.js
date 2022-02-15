$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User can not login with \"Wrong username or password.\"",
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
  "name": "Verify that wrong username or password warning should be displayed \"\u003cwrong\u003e\"",
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
        "wrong"
      ]
    },
    {
      "cells": [
        "Employee143",
        "Employee133",
        "Wrong username or password."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User can not login with \"Wrong username or password.\"",
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
  "name": "Verify that wrong username or password warning should be displayed \"Wrong username or password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_wrong_username_or_password_warning_should_be_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});