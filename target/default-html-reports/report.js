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
  "name": "User can see the \"Forgot password?\" link on the login page and can see the \"Reset Password\" button",
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
  "name": "Verify that user should able to see Forgot password? link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_user_should_able_to_see_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Forgot password? link",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.click_the_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that user should able to see Reset Password button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.Loginpagedef.verify_that_user_should_able_to_see_Reset_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});