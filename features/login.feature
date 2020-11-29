Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can go to automation practice page 
  
    Given I am on the login page
    When  I enter shirts in search bar
    And   I click on the search button
    Then  I should see a flash message saying 
    
  #Scenario Outline: Aunthtication Functionality
   # Given I am on the Sign in page
   # When  I enter details with <username> and <password>
   # And   I click on the Sign button
    #Then  I should see a failed message saying<message>
    
  #Examples:
  #| username        | password             | message                        |
  #| tombar@test.com | SuperSecretPassword! | Authentication failed          |
  #| foo123@test.com | barfoo               | Authentication failed          |



