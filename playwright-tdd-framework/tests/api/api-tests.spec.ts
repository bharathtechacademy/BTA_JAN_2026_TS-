import { test } from '@playwright/test';
import { ApiCommons } from '../../commons/api/api-commons';
import testdata from '../../testdata/api/data.json';

test.describe('API Tests', () => {

    let apiCommons: ApiCommons;
    let repoName: any;

    //Prepare API request context before each and every test case. 
    test.beforeEach(async () => {
        apiCommons = new ApiCommons();
        await apiCommons.init();
    });

    //Test Case 1: Request to create duplicate repository with in github
    test('Create duplicate repository in github', async () => {
        const data = testdata.duplicateRepo;
        await apiCommons.getResponse(data.requestType, data.endpoint, data.body);
        await apiCommons.validateStatusCode(data.expectedCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateResponseBody('message', data.expectedErrorMessage);
    });

    //Test Case 2: Request to create valid repository with in github
    test('Create valid repository in github', async () => {
        const data = testdata.validRepo;
        await apiCommons.getResponse(data.requestType, data.endpoint, data.body);
        await apiCommons.validateStatusCode(data.expectedCode);
        await apiCommons.validateStatusMessage(data.expectedStatusMessage);
        await apiCommons.validateResponseBody('name', data.body.name);
        //Storing the repository name created in the response to use it in the next test case. 
        repoName = await apiCommons.storeDataFromResponse('validRepo', 'name');
        console.log(data)
    });

});