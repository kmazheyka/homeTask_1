@smoke
Feature: Onliner showcase

 

     Scenario: Redirect to news block

        Given I am on Onliner homepage
        Then Check Main News Blocks
        When Redirect to "Авто" Block

     Scenario: Log In and validate user

        Given I am on Onliner homepage
        Then LoginIn and check user

     Scenario: Log In

        Given I am on Onliner homepage
        Then LogIn

       Scenario: Add to cart

        Given I am on Onliner homepage
        Then LogIn
        When enter "nokian" in Search field
        Then Add goods to cart and validate 
