Feature: Creatio login feature
    As a user of the Creatio application, I want to verify all the validations related to the login feature.

    Background: Close the cookies pop-up if displayed
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the Allow All button is displayed in the cookies popup
        When User clicks on the "allow all" button in the cookies popup
        Then Verify cookies popup should be closed

    Scenario: Verify the login page
        Given The login page is launched

    Scenario Outline: Verify login feature with <scenario> credentials.
        Given The login page is launched
        When User enters "<username>" and "<password>"
        And User clicks on the login button
        Then Login should be "<status>"
        Examples:
            | scenario | username                       | password                | status       |
            | valid    | bharattechacademy6@outlook.com | BharathTechAcademy#1234 | successful   |
            | invalid  | invaliduser@example.com        | invalidpassword         | unsuccessful |

    Scenario: Verify the forgot password link functionality
        Given The login page is launched
        Then Verify the forgot password link is displayed on the login page
        When User clicks on the forgot password link
        Then forgot password confirmation message should be displayed

    Scenario: Verify social media login options
        Given The login page is launched
        Then Verify the social media login options are displayed on the login page

    Scenario Outline: Verify logout feature
        Given The login page is launched
        When User enters "<username>" and "<password>"
        And User clicks on the login button
        Then Login should be "<status>"
        When User clicks on the profile icon in the top right corner
        And User clicks on the logout button
        Then Verify user should be logged out successfully
        Examples:
            | scenario | username                       | password                | status     |
            | valid    | bharattechacademy6@outlook.com | BharathTechAcademy#1234 | successful |


