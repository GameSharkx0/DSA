/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

    For example, 121 is a palindrome while 123 is not.

    Example: isPalindromeNumber(10) === false
    Example: isPalindromeNumber(121) === true
    Example: isPalindromeNumber(-121) === false
*/

/*
Take the number
if number < 0 return false
mod 10 into two arrays
i = start of array
n = end of array
if array[i] !=== array[n] return false
loop until both meet or cross.
*/

let isPalindromeNumber = (number) => { //O(N) Time complexity due to loops of unknown size O(N) space due to array of unknown size
    array = [];
    if (number < 0){ //Base case, if the number is negative it cannot be a palindrome.
        return false;
    }
    while (number >= 1){ //if the number ever dips below 1 there are no more numbers to check
        modResult = number % 10; //grab the last digit of the number
        number = Math.floor(number/10); //integer math to drop the last digit by utilizing floor.
        array.push(modResult); // push the result to the array
    }
    i= 0; //points to start of array
    j= array.length - 1; //points to end of array
    while (i < j){ 
        if (array[i] !== array[j]){ //if the start and end positions don't match it's not a palindrome
            return false;
        }
        i++;
        j--;
    }
    return true; //if everything matched return true;
}

console.log(isPalindromeNumber(01));
console.log(isPalindromeNumber(121121));
console.log(isPalindromeNumber(-121));

/*
Success
Details
Runtime: 275 ms, faster than 39.98% of JavaScript online submissions for Palindrome Number.
Memory Usage: 50.2 MB, less than 91.96% of JavaScript online submissions for Palindrome Number.
*/