/*
Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

For Leetcode the answer must return an array instead of printing.
*/

let fizzBuzz = (number) => {
    i = 1;
    arr = [] //Array O(n) space complexity
    while (i <= number){ //Loop O(n) time complexity
        case1 = (i % 3) === 0;
        case2 = (i % 5) === 0;
        case3 = case1 && case2;
        case4 = case1 || case2;
        if (!case4){ //O(1), common case reduces overall loop iterations
            arr.push((i.toString()));
        } else if (case3){ //O(1)
            arr.push(("FizzBuzz"));
        } else if (case1){
            arr.push("Fizz"); //O(1)
        } else { //O(1)
            arr.push("Buzz");
        }
        i++;
    }
    return arr;
}

console.log(fizzBuzz(12));

/*
Success
Details
Runtime: 90 ms, faster than 56.24% of JavaScript online submissions for Fizz Buzz.
Memory Usage: 44.2 MB, less than 78.30% of JavaScript online submissions for Fizz Buzz.
https://leetcode.com/submissions/detail/668572198/
*/