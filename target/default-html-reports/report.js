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
formatter.scenario({
  "name": "User can see valid placeholders on Username and Password fields",
  "description": "",
  "keyword": "Scenario",
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
  "name": "Verify that user should able to see valid placeholders on Username and Password fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_user_should_able_to_see_valid_placeholders_on_Username_and_Password_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});