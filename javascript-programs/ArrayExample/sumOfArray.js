const array = [4, 6, 11, 63, 21];
/*here is the two way to calculate the sum of the two numbers
1) use reduce function
2) apply for loop over the array
*/

//1) use reduce function
const sumOfArray = array.reduce((acc, cur) => {
  return acc + cur;
});

console.log(sumOfArray, "sumOfArray");

//2) Using for loop method
let sum = 0;

const getSum = () => {
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const totalSum = getSum();
console.log(totalSum, "sum");
