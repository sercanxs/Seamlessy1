Feature: Login Functionality

  Scenario Outline: Login with valid credentials
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    And Click the login button
    Then verify that user should able to lands on this title "<title>"
    And Click the right top profil icon
    Then verify that username should be seen under profil icon as expected "<username>"

    Examples:
      | username    | password    | title                  |
      | Employee141 | Employee123 | Files - Seamlessly -QA |


  Scenario Outline: User can not login with "Wrong username or password."
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    And Click the login button
    Then Verify that wrong username or password warning should be displayed "<wrong>"

    Examples:
      | username    | password    | wrong                       |
      | Employee143 | Employee133 | Wrong username or password. |
