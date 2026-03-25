# API Testing

## What is API? 
API is a combination of Set of Routines , Protocols and Supporting tools Used in the background to transmit the information from application UI to backend server 

# What is the difference between API, web service, and microservice? 

## WebService?
Web service is a type of API that is going to run over the internet / web. 

## MicroService?
Microservice is a tiny API that we are going to use within the application to communicate and share the information between different components of the application. 


## What is API testing ? Why it is important ?
API testing is a type of software testing that involves testing APIs directly without using the application user interface. 

## Benefits of API Testing ?

1. Early issue detection 
2. Faster execution. 
3. Independence from UI changes. 
4. Broader test coverage. 
5. Automation Friendly 

## Only API testing is enough? 
NO

# Popular API Architectures ?

## SOAP
## REST
## GRAPHQL

## SOAP (simple Object Access Protocol)
SOAP mainly relies on XML format to provide messaging services. SOAP service is mainly used for POST requests to send and receive information. 

POST /webservice HTTP/1.1
Host: example.com
Content-Type: text/xml; charset=utf-8
Content-Length: length

<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <UserId>12345</UserId>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>


<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
   <soap:Header/>
   <soap:Body>
      <GetUserDetails xmlns="http://example.com/">
         <Username>Bharath Reddy</Username>
         <Userrole>Senior SDET</Userrole>
      </GetUserDetails>
   </soap:Body>
</soap:Envelope>

## REST (Representational State Transfer)
When it comes to RESTful services, instead of using XML to make a request, REST API mainly relies on simple URL and JSON format to transmit the information between your application. RESTful services will use different HTTP methods like GET, POST, PUT, PATCH, DELETE to perform tasks. 

POST api.example.com/users/12345 HTTP/1.1

{
    "role" : "QA"
}
Host: api.example.com
Accept: application/json

Response:
{
   "id": 12345,
   "name": "John Doe",
   "email": "johndoe@example.com"
}

GET - when we want to retrieve the exisitng data from the server
POST - when we want to store new information within the backend server 
PUT - when we want to modify the existing information within the server 
PATCH - when we want to modify part of the information or part of the record 
DELETE - when we want to delete the information from the server 

## GRAPHQL

GraphQL is going to allow us to send the request from the client to specific data. It is going to reduce over-fetching and under-fetching of the data. 

POST /graphql HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
   "query": "{ user(id: \"12345\") { name, email } }"
}

Response:
{
   "data": {
      "user": {
         "name": "John Doe",
         "email": "johndoe@example.com"
      }
   }
}


## How to Validate RESTful Services ?

## API Requirements ?

### To Send Request
1. Purpose of API request / Functionality of API?
2. Request a type : what kind of request is it? 
- get
- post
- put
- patch
- delete
3. Request URL : Request URL will contain: (Example : GET https://api.amazon.com/mobiles/{product}?price<=50000)
- base URL => https://api.amazon.com
- endpoint => /mobiles/iphone?price<=50000
- path parameters => Part of the endpoint that is changing  => {product}
- query parameters => The parameters added to filter the data => ?price<=50000
4. Request Body / Payload : the data that you want to store within the server or the data that you want to update within the server. 
{
    "name" : "bharath",
    "email" : "bharath@test.com"
}
5. Authorization and Authentication :
- Authentication is all about "Who are you?" 
- Authorization is all about "what you are allowed to do ?" 

- No Auth : it's an open API. No authorization is required. 
- Basic Auth : to access the data through the API by sending a username and password along with the API request URL. 
- Bearer Token : Unique token with random characters will be generated to access the data based on the roles and permissions of the user along with expiry date
- API key : unique key and value need to be updated to access the data from an API request. 
- OAuth : open authorization ==> OAuth is all about generating the temporary bearer token by providing consumer key and secret along with access token. 
6. Request Headers : the additional metadata to be shared along with the API request 
{
  "Content-Type": "application/json",
  "Accept": "application/vnd.github.v3+json",
  "Authorization": "Bearer <YOUR-TOKEN>"
}

### To Verify the Response
1. Sample response body
2. Response headers. 
3. Response status code for each and every output response that we are going to receive from the API. 
4. Maximum time it can take to give us the response 
5. Error validations 
6. Schema of the API response. 
7. Cookies ( if applicable )
