const { Given, When, Then } = require('cucumber');

Given(/^I am on the Sign in page$/, async function() {
  
  browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account")
  await browser.pause(5000);
});

When(/^I enter details with (.*) and (.*)$/, async function(username,password){
  const txtusername = await $('[id="email"]');
  const txtPassword = await $('[id="passwd"]');
  await txtusername.setValue(username);
  await browser.pause(5000);
  await txtPassword.setValue(password);
  await browser.pause(5000);
});

When(/^I click on the Sign button$/, async function(){
  
  const signButton = await $('[id="SubmitLogin"]');
  await signButton.click();
  await browser.pause(10000);

  });

Then(/^I should see a failed message saying(.*)$/,async function(errorMessgae) {
  
  const message= await $('li*=Authentication failed.');
  console.log(message.getText());// outputs: "WebdriverIO"
 
	
});






