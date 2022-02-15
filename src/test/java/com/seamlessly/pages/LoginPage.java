package com.seamlessly.pages;

import com.seamlessly.utilities.ConfigurationReader;
import com.seamlessly.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage{

    @FindBy(id = "user")
    public WebElement usernameinput;
    @FindBy(id = "password")
    public WebElement passwordinput;
    @FindBy(id = "submit-form")
    public WebElement loginbutton;

    public LoginPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    public void Loginpage(){
        Driver.get().get(ConfigurationReader.get("url"));



    }
    public void Enteridpassword(String username,String password){
        usernameinput.sendKeys(username);
        passwordinput.sendKeys(password);

    }
    public void Loginbutton(){
        loginbutton.click();

    }

}
