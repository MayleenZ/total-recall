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

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies[8])

// //console.log(favMovies.sort())

// favMovies.pop()
// favMovies.push('Guardians of the Galaxy')
// //console.log(favMovies);

// favMovies.reverse()
// //reverses the array

// favMovies.shift()
// //removes first item of the array

// favMovies.unshift()
// //adds an item to beginning of the array , but no arguments = adds no item

// console.log(favMovies)

// console.log(favMovies.indexOf('Django Unchained'))
// favMovies.splice(14,1,'Avatar')
// //Answer: It does not alter the array but creates a shallow copy
// console.log(favMovies)


// let slicedArray = ((favMovies.length ) / 2)
// console.log(slicedArray); //9
// let sliceArray = favMovies.slice(9)
// console.log(sliceArray);



// console.log(sliceArray.indexOf('Fast and Furious'))
//-1

////////////////////////////////
//* Where is Waldo
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];


// whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo);

// whereIsWaldo[1][2] = "no one"
// console.log(whereIsWaldo);

// console.log(whereIsWaldo[2][1][1]);


////////////////////////////////
//*  Excited Kitten
// phrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
// for (let i = 0; i <= 21; i++){
//     if(i % 2 === 0){
//         let rando = Math.floor(Math.random() * 3)
//         if (rando === 0){
//             console.log(phrases[0])
//         } else if (rando === 1) {
//             console.log(phrases[1])
//         } else if(rando === 2) {
//             console.log(phrases[2])
//         }
//     } else {
//         console.log(i)
//     }
// }

////////////////////////////////
//*  Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// const median = (Math.floor(nums.length / 2))
// console.log(median);
sortedNums = (nums.sort())
console.log(sortedNums);
//sorted the nums array 

const median = Math.floor((sortedNums.length / 2))
//found the median and used floor to remove decimal

console.log(sortedNums[median]);
//sorted the nums using the median that I found



///////////////////////

//* Hungry for More (Return of the Closets)

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  

const kristynsShoe = kristynsCloset.shift()
console.log(kristynsCloset);

thomsCloset[2].push(kristynsShoe)
console.log(thomsCloset);

const thomsOutfit1 = [thomsCloset[0][1], thomsCloset[1][1], thomsCloset[2][2]]
console.log(thomsOutfit1);
const kristynsOutfit1 = [kristynsCloset[1], kristynsCloset[2], kristynsCloset[3]]
console.log(kristynsOutfit1);

const outfits = `thom will be wearing a ${thomsOutfit1} and krystin will be wearing her favorite ${kristynsOutfit1}`
console.log(outfits);

for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
}

console.log(thomsCloset);