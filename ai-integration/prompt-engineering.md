# Prompt Engineering 

## What is Prompt Engineering? 
Prompt engineering is the skill of designing and structuring inputs to get accurate and relevant output from the AI models. 

In simple terms, it's how you talk to AI smartly so it behaves like the expert you need. 

## Why prompt engineering matters? 
Without prompt engineering, if we'll try to add some random prompts

AI gives generic answers
It may miss most of the edge cases that we are looking for. 
It may produce inconsistent output. 

With Prompt Engineering 
We can get production-ready results in our regular testing activities. 
Always AI is going to behave like an expert. 
It is going to save a lot of time in regular day-to-day activities. 

## Prompt Engineering Frameworks. 

Prompt engineering frameworks are all about how exactly we can write in a structured way and how we can get accurate output. This is what we can learn from this. 

There are multiple frameworks available. Some of the very popular frameworks are:
- RACE framework
- CLEAR framework

## RACE Framework
The RACE framework is nothing but:
- R refers to role
- A refers to action
- C refers to context
- E refers to expectation or examples

### Before the RACE framework
Prompt: 
Can you read the user story displayed on the page and write all the possible test cases with the detailed test steps? It should cover all the positive, negative, and edge cases ?

### After the RACE framework

Role : Act as a Senior Quality Analyst. 

Action : write all possible positive, negative, and corner-case test cases for the given user story displayed on the current page. 

Context: this application is related to Creatio CRM. It is a CRM-based application, and recently our developer designed the login page. Now we need to validate this login page with all the possible test scenarios to identify the defects. For that, we need to generate detailed test cases that cover end-to-end functionality related to login, and I want to upload the test cases in Azure TFS by following the standard Azure TFS template. 

Expectation: provide positive, negative, and edge cases in the below format (sample.csv). 

* Mandatory test steps along with expected result to be included in each and every test case. 
1. Launch the chrome browser
2. Enter the URL and launch the application with url 'https://accounts.creatio.com/login/alm'
3. Verify whether the cookies pop-up is getting displayed. 
4. Select the "Allow All" button and close the Cookies pop-up. 
5. Verify whether the login page is displayed successfully. 

Sample.csv
==========
ID,Work Item Type,Title,Test Step,Step Action,Step Expected,Area Path,Assigned To,State
,Test Case,Verify whether cookies popup is getting displayed when user launch the application,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,Test Case,Verify Cookies Consent message displayed in the Cookies popup,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1," Launch the browser. 

Browser = Chrome", Browser should be launched successfully. ,,,
,,,2," Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm", application should be launched successfully. ,,,
,,,3, Verify whether Cookies popup is getting displayed ,cookies pop-up should get displayed before the login page to take the consent from the user. ,,,
,,,4,Verify Cookies Consent message displayed in the Cookies popup," consent message should be displayed as below

""This website uses cookies",,,
,Test Case,Verify logos displayed in the Cookies popup.,,,,Creatio CRM,Bharath Tech Academy <bharattechacademy3@outlook.com>,Design
,,,1,"Launch the browser. 

Browser = Chrome",Browser should be launched successfully.,,,
,,,2,"Enter URL and launch the application. 

URL = https://accounts.creatio.com/login/alm",application should be launched successfully.,,,
,,,3,Verify whether Cookies popup is getting displayed,cookies pop-up should get displayed before the login page to take the consent from the user.,,,
,,,4,Verify logos displayed in the Cookies popup.,Creatio logo and Cookies Bot logo should be displayed within the cookies popup.,,,



## CLEAR Framework
Clear is slightly more human-like and iterative, especially when it comes to the clear framework.
- C refers to context.
- L refers to limitations.
- E refers to examples.
- A refers to action.
- R refers to results.