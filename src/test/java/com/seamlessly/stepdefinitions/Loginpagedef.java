package com.seamlessly.stepdefinitions;

import com.seamlessly.pages.LoginPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Loginpagedef {
    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

      LoginPage loginPage = new LoginPage();
      loginPage.Loginpage();


    }

    @When("the user enters the {string} {string}")
    public void the_user_enters_the(String string, String string2) {
    LoginPage loginPage = new LoginPage();
    loginPage.Enteridpassword(string,string2);

    }
    @When("Click the login button")
    public void click_the_login_button() {
       LoginPage loginPage = new LoginPage();
       loginPage.Loginbutton();
    }
    @Then("verify that user should able to lands on the dashboard page")
    public void verify_that_user_should_able_to_lands_on_the_dashboard_page() {



    }
    @Then("Click the right top profil icon")
    public void click_the_right_top_profil_icon() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("verify that username should be seen under profil icon as expected")
    public void verify_that_username_should_be_seen_under_profil_icon_as_expected() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



}
