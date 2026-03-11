import { test, expect } from '@playwright/test';

test('Automate Web Form', async ({ page }) => {
    
//1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)   
await page.goto("https://demoqa.com/automation-practice-form");

//2. Wait for Page-load
const formHeader = page.locator('h1.text-center');
await expect(formHeader).toBeVisible();

//3. Enter First name and Last name       
const firstName = page.locator('input#firstName');
await firstName.fill("Bharath ");

const lastName = page.locator('input#lastName');
await lastName.fill('Reddy');

//4. Enter Email      
const email = page.locator('input#userEmail');
await email.fill('BharathTechAcademy@gmail.com');

//5. Select Gender (Male)    
await selectGender(page, 'Male');

//6. Enter mobile number  
const mobile = page.locator('input#userNumber');
await mobile.fill('9553220022');

//7.Select DOB (1-Feb-1991)  
await selectDOB(page, '1', 'February', '1991');

//8.Search and Select Computer Science  and English
let subjects :string [] = ["Computer Science", "English"];
await selectSubjects(page,subjects);

//9.Select Hobbies as Sports and Reading   
let hobbies :string [] = ["Sports","Reading"]; 
await selectHobbies(page, hobbies);

//10.Upload photo   
const uploadButton = page.locator('input#uploadPicture');
const filePath = "files/Mar21st.png";
await uploadButton.setInputFiles(filePath);

//11.Submit Details 
const submitBtn = page.locator('button#submit');     
await submitBtn.click();   

//take screenshot of the page after submission
await page.screenshot({ path: 'screenshots/form-submission.png', fullPage: true });

});

async function selectGender(page:any , option :string) {
    const gender = page.locator(`//label[text()="${option}"]`);
    await gender.click();
}

async function selectDOB(page:any , date:string, month:string, year:string){

    //launch the calendar
    const calendar = page.locator('input#dateOfBirthInput');
    await calendar.click();

    //select month value
    const monthDrp = page.locator('select.react-datepicker__month-select');
    await monthDrp.selectOption({label : month});

    //select year value
    const yearDrp = page.locator('select.react-datepicker__year-select');
    await yearDrp.selectOption({label: year});

    //select the date 
    const dateEle = page.locator(`//div[text()="${date}" and contains(@aria-label, "${month}")]`);
    await dateEle.click();
}

async function selectSubjects(page:any, subjects:string[]){

    //locate the subject input field and click on it
    const subjectInput = page.locator('div[class*="subjects-auto-complete__input-container"]');
    await subjectInput.click();

    //enter each subject and select from the suggestions
    for(let subject of subjects){

        //fill subject name
        const subjectInput = page.locator('input#subjectsInput');
        await subjectInput.fill(subject);

        //Press enter button
        await subjectInput.press('Enter');
    }

}

async function selectHobbies(page:any , hobbies:string[]){

    for (let hobby of hobbies){

        //locate the hobby element
        const hobbyEle = page.locator(`//label[text()="${hobby}"]/preceding-sibling::input`);

        //select the hobby if not selected already
        if(!await hobbyEle.isChecked()){
            await hobbyEle.check();
        }
    }

}
    
