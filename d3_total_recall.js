
//* Creating Classes and Factories 

class Hamster {
    constructor(name){
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun(){
      console.log('squeak squeak')
    }
    eatFood(){
      console.log('nibble nibble')
    }
    getPrice(){
      return this.price
    }
  }

class Person {
    constructor(name){
      this.name = name
      this.age = 0
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
    }
    getName(){
      return this.name
    }
    getAge(){
      return this.age
    }
    getWeight(){
      return this.weight
    }
    greet(){
      console.log(`I am ${this.name} hello`)
    }
    eat(){
      this.weight++
      this.mood++
    }
    exercise(){
      this.weight--
    }
    ageUp(){
      this.age++
      this.height++
      this.weight++
      this.mood--
      this.bankAccount+=10
    }
    buyHamster(hamster){
      this.hamsters.push(hamster)
      this.mood+=10
      this.bankAccount-=hamster.getPrice()
    }
  }

  const person1 = new Person('Timmy')
  const hamster = new Hamster("Gus")
  hamster.name = "Gus"
  hamster.owner = 'Timmy'

  for (let i = 0; i < 5; i ++) {
    person1.ageUp()

  }

for (let i = 0; i < 5; i ++) {
    person1.eat()
}

for (let i = 0; i < 5; i ++) {
    person1.exercise()
}

for (let i = 0; i < 9; i ++) {
    person1.ageUp()
}
for (let i = 0; i < 15; i ++) {
    person1.ageUp()
}

person1.eat()
person1.eat()
person1.exercise()
person1.exercise()

person1.buyHamster(hamster)

console.log(person1);
console.log(hamster);


///////

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer 
        this.entree = entree
        this.dessert = dessert
    }

}

//Factory 
class Chef {
    dinnerPrep(appetizer, entree, dessert){
        const dinner = new Dinner(appetizer, entree, dessert)
        return dinner
    }

}

const chef1 = new Chef
//Creating object for Chef class to then use method and take the properties from Dinner class. Chef class acts as a factory; pumping out methods to instantiate new Dinner using the properties (appetizer, entree, dessert) from Chef class.


const dinnerNights = []
//Empty array ; waiting for push()

const dinnerNight1 = chef1.dinnerPrep('man','ko','to');
const dinnerNight2 = chef1.dinnerPrep('mom','ko','to');
const dinnerNight3 = chef1.dinnerPrep('pop','ko','to');
//creating variables to push

dinnerNights.push(dinnerNight1, dinnerNight2, dinnerNight3)
//push into empty array

console.log(dinnerNights);
//log array with three dinner nights


/////////////////////


// let firstVariable = "Hello world"
// firstVariable = 5;
// let secondVariable = firstVariable;
// secondVariable = "Wow"
// console.log(firstVariable);

// const yourName = "May"
// const myName = `Hello, my name is ${yourName}`
// console.log(myName);

///////////////////

//* Hungry for More 


const cat1 = {
    name: 'henry',
    breed: "siamese",
    age: 10
}

// console.log(cat1.name);
// console.log(cat1.breed);

const cat2 = {
    name: 'jack',
    breed: 'tabby',
    age: 5
}

//* Combine Cats 
// const combineCats = (mama,papa) => {
//     console.log(mama)
//     console.log(papa);
// }

// combineCats(cat1,cat2)

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

//* Combine cats into 1 cat 

const combineCats = (mama,papa) => {
    let catCombo = {
        name: mama.name + papa.name,
        breed: mama.breed + '-' + papa.breed,
        age: 1
    }
    return catCombo 
}

const arg1 = combineCats(cat1, cat2);
const arg2 = combineCats(cat1, cat2);


//* Cat Brain Bender

//4 times 

console.log(combineCats(combineCats(arg1, arg2), combineCats(arg1, arg2)));
