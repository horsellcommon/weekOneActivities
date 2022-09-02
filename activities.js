// Pet Object

const pet = {
  name: "Colin",
  typeOfPet: "cat",
  age: 10,
  colour: "black",
  eat: function () {
    return `${this.name} is eating.`;
  },
  drink: function () {
    return `${this.name} is drinking.`;
  },
};

console.log(pet.eat());
console.log(pet.drink());

//
