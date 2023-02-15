// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


//* I. Variables & Data Types
//* A. Q + A
/*
How do we assign a value to a variable?
    We first use const or let in front of the variable name and we use the equal sign to declare it to a value. const var = 'hello'
How do we change the value of a variable?
    Once we declare a variable we can change the value as long as it has the let keyword in front of the variable name. We later can use the variable we want to change without the keyword and change its value. 
How do we assign an existing variable to a new variable?
    We use const or let keyword in front of a new variable name and assign it to the existing variable. 
Remind me, what are declare, assign, and define?
    declare: When we use variables with values 
    assing: when we place the variables with values 
    define: What kind of variables and values we use 
What is pseudocoding and why should you do it?
    pseudocoding is a way of writing out code by using english and some coding keywords. It is helpful to understand the flow of the code before you tackle the code.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    I usually read the question and understand it completely before solving it which sometimes takes 1-2min. And then when I think of the first step I try to solve it and see what works. 
*/ 

//* B. Strings
// let firstVariable = 'Hello World'
// firstVariable = 2;
// let secondVariable = firstVariable
// secondVariable = 'Bye World'
// console.log(firstVariable) //Output : 2

// const yourName = 'Mayleen'
// console.log(`Hello my name is ${yourName}`)

//* C. Booleans
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 == '48');

//*  D. The Farm

// if (animal = "cow"){
//     animal = "cow"
//     console.log('moooo')
// } else {
//     console.log(`Hey! You're not a cow`)
// }

//*  E. Driver's Ed
// const personAge = 16;
// if (personAge > 16) {
//     console.log(`Here are the keys!`)
// } else {
//     console.log(`Sorry you are too young`)
// }

//_____________________________________________________________

//*  II. Loops
//*  A. The Basics
    // for ( let i = 0; i < 11; i++ ){
    //     console.log(i)
    // }

    // for (let i = 10; i < 401; i++){
    //     console.log(i)
    // }

    // for (let i = 12; i < 4001; i+=3) {
    //     console.log(i)
    // }

//* B. Get even

    // for(let i = 1; i < 101; i++){
    //     if(i % 2 === 0){
    //         console.log(`${i} <-- is an even number`)
    //     } else {
    //         console.log(i)
    //     }
    // }
//* C. Give me Five

    // for (let i = 0; i < 101; i++) {
    //     if (i % 5 == 0){
    //         console.log(`I found a ${i}. High five!`)
    //     } else {
    //         console.log(i)
    //     }
    // }

    // for (let i = 0; i < 101; i++) {
    //     if (i % 5 == 0 && i % 3 == 0){
    //         console.log(`I found a ${i}. High Five and Three is a crowd`)
    //     } else if (i % 3 == 0){
    //         console.log(`I found a ${i}. Three is a crowd.`)
    //     } else if (i % 5 == 0){
    //         console.log(`I found a ${i}. High Five`)
    //     } else {
    //         console.log(i)
    //     }
    // }

//* D. Savings account

// let  bank_account = 0 
// for (let i = 1; i < 11; i++){
//     bank_account += (i);
// }
// console.log(bank_account)


// let  bank_account = 0 
// for (let i = 1; i < 101; i++){
//     bank_account += (i * 2);
// }
// console.log(bank_account)

//_____________________________________________________________


//* III. Arrays & Control Flow
//*  A. Talk about it:
//  The things in an array are called elements
//  The array does not guarantee they will be in order
//  using an array helps when there is various info that displays various data types and are all asigned to one variable. Such as having a person name and inside the array would have other properties such as their height, age, location. 

//* B. Easy Does It
// const quotes = ['the sun is high', 'the night is long', 'life is short']
// console.log(quotes)
//* C. Accessing elements
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0])

// console.log(randomThings[2] = "World")
// console.log(randomThings);

//* D. Change values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const thirdElement = ourClass[2]
// console.log(thirdElement);

// ourClass[4] = 'Octocat'
// ourClass.push('Cloud City')
// console.log(ourClass);

//* E. Mix It Up
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon', 'Miley Cyrus')
// myArray.shift()
// myArray.unshift('Bob Marley')
// myArray.pop()

// myArray.reverse()
//  The array was mutated and it returned the array reversed 
// console.log(myArray)

//* F. Biggie Smalls
// const integer = 102;
// if (integer < 100 ){
//     console.log("little number")
// } else if (integer >= 100){
//     console.log("big number")
// } 

//* G. Monkey in the Middle

// let num = 'house'
// if (num < 5) {
//     console.log("little number")
// } else if (num > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey")
// }

//* H. What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// kristynsCloset.splice([6],0,"raybans")
// kristynsCloset[5] = "stained knit hat"
// console.log(kristynsCloset)

// console.log(thomsCloset[0])
// console.log(thomsCloset[1][1]);
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`)
// thomsCloset[1][2] = 'Footie Pajamas'
// console.log(thomsCloset);

//_____________________________________________________________


//* IV. Functions
// A. //
// B. 
// const printCool= (name) => {
//     return `${name} is cool`
// }
// console.log(printCool('Mayleen'));
// C.
// const calculateCube = (side) => {
//     return (side ** 3)
// }
// console.log(calculateCube(5));
// D.
// const isVowel = (char) => {
//     char = char.toLowerCase()
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isVowel('a'));
// E.
// const getTwoLengths = (str1, str2) => {
//     return ([str1.length, str2.length])
// }
// console.log((getTwoLengths("Hank", "Hippopopalous")));

//* (HELP) F.

// const getMultipleLengths = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         return ([arr])
//     }
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G.

// const maxOfThree = (num1, num2, num3) => {
//     if (num1 > num2) {
//         return num1
//     } else if (num2 > num1) {
//         return num2
//     } else if (num3 > num1) {
//         return num3
//     } else if (num1 > num2) {
//         return num1
//     } else if (num1 > num3) {
//         return num1
//     } else if (num2 > num3) {
//         return num2
//     } else {
//         return num1 || num2 || num3
//     }
// }
// console.log(maxOfThree(100, 2, 2));


//* (HELP) H.

// const printLongestWord = (arr) => {
//     let maxLength = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (maxLength < arr.length) {
//             maxLength = arr.length[i];
//         } else {
//             return arr[i]
//         }
//     } return maxLength
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd", 'oifjdoaifjodifjaodifjo']));

//_____________________________________________________________






// V. Objects
// A.
const user = {
    name: "May",
    email:  "may@google.com",
    age: '24',
    purchased: []
}
// B.
user.email = 'Jon@google.com'
user.age++
console.log(user)
// C.
user.location = "new york city"
console.log(user);
// D.
user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user);
console.log(user.purchased[2]);
// E.
user.friend = {
    name: 'Jon',
    age: "25",
    location: "Bronx, NY",
    purchased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = '55'
console.log(user.friend);
user.friend.purchased.push("The One Ring")
user.friend.purchased.push("A Latte")
console.log(user.friend.purchased[1]);
// F.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
}


for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
}

//* HELP G.

const updateUser = () => {
    for (let i = 0; i < user.length ; i++) {
        user.age++ && user.name.toUpperCase()
    }
}

console.log(updateUser())



//_____________________________________________________________


// Extra


