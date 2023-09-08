// 2 program reverse a string
// string = Input:- 'Hello', Output:- 'olleH'
// reverse a string in words
// input: "Hello Het" output: "Het Hello"

const string = "Hello";
let reverse = "";
const reverseString = (string) => {
  for (let a = string.length - 1; a >= 0; a--) {
    reverse += string[a];
  }
  return reverse;
};

reverseString(string);
console.log(reverse);

// now reverse "Hello World" in "World Hello"

//input:"Hello World
//output:"World Hello"
const inputString = "Hello World";
const words = inputString.split(" "); // ["Hello", "World"]
const reversedWords = []; // create empty array to store value

for (let i = words.length - 1; i >= 0; i--) {
  reversedWords.push(words[i]);
}

const reversedString = reversedWords.join(" "); // Join the reversed words into a string
console.log(reversedString); // Outputs "World Hello"
