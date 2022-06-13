/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
Get number array
Get target

Scan array for all numbers, check each case for if numberArray[n] + numberArray[m] === target. O(n^2) solution

Potential optimizations:
Run a sub O(n^2) sort on the array.
use two pointers to scan the array from end and start
if the first pointer + second pointer exceeds the target decrement the end pointer and repeat.
This should limit the loops, has a worst case scenario of O(nLog(n)) as the loops should have less iterations each go.
*/
let twoSum = (numberArray, target) => { // O(n^2) Nested loops checking all possible values
    i = 0;
    for (i; i <= numberArray.length - 1; i++){ // O(n)
        j = 0;
        for (j; j <= numberArray.length - 1; j++){ // O(n)
            if (target === (numberArray[i] + numberArray[j]) && i !== j){ //O(1);
                answer = [i,j];
                return answer;
            }
        }
    }
}

testArray = [3,2,4]

console.log(twoSum(testArray, 6));
   /*
let mergeSort = (array) => {
 
    Algorithm for Merge Sort

    Step 1: Find the middle index of the array.
    Middle = 1 + (last – first)/2
    Step 2: Divide the array from the middle.
    Step 3: Call merge sort for the first half of the array MergeSort(array, first, middle)
    Step 4: Call merge sort for the second half of the array. MergeSort(array, middle+1, last)
    Step 5: Merge the two sorted halves into a single sorted array.

    first = 0;
    last = array.length - 1;
    middle = 1 + (last-first)/2;
    leftArray = array.slice(first, middle);
    rightArray = array.slice(middle+1, last);
    if (array.length > 1){
        mergeSort(leftArray);
        mergeSort(rightArray);
    }

    console.log(leftArray);
    console.log(middle);
}

let sort = (leftArray, rightArray) => {
}

mergeSort(testArray);

Implement this later*/

