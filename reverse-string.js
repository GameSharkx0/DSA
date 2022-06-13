/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

/*
First thought is that a temporary variable can be set to hold while swaps occur.

Though it'd be great to perform the swaps in-place

Python-like syntax of s[i], s[s.length - 1] = s[s.length - 1], s[i] did not work.

to get this done in place we are just going to add the variable into the array and pop it every operation
push and pops on the array are O(1) so time and space will be great

During implementation an issue with how to push and get the format correct became a problem

A change and improvement will be to start the loop at the end of the array and push the values in reverse order and pop the values from the start.

popping values from the start will require a shift of all elements which hurts our 
*/

/*
Correction

After rereading the question the input is not a string it is an array.

O(N) runtime and inplace array sorting can be handled with a temp variable and swapping between all of them.

*/


let reverseString = s => {
    let j = s.length - 1;
    let temp;
    for (let i = 0; i < (s.length-1)/2; i++){ //O(N) Runtime / O(N/2) Space O(1)
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        j--;
    }
    return s;
}

console.log(reverseString(["H","e","l","a","o","z"]));