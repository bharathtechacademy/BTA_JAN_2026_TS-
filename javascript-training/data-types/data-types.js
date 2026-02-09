//Data types in JavaScript are divided into two different categories. 
// 1. Primitive datatypes (immutable)
// 2. Non-primitive  datatypes (mutable)

//mutable vs immutable

//immutable
let a=10;
a+10;//adding 10
console.log(a);

//mutable
let obj = {
    "name":"bharath",
    "id":1234
}
obj.age = 35;//adding age 35 
console.log(obj);

//Data types in JavaScript

/****************************************************/
/***********PREMETIVE DATA TYPES IN JAVASCRIPT*******/
/****************************************************/

//1.number ==> The data type that we are going to use to store numbers with decimals or without decimals without any quotations. 
let num1 = 10;
let num2 = 10.5;
console.log(num1);
console.log(num2);

//2.string ==> The data type that we are going to use to store text or characters with the help of single quotes or double quotes or backticks.
let empName = "Anurag";
let location = 'Delhi';
console.log(empName);
console.log(location);

let greeting = 'He told me, "Good morning." ';
let newGreeting = "I told him, 'Very good morning.' ";
let anotherGreeting = "I told him, 'Very good morning.' and also \"Nice to Meet You\"";
console.log(greeting);
console.log(newGreeting);
console.log(anotherGreeting);

//backtick ==> Backtick will be used to store template literals. 
let message = `New employee name is ${empName}, and location is ${location}.`;
console.log(message);

//3.boolean ==> The data type that we are going to use to store true or false values.
let isActive = true;
console.log(isActive);
console.log(10<5);

//4.undefined ==> undefined represents a variable that has been declared but not assigned a value.
let age;
console.log(age);

//5.null ==> null represents a variable that has been declared and assigned null/empty value.
let salary = 100000;
salary=null;
console.log(salary);

//6.symbol ==>


/****************************************************/
/*******NON-PREMETIVE DATA TYPES IN JAVASCRIPT*******/
/****************************************************/

//1.object ==> Object data type represents a collection of key-value pairs. 
let person = {
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

//print the name of the person
console.log(person.name);//method 1
console.log(person["name"]);//method 2

//print the country of the person
console.log(person.address.country);
console.log(person.address["country"]);

//print complete person object
console.log(person);

//2.array ==> Array data type represents a list of values.
let fruits = ["apple","banana","orange","grapes"];
let prices = [10,20,30,40];
let fruitsAndPrices = ["apple",10,"banana",20,"orange",30,"grapes",40];
console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[0]);//apple
console.log(fruitsAndPrices[1]);//10

//3.function==> Function represents a block of code or collection of statements to complete particular task. 
function launchBrowserAndLogin(browserName) {
    console.log("Launch the " + browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}

//4.Set ==> Set represents a collection of unique values of any data type.
let empIds = new Set();
empIds.add(123);
empIds.add(124);
empIds.add(124);
empIds.add(125);
empIds.add(126);
console.log(empIds);
console.log(empIds.size);

//5.Map ==> A map can store multiple key-value pairs. Maps allow duplicate values, but they won't allow duplicate keys. 
    let empMap = new Map();
empMap.set(123,"Bharath");
empMap.set(121,"Sarath");
empMap.set(123,"Anurag");
empMap.set(125,"Admin");
empMap.set(126,"Admin");
empMap.set(127,"Amit");
console.log(empMap);
console.log(empMap.get(123));
console.log(empMap.size);
empMap.delete(127);
console.log(empMap);




//6.Date ==> 