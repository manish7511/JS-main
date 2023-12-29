const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits); 
console.log(fruits.length);

fruits[5] = "mango";
console.log(fruits[5]);
console.log(fruits.length);
console.log(Object.keys(fruits));

fruits.length = 12;
console.log(fruits);

const marvel_heroes=["thor","iron man","captain"]
const dc_heroes=["spiderman","flash","batman"]

const sbhero=marvel_heroes.concat(dc_heroes)
const allheroes=[...marvel_heroes,...dc_heroes]
console.log(allheroes);
console.log(sbhero);