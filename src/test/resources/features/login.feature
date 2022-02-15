@smoke
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


  Scenario Outline: User can not login with <names> as empty
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    And Click the login button
    Then Verify that empty username or password warning should be displayed "Please fill out this field." "<username>""<password>"

    Examples:
      | username    | password    | names    |
      |             | Employee123 | username |
      | Employee141 |             | password |

  Scenario Outline:User can see the password in a form of dots by default
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    Then Verify that user should able to see password in dot format


    Examples:
      | username    | password    |
      | Employee143 | Employee133 |


  Scenario Outline: User can see the password explicitly if needed
    Given the user is on the login page
    When the user enters the "<username>" "<password>"
    And Click the eye
    Then Verify that should able to see password explicitly



    Examples:
      | username    | password    |
      | Employee143 | Employee133 |


  Scenario: User can see the "Forgot password?" link on the login page and can see the "Reset Password" button
    Given the user is on the login page
    Then Verify that user should able to see Forgot password? link
    When Click the Forgot password? link
    Then Verify that user should able to see Reset Password button

  Scenario: User can see valid placeholders on Username and Password fields
    Given the user is on the login page
    Then Verify that user should able to see valid placeholders on Username and Password fields



