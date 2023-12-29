const a = "my problem is not a slef study its consistency"
const b=new String("manish")

console.log(typeof a);
console.log(typeof(b));
// primitive and  strings object

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"


// EVAL METHOD

let x = 10;
let y = 20;
let text = "x * y";
let result =eval (text);
console.log(result);


// anchor() method

let tex = "Hello World!";
let res = tex.anchor("Chapter 10");

console.log(res);

// slice();

let str="manish"
let str2=str.slice(3)
console.log(str2);

// length 

let len="manish  singh"
let l=len.length;
console.log(l);

// substring

let st = "Apple, Banana, Kiwi";
let part = st.substring(-3,13);

console.log(part);

// trim() removes all the spaces

let space="    dkmajb    "
console.log(space.trim());


const url="https://hitesh.com/manish%20kumar"

console.log(url.replace('%20','-'))

// split 

let sl="manish singh"
console.log(sl.split(" "));

//blink

let r="singh"
console.log(r.bold());