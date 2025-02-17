//Studing DataTypes..

"use strict"; // treat all JS code as newer version

console.log(3+3); console.log("shibu")  // for one line code use ';' between them.

console.log ("6-4")
console.log("shibuuuuu") // for multiline code we dont use ';'

let name = "swqyanshu" // act as string type
let age = 19 // act as int type 
let boolean = true // act as boolean type 
let ch = 'a' // act as character type
 

console.table ([name,age,boolean,ch])

// if we want to know the type of a perticula data type then..

console.log (typeof age)
console.log(typeof name)

// so generally 'let' use as multiple data type

//if we want a variable of integers only then ..
let score;
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber) //NaN

//if score = null..

score = null //0 as assign to 'Number'
let s = Number(score)
console.log(typeof s)
console.log(s)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) // shows 33
console.log(typeof stringNumber)//shows String type


/*conversion is like
"33" = 33
33ABC = NaN
true =1 
false = 0
*/