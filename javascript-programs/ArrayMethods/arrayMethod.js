/**
 * Here we discuss array method in javascript
 1)toString
 2)length
 3)push , pop
 4) shift, unshift
 5)join
 6)concat
 7)splice and slice difference
 8) flat
 */

//toString

//it converts array into strings ex ["hello", "world"] -> hello,world
// basic example of toString method
const array = ["Hello", "world"];
const result = toString(array);
console.log(result);

//length
// to check the length of the arry

//Difference between splice and slice method

/*
    **************Slice method***************
        ->he changes do not reflect in the original array.
        ->The result has to be assigned to a new array variable.
        -> it cut out the part of array and return new array
        -> it does not remove any element from source array
        
        it also take 2 arguments like slice(1,3) it not consider 3 arguments(omitted)
    */
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
// output: Orange, Lemon, Apple, Mango;

const updatedArray = fruits.slice(1, 3);
// output: Orange, Lemon

/*
    **************Splice method***************
    ->The splice() method adds new items to an array.

        ->it remove item from original array
        ->The changes reflect in the original array
        ->The result need not be assigned to any other new variable.
        ->Takes ‘n’ number of arguments (a list of new items can be supplied)
    */
const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //output:- Banana,Orange,Lemon,Kiwi,Apple,Mango
fruits.splice(0, 1); //output:- Orange,Apple,Mango // The second parameter (1) defines how many elements should be removed.

//3) pop and push methods
