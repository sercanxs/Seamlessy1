@190
Feature: Login Functionality

  Scenario Outline: Login with valid credentials
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    And Click the login button
    Then verify that user should able to lands on the dashboard page
    And Click the right top profil icon
    Then verify that username should be seen under profil icon as expected




    Examples:
      | username    | password    |
      | Employee141 | Employee123 |
