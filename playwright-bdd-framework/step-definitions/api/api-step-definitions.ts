import {Given,When,Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { ApiCommons } from "../../commons/api/api-commons.ts";
import data from "../../testdata/api/data.json" with {type: "json"};

let api: ApiCommons;

//Given the API request context is initialized.
Given("the API request context is initialized.", async function() {
    api = new ApiCommons();
    await api.init();
});

//When I send a "POST" request with endpoint "/user/repos" to create repository with name "JMeterRepo"
When('I send a {string} request with endpoint {string} to create repository with name {string}', async function(requestType: string, endpoint: string, repoName: string) {
const requestBody = data.createRepo.body;
requestBody.name = repoName;
await api.getResponse(requestType, endpoint, requestBody);
});
    
//Then I should receive a response with status code 422
Then('I should receive a response with status code {int}', async function(expectedStatusCode: number) {
    await api.validateStatusCode(expectedStatusCode);
});

//And I should receive a response with status message "Unprocessable Entity"
Then('I should receive a response with status message {string}', async function(expectedStatusMessage: string) {
    await api.validateStatusMessage(expectedStatusMessage);
});

//And I should receive a response with body having "message" with value "Repository creation failed."
Then('I should receive a response with body having {string} with value {string}', async function(key: string, expectedValue: string) {
    await api.validateResponseBody(key, expectedValue);
});

//When I send a "GET" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to get the repository details
When('I send a {string} request with endpoint {string} to get the repository details', async function(requestType: string, endpoint: string) {
    await api.getResponse(requestType, endpoint);
});

//When I send a "PATCH" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to update private to "true"
When('I send a {string} request with endpoint {string} to update private to {string}', async function(requestType: string, endpoint: string, privateValue: string) {
    const requestBody = data.updateRepo.body;
    const visibility = Boolean(privateValue);
    requestBody.private = visibility;
    await api.getResponse(requestType, endpoint, requestBody);
});

//When I send a "DELETE" request with endpoint "/repos/bharathtechacademy05/PlaywrightRepo" to delete the repository
When('I send a {string} request with endpoint {string} to delete the repository', async function(requestType: string, endpoint: string) {
    await api.getResponse(requestType, endpoint);
});