const { Given, When, Then } = require('cucumber');
import { loginPage } from '../pageobjects/login.page'

Given(/^I am on the login page$/, async function(){
  
  browser.url("http://automationpractice.com/index.php")
  await browser.pause(5000);  
})

When(/^I enter shirts in search bar$/, async function(){
   
   loginPage.typeOnTheSearchBar();
   await browser.pause(5000);
})

When(/^I click on the search button$/, async function(){
 
  loginPage.clickOntheSearchButton();
  await browser.pause(10000);
     
})

Then(/^I should see a flash message saying$/, async function(){
  
   loginPage.reteriveLinkText();
       
})