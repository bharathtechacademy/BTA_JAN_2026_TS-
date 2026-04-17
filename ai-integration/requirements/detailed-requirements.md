# Detailed Requirements and Validations - OrangeHRM

## 1. Application Login Page
**URL:** `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`

### 1.1 UI Validations
- **Elements:**
  - Username text input field.
  - Password text input field.
  - Login form submit button.
  - OrangeHRM branding/logo is visible.
- **Validations:**
  - Verify that both username and password fields are present and enabled.
  - Verify that the 'Login' button is present and enabled.
  - Verify that the placeholder strings "Username" and "Password" correctly appear in the input fields.

### 1.2 Functional Validations
- **Successful Login:** Entering valid credentials (`Admin` / `admin123`) and clicking the Login button successfully authenticates the user and redirects them to the Home Page (Dashboard).
- **Invalid Credentials:** Entering invalid credentials (e.g. wrong username or password) and clicking Login displays an appropriate incorrect credentials error message without navigating away.
- **Empty Fields:** Submitting the form with empty username or password fields should display validation error text under the empty fields ("Required").
- **Security Validation:** Ensure the password field obscures standard text.

---

## 2. Application Home Page
**URL:** The landing page after successful user login.

### 2.1 General Layout Validations
- **Navigation Menu:** The main navigation menu (`.oxd-main-menu`) should be visible on the left side (or top, based on screen size).
- **User Profile:** A user profile dropdown or identification badge should be present, indicating the authenticated user.
- **Validations:**
  - Ensure the navigation menu links to correct modules without returning 404 or access denied errors.

### 2.2 Navigation Menu Items & Links
The application provides various modules via the main menu. The following details all menu items that must be verified for presence, text correctness, and exact hyperlink destination:

| Menu Item | Destination Link | Validation Requirement |
| :--- | :--- | :--- |
| **Admin** | `https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule` | Verify clicking loads the Admin Module. |
| **PIM** | `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule` | Verify clicking loads the PIM Module. |
| **Leave** | `https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveModule` | Verify clicking loads the Leave Module. |
| **Time** | `https://opensource-demo.orangehrmlive.com/web/index.php/time/viewTimeModule` | Verify clicking loads the Time Module. |
| **Recruitment** | `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewRecruitmentModule` | Verify clicking loads the Recruitment Module. |
| **My Info** | `https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewMyDetails` | Verify clicking loads Personal Details Module. |
| **Performance** | `https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceModule` | Verify clicking loads the Performance Module. |
| **Dashboard** | `https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index` | Verify clicking loads the Dashboard page. |
| **Directory** | `https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory` | Verify clicking loads the Directory screen. |
| **Maintenance** | `https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/viewMaintenanceModule` | Verify clicking triggers Maintenance Module (requires extra auth prompt). |
| **Claim** | `https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewClaimModule` | Verify clicking loads the Claim Module. |
| **Buzz** | `https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz` | Verify clicking loads the Buzz application page. |

- **Validations for all Links:**
  - URL format and path must explicitly match the Destination Link table.
  - Active menu items must feature a highlighted active state when visiting the respective module.
