# Gherkin Requirements - OrangeHRM

## Feature: User Authentication (Login)
As an administrative or standard user of OrangeHRM,
I want to log into the application securely,
So that I can access internal business modules like PIM, Admin, and Dashboard.

  **Scenario:** Successful login with valid credentials
    Given I navigate to the OrangeHRM login page "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    When I enter a valid "Username"
    And I enter a valid "Password"
    And I click on the "Login" button
    Then I should be navigated to the Home Page
    And the main navigation menu should be visible

  **Scenario:** Login fails with invalid credentials
    Given I navigate to the OrangeHRM login page "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    When I enter an invalid "Username"
    And I enter an invalid "Password"
    And I click on the "Login" button
    Then I should remain on the login page
    And I should see an invalid credentials error message

  **Scenario Outline:** Login validation for empty text fields
    Given I navigate to the OrangeHRM login page "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    When I leave the "<field>" empty
    And I click on the "Login" button
    Then I should see a "Required" validation message under the "<field>" input

    Examples:
      | field    |
      | Username |
      | Password |

---

## Feature: Home Page Navigation Dashboard
As a logged-in user,
I want to view the main navigation menu,
So that I can easily browse different HR modules.

  **Background:**
    Given I am a successfully logged-in user on the Home Page

  **Scenario:** Verify the presence of all module navigation links
    Then I should see a side navigation menu
    And the menu should contain the following items:
      | Admin       |
      | PIM         |
      | Leave       |
      | Time        |
      | Recruitment |
      | My Info     |
      | Performance |
      | Dashboard   |
      | Directory   |
      | Maintenance |
      | Claim       |
      | Buzz        |

  **Scenario Outline:** Module links navigate to correct destinations
    When I click on the "<menu_item>" link in the navigation menu
    Then the URL should redirect to the expected "<destination_url>"
    And the selected menu item should indicate an active state

    Examples:
      | menu_item   | destination_url                                                                               |
      | Admin       | https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule               |
      | PIM         | https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule                   |
      | Leave       | https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveModule               |
      | Time        | https://opensource-demo.orangehrmlive.com/web/index.php/time/viewTimeModule                 |
      | Recruitment | https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewRecruitmentModule   |
      | My Info     | https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails                   |
      | Performance | https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceModule   |
      | Dashboard   | https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index                     |
      | Directory   | https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory             |
      | Maintenance | https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/viewMaintenanceModule |
      | Claim       | https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewClaimModule               |
      | Buzz        | https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz                       |
