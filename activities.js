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

// Random Number Divisible By 7

let randomNumber = [];
const generate = () => {
    let generatedNumber = Math.round(Math.random() * 30)
        if (randomNumber.length == 6){
            console.log(`Your six numbers that are divisible by 7 are ${randomNumber}`)
        } else if (generatedNumber % 7 == 0){
            randomNumber.push(generatedNumber)
            console.log(generatedNumber)
            generate()
        } else if (generatedNumber % 7 != 0){
            console.log("Number is not divisible by 7")  
            generate()          
        } 
}

generate()

// sayHi function

person = {
    name: "Mick",
    age: 30,
    sayHi(){
        return `Hello, my name is ${person.name}`
    }
}

console.log(person)