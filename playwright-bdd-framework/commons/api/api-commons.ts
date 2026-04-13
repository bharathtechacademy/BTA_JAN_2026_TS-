import { expect, request } from '@playwright/test';
import config from '../../config/config.json' with { type: 'json' };
import data from '../../testdata/api/data.json' with { type: 'json' };

export class ApiCommons {

    private requestContext: any;
    private response: any;

    //add api request context (adding base URL, headers, authorization details, etc. to the request context)
    async init() {
        this.requestContext = await request.newContext({
            baseURL: config.api.baseurl,
            extraHTTPHeaders: {
                'Authorization': config.api.token
            }
        });
    }

    //Common method to send request and get response. 
    async getResponse(requestType: string, endpoint: string, requestBody?: any) {
        switch (requestType.toLowerCase()) {
            case 'get':
                this.response = await this.requestContext.get(endpoint);
                break;
            case 'post':
                this.response = await this.requestContext.post(endpoint, { data: requestBody });
                break;
            case 'patch':
                this.response = await this.requestContext.patch(endpoint, { data: requestBody });
                break;
            case 'put':
                this.response = await this.requestContext.put(endpoint, { data: requestBody });
                break;
            case 'delete':
                this.response = await this.requestContext.delete(endpoint);
                break;
            default:
                throw new Error(`Unsupported request type: ${requestType}`);
        }
        console.log(await this.response.text());
    }


    //Method to validate status code 
    async validateStatusCode(expectedStatusCode: number) {
        const actualStatusCode = this.response.status();
        console.log(`Actual Status Code: ${actualStatusCode}, Expected Status Code: ${expectedStatusCode}`);
        expect(actualStatusCode).toBe(expectedStatusCode);
    };

    //Method to validate the status message 
    async validateStatusMessage(expectedStatusMessage: string) {
        const actualStatusMessage = this.response.statusText();
        console.log(`Actual Status Message: ${actualStatusMessage}, Expected Status Message: ${expectedStatusMessage}`);
        expect(actualStatusMessage).toBe(expectedStatusMessage);
    }

    //Method to validate response body 
    async validateResponseBody(key: string, expectedValue: any) {
        const actualResponseBody = await this.response.json();
        const actualValue = actualResponseBody[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Method to validate response headers
    async validateResponseHeader(headerKey: string, expectedHeaderValue: string) {
        const headers = this.response.headers();
        const actualHeaderValue = headers[headerKey.toLowerCase()];
        expect(actualHeaderValue).toBe(expectedHeaderValue);
    }

    //Method to validate response schema
    async validateResponseSchema(key: string, expectedType: string) {
        const actualResponseBody = await this.response.json();
        const actualValue = actualResponseBody[key];
        expect(typeof actualValue).toBe(expectedType);
    }

    //Method to verify the response cookies 
    async validateResponseCookies(cookieName: string, expectedCookieValue: string) {
        const cookies = await this.requestContext.cookies();
        const cookieValue = cookies[cookieName];
        expect(cookieValue).toBe(expectedCookieValue);
    }

    //Method to store data copied from the response. 
    async storeDataFromResponse(objectName:any, key: string) {
        const actualResponseBody = await this.response.json();
        const valueToStore = actualResponseBody[key];
        data[objectName][key] = valueToStore;
    }

}

