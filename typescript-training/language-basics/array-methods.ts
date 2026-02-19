//Array: An array is a collection of multiple values. 

//1. Creating an array
console.log("Creating an array:");
let fruits: string[] = ["Apple", "Banana", "Cherry"];
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(fruits);
console.log(numbers);

//2. Accessing array elements. 
console.log("Accessing array elements:");
console.log(fruits[1]);//Banana
console.log(numbers[3]);//4

//3. Adding additional values to the existing array at the end. 
console.log(" Adding additional values to the existing array at the end:");
numbers.push(6);
console.log(numbers);

//4. Removing the last element from the array. 
console.log(" Removing the last element from the array:");
numbers.pop();
console.log(numbers);

//5. Adding additional values to the existing array at the begining. 
console.log(" Adding additional values to the existing array at the begining:");
numbers.unshift(0);
console.log(numbers);

//6. Removing the first element from the array. 
console.log(" Removing the first element from the array:");
numbers.shift();
console.log(numbers);

//7. Add or remove one or more values within the array from a specific index. 
console.log(" Add or remove one or more values within the array from a specific index:");
numbers.splice(2,2,2.5,3.5) ; //splice(index,numberOfValuesToBeRemoved, values to be added)
console.log(numbers);

//8.Creating a new array by extracting a portion of an existing array. 
console.log("Creating a new array by extracting a portion of an existing array:");
let extractedValues = numbers.slice(2,4) ;//slice(startIndex,endIndex+1);
console.log(extractedValues);

//9. Merge two or more arrays and create a new array. 
console.log("Merge two or more arrays and create a new array:");
let numbers1: number [] = [1,2,3,4];
let numbers2: number [] = [5,6,7,8];
let mergedArray : number []= numbers1.concat(numbers2);
console.log(mergedArray);

//10. Finding the index of a specific value within the array 
console.log("Finding the index of a specific value within the array:");
let indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana);
let indexOfMango = fruits.indexOf("Mango");
console.log(indexOfMango);

//11. Iterate the values of the array. 
console.log("Iterate the values of the array:");
for(let fruit of fruits){
    console.log(fruit);
}

//12. Reverse the values within the array. 
console.log("Reverse the values within the array:");
let num: number [] = [1,2,7,3,4,5,6,10];
console.log(num.reverse());

//13. Sort the values within the array. 
console.log("Sort the values within the array:");
num.sort((a,b)=>a-b); //ascending order
console.log(num);
console.log(num.sort((a,b)=>b-a)); //descending order

//14. Special lambda expressions in array (map--> manipulate, filter--> reduce & forEach--> iterate value)
let input: number [] = [1,2,3,4,5,6];

//map : get the square of each and every number. 
let squareNumbers : number []= input.map(x=>x*x);
console.log(squareNumbers);

//filter: print only even numbers from the list. 
let evenNumbers = input.filter(x=>x%2===0);
console.log(evenNumbers);

//forEach: loop each and every value from array
input.forEach(x=>console.log(x));
