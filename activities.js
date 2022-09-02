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

console.log(person.sayHi())

// Generate and log 6 random numbers between 1-50

const consoleLogger = () => {
    for (let t = 0; t < 6; t++){
        let thisVariable = Math.round(Math.random() * 50)
        console.log(thisVariable)
    }
}
consoleLogger()

// Program that counts down from 9 to 0

const countDown = () => {
    for (let increment = 9; increment > -1; increment--){
        console.log(increment)
    }
}
countDown()

// Storing data - breakfast-lunch-dinner

const foodLogger = (mealOne, mealTwo, mealThree) => {
    breakfast = mealOne
    lunch = mealTwo
    dinner = mealThree
}

foodLogger("Toast", "Soup", "Pasta")
console.log(`Breakfast: ${breakfast}`)
console.log(`Lunch: ${lunch}`)
console.log(`Dinner: ${dinner}`)

// Film Array - list favourite films then add 2 using a method and then loop to cycle through array

let filmArray = ["The Thing", "A Clockwork Orange", "Blade Runner"];

filmArray.push("The Lighthouse", "Hitchhiker's Guide To The Galaxy")

for (let i = 0; i < filmArray.length; i++) {
  console.log(filmArray[i]);
}