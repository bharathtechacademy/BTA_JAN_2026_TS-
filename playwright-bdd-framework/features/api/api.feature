Feature: Git repository API validations
    As a user, I want to validate all the Git repository-related API validations in this feature file.

    Background: initialize the API request context.
        Given the API request context is initialized.

    Scenario: Validate request to create a duplicate repository
        When I send a "POST" request with endpoint "/user/repos" to create repository with name "JMeterRepo"
        Then I should receive a response with status code 422
        And I should receive a response with status message "Unprocessable Entity"
        And I should receive a response with body having "message" with value "Repository creation failed."

    Scenario: Validate request to create a repository with  valid name
        When I send a "POST" request with endpoint "/user/repos" to create repository with name "PlaywrightRepo"
        Then I should receive a response with status code 201
        And I should receive a response with status message "Created"
        And I should receive a response with body having "name" with value "PlaywrightRepo"

    Scenario: Validate request to get a valid repository
        When I send a "GET" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to get the repository details
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having "name" with value "PlaywrightRepo"

    Scenario: Validate request to update a valid repository
        When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to update private to "true"
        Then I should receive a response with status code 200
        And I should receive a response with status message "OK"
        And I should receive a response with body having "name" with value "PlaywrightRepo"
        And I should receive a response with body having "private" with value "true"

    Scenario: Validate request to delete a valid repository
        When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to delete the repository
        Then I should receive a response with status code 204
        And I should receive a response with status message "No Content"