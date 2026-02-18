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

//2. Access the data /properties from the object 
console.log(person.name);
console.log(person["name"]);

console.log(person.address.country);
console.log(person.address["country"]);

//3. Adding a new property to the object. 
person.role = "Quality Engineer";
console.log(person);

//4. Modifying the existing property of an object.
person.role = "SDET"; 
console.log(person);

//5. Deleting the existing property of an object. 
delete person.age;
console.log(person);

//6. Check whether a particular property is available within the object or not. 
console.log("empId" in person);
console.log("age" in person);

//7. Get all the keys from the object. 
console.log(Object.keys(person));

//8. Get all the values from the object. 
console.log(Object.values(person));

//9. Get all the entries from the object. 
console.log(Object.entries(person));

//10.iterate the values of the object. 
for (let key in person){
    console.log(person[key as keyof personInfo]);
}

//11. Verify the data type of a particular property. 
console.log( typeof person.empId);
console.log( typeof person.address);

//12. Merge two objects.
interface projectInfo {
    projectName: string,
    projectId: number
}

let project: projectInfo = {
    projectName:"Project A",
    projectId: 5678
}

let mergedObject = {...person, ...project};
console.log(mergedObject);

console.log ("Object methods are completed successfully.")