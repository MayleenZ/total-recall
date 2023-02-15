//Ignore pt 1 html, css and start with JS exercises

////////////////////////////////
//* Easy Going
// for (let i = 1; i<=20; i++){
//     console.log(i)
// }
////////////////////////////////

//* Get Even
// for (let i = 0; i<=200; i+=1){
//     if (i % 2 === 0){
//         console.log((`${i} is even`))
//     } else {
//         continue;
//     }
// }

////////////////////////////////

//* Fizz Buzz
// for (let i = 1; i<=100; i++){
//     if (i % 3 === 0 && i % 5 ==0){
//         console.log(`FizzBuzz`)
//     } else if (i % 3 === 0){
//         console.log('Fizz')
//     } else if (i % 5 === 0){
//         console.log('Buzz')
//     }
// }

////////////////////////////////
//* Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] = 5001
// console.log(plantee[2])

// wolfy[3] = "Gotham City"
// console.log(wolfy);

// dart.push('Hawkins')
// console.log(dart);

// wolfy[0] = "Gameboy"
// console.log(wolfy);


////////////////////////////////
//* Yell at the Ninja Turtles

// ninja_Turtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for (const element of ninja_Turtle){
//     console.log(element.toUpperCase());
// }


////////////////////////////////
//* Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])

//console.log(favMovies.sort())

favMovies.pop()
favMovies.push('Guardians of the Galaxy')
//console.log(favMovies);

favMovies.reverse()
//reverses the array

favMovies.shift()
//removes first item of the array

favMovies.unshift()
//adds an item to beginning of the array , but no arguments = adds no item

console.log(favMovies)

console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(14,1,'Avatar')
//Answer: It does not alter the array but creates a shallow copy
console.log(favMovies)


let slicedArray = ((favMovies.length ) / 2)
console.log(slicedArray); //9
let sliceArray = favMovies.slice(9)
console.log(sliceArray);



console.log(sliceArray.indexOf('Fast and Furious'))
//-1

////////////////////////////////
//* Where is Waldo
////////////////////////////////


////////////////////////////////
//*  Excited Kitten
////////////////////////////////


////////////////////////////////
//*  Find the Median
///////////////////////