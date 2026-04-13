Feature: Cookies feature in the creatio CRM application
    As a user of the creatio CRM application, I want to verify all the validations related to cookies

    Scenario: Verify that the cookies pop-up is launched
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed

    Scenario: Verify the cookies popup content
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the content of the cookies popup
            """
            We may use cookies and similar technologies to collect information about the ways you interact with and use the website, to support and enhance features and functionality, to monitor performance, to personalize content and experiences, for marketing and analytics, and for other lawful purposes. We also may share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services. Please, see more details on the \"About\" tab
            """
    Scenario: Verify Cookies Pop-up Logos
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the logos in the cookies popup

    Scenario: Verify Cookies Pop-up Selection Buttons
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the selection buttons in the cookies popup

    Scenario: Verify Cookies Pop-up Switch Buttons
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the switch buttons in the cookies popup

    Scenario: Verify Cookies Pop-up Show details link functionality
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the show details link is displayed in the cookies popup
        When User clicks on the show details link in the cookies popup
        Then Verify cookies popup should be displayed in expanded mode

    Scenario: Verify Cookies Pop-up Allow All button functionality
        Given Launch the Creatio Application
        Then Cookies pop-up should be displayed
        And Verify the selection buttons in the cookies popup
        When User clicks on the "allow all" button in the cookies popup
        Then Verify cookies popup should be closed