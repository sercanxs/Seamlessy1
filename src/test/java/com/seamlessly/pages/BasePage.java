package com.seamlessly.pages;

import com.seamlessly.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    @FindBy(xpath = "//div[@id='expand']/div/img")
    public WebElement profilicon;

    @FindBy(xpath = "//nav[@id='expanddiv']/ul/li/div[@class='user-status-menu-item']/span")
    public WebElement profiliconname;


    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }


    public void showTitle(String expected){

        Assert.assertTrue("Title isn't expected",Driver.get().getTitle().equals(expected));


    }
    public void clickprofilicon() {
        profilicon.click();

    }
    public void profiliconname(String expected) {
        String name = profiliconname.getAttribute("title");

        Assert.assertTrue("Profil icon's actual and expected name aren't equals", expected.equals(name));


    }













}
