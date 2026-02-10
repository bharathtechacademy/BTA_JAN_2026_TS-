//Run code in typescript : npx tsx file-path
//Run code in javascript : node file-path


//Syntax to store data in Typescript

//variableDeclaration variable:dataType = value;

//Data types in TypeScript are divided into two different categories. 
// 1. Primitive datatypes (immutable)
// 2. Non-primitive  datatypes (mutable)


/****************************************************/
/*******PRIMITIVE DATA TYPES IN TYPESCRIPT***********/
/****************************************************/
//1.number ==> The data type that we are going to use to store numbers with decimals or without decimals without any quotations. 
let num1: number = 10;
let num2: number = 10.5;
console.log(num1);
console.log(num2);

//2.string ==> The data type that we are going to use to store text or characters with the help of single quotes, double quotes or backticks. 
let name: string = "John Doe";
console.log(name);

//3.boolean ==> The data type that we are going to use to store true or false values.
let isStudent: boolean = true;
console.log(isStudent);

//4.null ==> The data type that we are going to use to store null values. It represents the intentional absence of any object value.
let nullValue: null = null;
console.log(nullValue);

//5.undefined ==> The data type that we are going to use to store undefined values. It represents a variable that has been declared but not assigned a value.
let undefinedValue: undefined = undefined;
console.log(undefinedValue);

//union type ==> Union represents more than one data type allowed within the variable. 
let empAddress: string |number |boolean = "123 Main St";
console.log(empAddress);
empAddress = 123456;    
console.log(empAddress);
empAddress = true;
console.log(empAddress);

//any type ==> Any is a data type that is going to remove the type safety layer within the TypeScript. 
let data : any = "Hello World";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);

/****************************************************/
/*******NON-PRIMITIVE DATA TYPES IN TYPESCRIPT*******/
/****************************************************/

//1. Object ==> The data type that we are going to use to store key-value pairs.
interface personInfo {
    name: string,
    age: number,
    empId: number,
    visaSatus: boolean,
    address: {
        city: string,
        state: string,
        country: string
    }
}

let person: personInfo = {
    name:"Anurag",
    age:35,
    empId:1234,
    visaSatus:true,
    address:{
        city:"Delhi",
        state:"Delhi",
        country:"India"
    }
}

//2.array ==> The data type that we are going to use to store multiple values in a single variable.
let fruits: string[] = ["apple","banana","orange","grapes"];
let prices:number[] = [10,20,30,40];
let fruitsAndPrices:(string | number)[] = ["apple",10,"banana",20,"orange",30,"grapes",40];

console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);

//3.tuple ==> The data type that we are going to use to store multiple values with different data types in a single variable in specific order.

//Array vs Tuple

//Store employee name, employee phone number, employee visa status within the array 
let empInfo:(string | number | boolean ) [] =[9553220022,"Bharath",true] ;

//Store employee name, employee phone number, employee visa status within the tuple
let newEmpInfo:[string,string,number,boolean] =["Bharath","Reddy",9553220022,true] ;

//4.function ==> Function is a data type that is going to store a block of code or collection of statements together to complete specific tasks. 
function launchBrowserAndLogin(browserName:string) :void {
    console.log("Launch the " + browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

function getAccountBalance() : number{
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}

//Map ==> Map represents a collection of key-value pairs. 
let empInfoMap:Map<number,string> = new Map();
empInfoMap.set(123,"Bharath");
empInfoMap.set(124,"Sarath");

//Set ==> Set represents list of unique values. 
let empIds:Set<number> = new Set();
empIds.add(123);
empIds.add(124);

console.log(empInfoMap);
console.log(empIds);

//Date ==> Date represents a specific point in time.

let currentDate = new Date();
console.log(currentDate);