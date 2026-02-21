//String : string is nothing but a collection of characters written together within the quotation. 

//1.Storing string in a variable
let greeting: string = "Hello, World!";//double quotes
let name: string = 'John Doe';//single quotes
let message: string = `Welcome to TypeScript!`;//backticks

console.log(greeting); // Output: Hello, World!
console.log(name); // Output: John Doe
console.log(message); // Output: Welcome to TypeScript!

//advantage of backticks is that we can use string interpolation
let firstName: string = "Jane";
let lastName: string = "Smith";
//old way of concatenating strings
let fullNameOld: string = firstName + " " + lastName; // Using concatenation
//new way of concatenating strings using template literals
let fullName: string = `${firstName} ${lastName}`; // Using template literals for string interpolation
console.log(fullNameOld); // Output: Jane Smith
console.log(fullName); // Output: Jane Smith

/*******************************String Methods *******************************/
//1.Storing string in a variable
console.log("1.Storing string in a variable"); 
let originalString: string = " Username : Admin | Password : admin123 ";
console.log("Original String: '"+originalString+"'")

//2. Calculate the total number of characters available in the string. ==> string.length
console.log("2. Calculate the total number of characters available in the string");
let stringLength:number = originalString.length;
console.log("Total Chars in String : "+stringLength);

//3. Get the specific character from the string at a specific index.  ==> string.charAt(index);
console.log("3. Get the specific character from the string at a specific index.");
let charAtIndex5:string = originalString.charAt(5);
console.log("Character at index 5 : "+charAtIndex5);

//reverse the string
let reverseString:string = "";
for(let i:number=stringLength-1;i>=0;i--){
    reverseString=reverseString+originalString.charAt(i);
}
console.log("Reverse the string is :"+reverseString);

//4. Removing unwanted spaces (begining & ending) from the string ==> string.trim();
console.log("4. Removing unwanted spaces (begining & ending) from the string");
console.log("Original String: '"+originalString+"'");
console.log("Trimmed String: '"+originalString.trim()+"'")

//5. Remove all the spaces from the string. ==> string.replace(/[exp]/g,newChar);
console.log("5. Remove all the spaces from the string.");
let stringWithoutSpaces = originalString.replace(/ /g,"");
console.log(stringWithoutSpaces);

//6. Remove all the alphabets from the string. 
console.log("6. Remove all the alphabets from the string.");
let stringWithoutAlphabets = originalString.replace(/[a-zA-Z]/g,"");
console.log(stringWithoutAlphabets);

//7. Remove all the numbers from the string. 
console.log("7. Remove all the numbers from the string.");
let stringWithoutNumbers = originalString.replace(/[0-9]/g,"");
console.log(stringWithoutNumbers);

//8. Remove all the special chars from the string. 
console.log("8. Remove all the special chars from the string.");
let stringWithoutSpecialChars = originalString.replace(/[^0-9a-zA-Z]/g,"");
console.log(stringWithoutSpecialChars);

//9. Converting the string to uppercase. ==> string.toUpperCase();
console.log("9. Converting the string to uppercase");
let uppercaseString = originalString.toUpperCase();
console.log(uppercaseString);

//10. Converting the string to lowercase. ==> string.toLowerCase();
console.log("9. Converting the string to lowercase");
let lowercaseString = originalString.toLowerCase();
console.log(lowercaseString);

//11. Extract specific part of the string based on the starting and ending index. ==> string.substring(startIndex, endIndex+1);
console.log("11. Extract specific part of the string based on the starting and ending index.");
let username = originalString.substring(12,17);
let password = originalString.substring(31,39);
console.log("Username : "+username);
console.log("Password : "+password);

//12. Extract the specific part of the string from the dynamic text. ==> string.split(exp); => string []
console.log("12. Extract the specific part of the string from the dynamic text.");
let splittedValues:string [] = originalString.split(" ");
console.log(splittedValues[3]);
console.log(splittedValues[7]);

//13. Compare two different strings. 
//=== Operator for Strict Equality  (compares both value and type)(case-sensitive)
//== Operator for Loose Equality  (compares only value, performs type coercion)(case-sensitive)
//includes() method for Substring Check (case-sensitive)
//startsWith() and endsWith() methods for Prefix/Suffix Check (case-sensitive)
console.log("13. Compare two different strings.");
let string1:string = "Hello, World!";
let string2:string = "hello, world!";
console.log("Using === operator : "+(string1===string2));
console.log("Using == operator : "+(string1==string2));
let string3:string = "100";//string
let numberValue:number = 100;//number
console.log("Using === operator : "+(string3===numberValue));//false
console.log("Using == operator : "+(string3==numberValue));//true
let string4:string ="TypeScript";
console.log("TypeScript includes 'Script' : "+string4.includes("Script"));
console.log("TypeScript includes 'Script' : "+string4.includes("script"));
console.log("TypeScript start with 'Type' : "+string4.startsWith("Type"));
console.log("TypeScript ends with 'Script' : "+string4.endsWith("Script"));

//14. Data Conversions
console.log("14.Data Conversions")

//converting other data type to string
let stdCode:number = 144;
let phone:number = 345345;
let stdCodeString = String(stdCode);
console.log(stdCodeString+phone);

//converting  string to other data type
let balance:string = "Account balance is 9,999.99 rupees";
balance = balance.replace(/[^0-9.]/g,"");
let bal:number = parseFloat(balance);
console.log(bal>=10000);

