@smoke
Feature: qb_tests

    Scenario: Is User logged in

        Given I am on homepage
        Then Is User logged in

    Scenario: My Stats toggle save state after refresh tab

        Given I am on homepage
        When Switch my stats toggle


    Scenario: Create simple contract
        Given I am on homepage
        Then Go ot Contract Center
        Then Create Simple Contract   
        When Check Contract in Grid

    Scenario: Check MyProfile Hover Text
        Given I am on homepage
        Then Check Hover Text

    Scenario: Check Jira icon
        Given I am on homepage
        Then Check Jira Icon on Dashboard

        Scenario: Check International checkBox state
        Given I am on homepage
        Then Go to Setup
        Then Check International Checkbox
        When Validate International Checkbox State