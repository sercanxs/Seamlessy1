package com.seamlessly.pages;

import com.seamlessly.utilities.ConfigurationReader;
import com.seamlessly.utilities.Driver;
import org.junit.Assert;
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
    @FindBy(xpath = "//div[@id='expand']/div/img")
    public WebElement profilicon;

    @FindBy(xpath = "//nav[@id='expanddiv']/ul/li/div[@class='user-status-menu-item']/span")
    public WebElement profiliconname;


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
    public void clickprofilicon(){
        profilicon.click();

    }
    public void profiliconname(String expected){
        String name = profiliconname.getAttribute("title");

        Assert.assertTrue("Profil icon's actual and expected name aren't equals",expected.equals(name));


    }

}
