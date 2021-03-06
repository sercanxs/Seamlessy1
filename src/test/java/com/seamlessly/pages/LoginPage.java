package com.seamlessly.pages;

import com.seamlessly.utilities.ConfigurationReader;
import com.seamlessly.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    @FindBy(id = "user")
    public WebElement usernameinput;
    @FindBy(id = "password")
    public WebElement passwordinput;
    @FindBy(id = "submit-form")
    public WebElement loginbutton;
    @FindBy(id = "lost-password")
    public WebElement forgotpasswordlink;
    @FindBy(id = "reset-password-submit")
    public WebElement resetpasswordbutton;


    @FindBy(xpath = "//*[@class ='warning wrongPasswordMsg']")
    public WebElement awronginputs;


    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public void Loginpage() {
        Driver.get().get(ConfigurationReader.get("url"));


    }

    public void Enteridpassword(String username, String password) {
        usernameinput.sendKeys(username);
        passwordinput.sendKeys(password);

    }

    public void Loginbutton() {
        loginbutton.click();

    }





    public void wronginputs(String expected) {

        String innerHTML = awronginputs.getAttribute("innerHTML");

        Assert.assertTrue("innerhtml and expected wrong username and password warnings are'nt equal ", innerHTML.contains(expected));

    }

    public void emptyinputs(String expected, String name, String password) {
        if (name.isEmpty()) {

            String actual = usernameinput.getAttribute("validationMessage");


            Assert.assertTrue("empty name inputs message isn't as expected", actual.contains(expected));
        } else if (password.isEmpty()) {

            String actual = passwordinput.getAttribute("validationMessage");


            Assert.assertTrue("empty password input message isn't as expected", actual.equals(expected));
        } else {

            Assert.assertTrue("input boxes aren't empty", false);
        }

    }

}
