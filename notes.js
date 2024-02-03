const name= new String("Somardh Jaiswal")
const name2=new String("My Name is SJ")

//String Methods
console.log(name.toUpperCase());
console.log(name.length)
console.log(name.indexOf("d"))
console.log(name)
console.log(name.substring(0,5))
console.log(name.slice(-5,5))
console.log(name2.trim())
console.log(name2.split(' '))
console.log(Array.from("Somardh"))

//Object creation
const juser={
  name:"Raghav",
  age:22,
  city:"Mmbai",
  email:"xyz@google.in"
}

console.log(juser["name"])
console.log(typeof(juser.name))



//Merging of objects
//Method1
const obj1={  1:"a", 2:"b"}
const obj2={ 3:"b",4:"c" }
const obj3={5:"d", 6:"e"}
const obj5=Object.assign({}, obj1,obj2,obj3)
console.log(obj5)

//Method2
const obj6={...obj1, ...obj2, ...obj3}
console.log(obj6)



//Array of objects to handle database objects

const tinderUser={
  
  name: "Raghav",
  Email:"xyz@gmai.com",
  isloggedin: "YES"
}
console.log(Object.keys(tinderUser))// here  the return type is array which is very helpful
console.log(Object.values(tinderUser))//here  the return type is array which is very helpful
console.log(Object.entries(tinderUser))// A array inside array is returned having both keys and values inside



// Destructring of objects


const course={
  price:999,
  courseInstructor:"Madhav"
}


// now to acces the given object multiple times and to make code readable
const{courseInstructor:inst}=course  // now we can use inst to access the values anywhere in the code

console.log(inst)

//Working with APIS
// Sample API is randomuser me api
//To study this API Use JSON formatter


// Arrow Functions
const add=(num1,num2)=>{
  return num1+num2
}
console.log(add(11,13))
// Here need not write return keyword as we are not using {} braces in the function
const addthree=(num1,num2,num3)=>num1+num2+num3

console.log(addthree(5,15,20));

//IIFE(IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function chai(){
  console.log(`DB CONNECTED`);
})(); // Semi colon is to end the scope of this function because it does not know till where to execute


// ARROW FUNCTIONS CAN ALSO BE USED IN IIFE
(()=>{
  console.log(`DB CONNECTED2`)
})()


// falsy values

false,0,-0, null,undefined, NaN,BigInt,""

