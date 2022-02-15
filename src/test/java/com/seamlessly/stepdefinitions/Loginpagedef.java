package com.seamlessly.stepdefinitions;

import com.seamlessly.pages.LoginPage;
import com.seamlessly.pages.SeamlesslyPages;
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
        loginPage.Enteridpassword(string, string2);

    }

    @When("Click the login button")
    public void click_the_login_button() {
        LoginPage loginPage = new LoginPage();
        loginPage.Loginbutton();
    }

    @Then("verify that user should able to lands on this title {string}")
    public void verify_that_user_should_able_to_lands_on_this_title(String string) {
        SeamlesslyPages sp = new SeamlesslyPages();
        sp.showTitle(string);


    }

    @Then("Click the right top profil icon")
    public void click_the_right_top_profil_icon() {

        LoginPage loginPage = new LoginPage();
        loginPage.clickprofilicon();


    }

    @Then("verify that username should be seen under profil icon as expected {string}")
    public void verify_that_username_should_be_seen_under_profil_icon_as_expected(String string) {
        LoginPage loginPage = new LoginPage();
        loginPage.profiliconname(string);
    }


    @Then("Verify that wrong username or password warning should be displayed {string}")
    public void verify_that_wrong_username_or_password_warning_should_be_displayed(String string) {

        LoginPage loginPage = new LoginPage();
        loginPage.wronginputs(string);

    }
    @Then("Verify that empty username or password warning should be displayed {string} {string}{string}")
    public void verify_that_empty_username_or_password_warning_should_be_displayed(String expected, String name, String password) {
       LoginPage loginPage = new LoginPage();
       loginPage.emptyinputs(expected, name, password);
    }




}
