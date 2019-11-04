"use strict";

const takbir = "Allahu Akbar";

let baim = {
  nama: "Muhammad Faris Ibrahim",
  umur: "18",
  tempatTinggal: "Jakarta Timur"
};

//Console

console.log("Hello, please insert your name");
console.warn("Hello, please insert your warning");
console.error("Hello, please insert your error");
console.info("Hello, please insert your info");
alert("Please open your web inspector");

// String

console.log("hello World");
const name = "Faris Ibrahim";
console.log(`Hello ${baim.nama}`);
alert(`Hello ${baim.nama}`);

//Number
console.log(0);
console.log(100);
console.log(3.14);
const age = 17;
console.log(`umur saya ${baim.umur} Tahun`);

//Object
console.log({ name: "alpha", age: 100, superPower: true });
console.log({
  name: "alpha",
  age: 100,
  superPower: true
});
const hero = { name: "alpha", age: 100, superPower: true };
console.log(hero);
console.log(hero["name"]);
console.log(hero.age);
console.log(hero.superPower);

// Array
console.log([1, 2, 3]);
console.log(0, 1, 2, 3);
console.log(["alpha", 100, true]);

const person = ["alpha", 100, true];
console.log(person);
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

// Boolean
console.log(true);
console.log(false);
console.log(true, false);

const toggle = false;
console.log(`the lamps toggle is ${toggle}`);
