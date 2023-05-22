console.log("hello world");


var myName = "Al Akil"; //string
console.log(typeof(myName));

var x = 23; //number 
console.log(typeof(x));

var y = 32.53; // number floot
console.log(typeof(y));

var arr = [2,3,43,23]; // array object
console.log(typeof(arr));

var obj = {name: "Al Akil", roll:32}; // object
console.log(typeof(obj));

var bool = true;
console.log(typeof(bool));

var n = null;
console.log(typeof(n));


//operator
var add = 32+23;
console.log(add);

var add = 32-23;
console.log(add);

var add = 32*23;
console.log(add);

var add = 32/23;
console.log(add);

var add = 3**23;
console.log(add);

console.log(23  < 32);

console.log(32> 3);

console.log(23 ==23);
console.log(32 ==="23");
console.log(32 == 32 || 23 ==2);
console.log(32 == 32 && 23 ==2);
console.log(32!=23);

let age = 32;
if (age < 18) {
    console.log("The user is old");
}else if (age <50){
    console.log("The use is too old")
}else {
    console.log("The user is child")
}


if(age < 18) {
    if (age < 50) {
        console.log("too old");
    }else {
        console.log("old");
    }
}else {
    console.log("child");
}

let day = "Mon";

switch (day) {
    case "Sun":
        console.log("It is sunday");
        break;
    case 'Mon': 
        console.log("It is monday");
        break;
    default: 
        console.log("It is another day");
}


for(var i =0; i < 10; i++) {
    console.log(i);
}


for(var i =0; i < 10; i++) {
    if(i%2 == 0) {
        continue;
    }
    console.log(i);
}

for(var i =0; i < 10; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(i);
}


let ii = 0;
while(i < 20) {
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++
} while(i < 30)

let array = [32,3,423,4,234];
array.push(23);
array.pop();
array.shift();
array.unshift(343);

array.slice(2, 4)
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


let person = {
    name:"Akil",
    city: "Dinajpur",
    country:"Bangladesh"
}

console.log(person.name);
console.log(person);



function addition(x,y) {
    console.log(x+y);
}

addition(32,3);


function sum (...args) {
    let sum = 0;
    for (let arg of args) sum  += arg;
    console.log(sum)
}

sum(43,32,53,2,452,34)