const { Given, When, Then } = require('cucumber');

Given(/^I am on the login page$/, async function(){
  
  browser.url("http://automationpractice.com/index.php")
  console.log("abc")
  await browser.pause(10000);  
})

When(/^I enter shirts in search bar$/, async function(){
 
  const searchText = await $('[name="search_query"]');
  await searchText.setValue("shirts");
   
})


When(/^I click on the search button$/, async function(){
  const myButton = await $('[name="submit_search"]');
  await myButton.click()
  await browser.pause(10000);
     
})

Then(/^I should see a flash message saying$/, async function(){
  
  const link = await $('=Printed Chiffon Dress');
  const mehak = await(link.getText()); // outputs: "WebdriverIO"
  console.log(mehak +"mehak")
   
})

