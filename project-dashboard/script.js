const Player = function (name, age) {
  this.name = name;
  this.age = age;
};

const playerOne = new Player("test", 12);

// console.log(
//   playerOne.prototype,
//   Object.getPrototypeOf(playerOne),
//   Player.prototype,
//   Object.getPrototypeOf(Player.prototype)
// );

let y = [];

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop); // jumps, then eats

console.log(Object.getPrototypeOf(Object.getPrototypeOf(rabbit)));
console.log(
  Object.getOwnPropertyNames(
    Object.getPrototypeOf(Object.getPrototypeOf(rabbit))
  )
);
