//find out the largest element in the array

const array = [4, 5, 2, 7, 19];
var largestElement = 0;

//create one function iterate over the array and compare the value between largestElement and array value
const getLargestElement = () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestElement) {
      largestElement = array[i];
    }
  }
  return largestElement;
};

const largest = getLargestElement();
console.log(largest, "largest");
