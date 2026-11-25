Feature: Test HomePage

    Scenario: Test Home Page Application
        Given User launch the Juice Shop application
        When user enter login page
        And user enter valid username and password
        And Click on login button
        Then Login Should be successful

