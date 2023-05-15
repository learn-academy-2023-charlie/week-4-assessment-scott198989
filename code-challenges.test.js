// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

describe('stFunct1',  () => {
  it('takes in an array and removes the first item shuffling the remaining content', () => {
    expect(stFunct1(colors1)).toEqual(expect.arrayContaining(['blue', 'green', 'yellow', 'pink']))
  })
})

describe('stFunct2', () => {
  it('takes in an array and removes the first item shuffling the remaining content', () => {
    expect(stFunct2(colors2)).toEqual(expect.arrayContaining(['saffron', 'aquamarine', 'periwinkle', 'indigo', 'ochre']))
  })
})
// GOOD Failure
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: stFunct1 is not defined
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: stFunct2 is not defined

// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

//Psudeocode: The function takes an array as input, then it creates a new array called newArray by extracting elements from colors1 starting from index 1 (excluding the first element). Then, it shuffles the elements in newArray using the .sort() method with a random comparison function (() => 0.5 - Math.random()). The stFunct function is called with colors1 as an argument, and the resulting shuffled array is stored in the finalArray variable. The finalArray is then displayed or printed to the console. The process is the same exact way for both array of colors (colors1, colors2), all that was changed was naming conventions. 

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const stFunct1 = (array) => {
  const newArray = array.slice(1)
  return newArray.sort(() => 0.5 - Math.random())
}
const finalArray = stFunct1(colors1)
// console.log(finalArray)
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]

const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
const stFunct2 = (array) => {
  const newArray2 = array.slice(1)
  return newArray2.sort(() => 0.5 - Math.random())
}
const finalArray2 = stFunct2(colors2)
// console.log(finalArray2)
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
//  PASS  ./code-challenges.test.js
//   stFunct1
//     ✓ takes in an array and removes the first item shuffling the remaining content (1 ms)
//   stFunct2
//     ✓ takes in an array and removes the first item shuffling the remaining content (1 ms)


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// Psuedocode 
// Input : a function that takes in a object containing up and down votes
// Output : return the tally of up and down votes
// Process:  Create a function called election1 and election2 which uses a object as a parameter.  Declare a new variable, winner1, winner 2 (for second function) then pass the parameter object using the this. method.  obj, being the place holder for "this", will reference the given object (votes1, votes2 for second function).  subtract the values and return the talley.  Create a test in jest that sees Good Failure, then code the functions.  

// a) Create a test with expect statements for each of the variables provided.

// FAIL  ./code-challenges.test.js
// election1
//   ✕ calculates the winner based on upVotes and downVotes
// election2
//   ✕ calculates the winner based on upVotes and downVotes
// combine
//   ✓ combines two arrays and removes duplicates (1 ms)

// ● election1 › calculates the winner based on upVotes and downVotes

//   ReferenceError: election1 is not defined

//     80 |   it('calculates the winner based on upVotes and downVotes', () => {
//     81 |     const votes1 = { upVotes: 13, downVotes: 2 }
//   > 82 |     expect(election1(votes1)).toBe(11)
//        |     ^
//     83 |   })
//     84 | })
//     85 |

//     at Object.expect (code-challenges.test.js:82:5)

// ● election2 › calculates the winner based on upVotes and downVotes

//   ReferenceError: election2 is not defined

describe('election1', () => {
  it('calculates the winner based on upVotes and downVotes', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    expect(election1(votes1)).toBe(11)
  })
})

describe('election2', () => {
  it('calculates the winner based on upVotes and downVotes', () => {
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(election2(votes2)).toBe(-31)
  })
})

const votes1 = { upVotes: 13, downVotes: 2 }

const election1 = (obj) => {
  let winner = obj.upVotes - obj.downVotes;
  return winner
}

// console.log(election1(votes1))

const votes2 = { upVotes: 2, downVotes: 33 }

const election2 = (obj) => {
  let winner2 = obj.upVotes - obj.downVotes
  return winner2
}
// console.log(election2(votes2))

// Expected output: -31

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// election1
//   ✓ calculates the winner based on upVotes and downVotes (1 ms)
// election2
//   ✓ calculates the winner based on upVotes and downVotes
// combine
//   ✓ combines two arrays and removes duplicates (1 ms)




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// Psuedocode:

// Input: Takes in two arrays 

// Output: Returns a new array with no duplicates

// Process: Create a function called combine and use array1 and array2 as parameters. Create a variable to concat the arrays together.  Another variable to use the Set built in method, which allows you to store unique values of any type with no duplicates (researched this).  Create another variable to bring the Set back to a array (newArray).  Finally, return the newArray which will contain all the data types with no duplocates.  Create a test to see Good Failure in jest describing this processs, then create the function and see it pass.

// a) Create a test with an expect statement using the variables provided.

// FAIL  ./code-challenges.test.js
// combine
//   ✕ combines two arrays and removes duplicates

// ● combine › combines two arrays and removes duplicates

//   ReferenceError: combine is not defined

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]

describe('combine', () => {
  it('combines two arrays and removes duplicates', () => {
    expect(combine(["array", "object", "number"], ["string", "Boolean", "null", "undefined"])).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})


const combine = (array1, array2) => {
  let combo = array1.concat(array2)
  let comboBreakerSet = new Set(combo)
  let newArray = Array.from(comboBreakerSet)
  return newArray;
}

// console.log(combine(dataTypesArray1, dataTypesArray2))

// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// combine
//   ✓ combines two arrays and removes duplicates (1 ms)


