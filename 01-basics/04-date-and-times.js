let mydate=new Date()

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());

console.log(typeof mydate);

let createddate=new Date("08-28-2000")
console.log(createddate.toLocaleString())


let mytimestamp=Date.now()

console.log(mytimestamp);
console.log(createddate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()

console.log(newDate.getDate());
console.log(newDate.getMonth());
