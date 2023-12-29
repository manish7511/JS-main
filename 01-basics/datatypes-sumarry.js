//  Primitive(stack)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (heap)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//  stack

let username="manishsingh7134@gmail.com"

let anothername=username
anothername="manish"

console.log(username)
console.log(anothername);


let userone={
    userid:"manish",
    upid:"837@ybl",
}
let usertwo=userone

usertwo.userid="jfhffjs"

console.log(userone.userid);
console.log(usertwo.userid);

