package com.seamlessly.stepdefinitions;

import com.seamlessly.pages.LoginPage;
import com.seamlessly.pages.SeamlesslyPages;
import com.seamlessly.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

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

       SeamlesslyPages sp = new SeamlesslyPages();
       sp.clickprofilicon();


    }

    @Then("verify that username should be seen under profil icon as expected {string}")
    public void verify_that_username_should_be_seen_under_profil_icon_as_expected(String string) {
        SeamlesslyPages sp = new SeamlesslyPages();
        sp.profiliconname(string);
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
    @Then("Verify that user should able to see password in dot format")
    public void verify_that_user_should_able_to_see_password_in_dot_format() {
     LoginPage loginPage = new LoginPage();
        String dottype = loginPage.passwordinput.getAttribute("type");

        Assert.assertTrue("passwords isn't written in dot format",dottype.equals("password"));
    }
    @When("Click the eye")
    public void click_the_eye() {



       Driver.get().findElement(By.xpath("//p[@class='groupbottom']/a/img")).click();
    }

    @When("Click the Forgot password? link")
    public void click_the_Forgot_password_link() {
        LoginPage loginPage = new LoginPage();
        loginPage.forgotpasswordlink.click();
    }

    @Then("Verify that should able to see password explicitly")
    public void verify_that_should_able_to_see_password_explicitly() {
        LoginPage loginPage = new LoginPage();
        String dottype = loginPage.passwordinput.getAttribute("type");

        Assert.assertTrue("passwords isn't written in dot format",dottype.equals("text"));
    }
    @Then("Verify that user should able to see Forgot password? link")
    public void verify_that_user_should_able_to_see_Forgot_password_link() {

        LoginPage loginPage = new LoginPage();
       Assert.assertTrue("forgot password link is'nt displayed",loginPage.forgotpasswordlink.isDisplayed());
    }

    @Then("Verify that user should able to see Reset Password button")
    public void verify_that_user_should_able_to_see_Reset_Password_button() {
        LoginPage loginPage = new LoginPage();
        Assert.assertTrue("reset password button isn't displayed",loginPage.resetpasswordbutton.isDisplayed());

    }






}
