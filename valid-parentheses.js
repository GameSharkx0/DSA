/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
*/

/*
First thought
From what i've sen from other problems I definitely want to try to do this without an O(N) structure.
Can use a hashmap counter which will be O(1) space due to the hashmap being of finite size
if the closing braces number exceeds the opening brace statements then the string is invalid.
breaking the loop immediately after this case will reduce time and handle the case where braces are equal but like }{

    (({{}{[]}}()))

if by the end of the loop the opening brace count exceeds the closing brace statements the string is invalid.
if all braces are not equal the statement is invalid.
Not sure if there's a way to do this in under O(N) time.
*/

/*
Optimization while implementing
creating two O(1) arrays to use for logic comparisons will prevent needing to explicitly
*/

/*
Second thought -- while implementing
We need to define the cases in which we know the string is false again
if the first character while the string is true is a closing key it is false
if the last character is an opening key it is false
*/

/*
After initial failed submissions
Failed the test case where input is "([)]" I assume only the valid strings will not have interlocking brackets
we can log last opening in the bracket map and decrement it every time a bracket is opened or closed
*/

/*
to handle the issue of nested parenthesis an array of opening braces and pop them off when closings are made.
*/

/*
Final thoughts
had a lot of issues with getting this to work and took about 2 hours.
tracking through hashmap and attempting to make comparisons did not work as I did not have a way to track if the openings were closed successfully.

my initial method only tracked if the start, end, and number of openings and closings matched.

Swapping to using an array stack worked great as I could push values and check each end bracket against the last opened bracket.

pushiung and popping had a great time efficiency but my use of structures tanked my memory usage.
*/

let isValid = (s) => { //O(N)
    let lastOpen = [];
    let isValidString = true;
    let openKeys = ["(", "{", "["];
    let closingKeys = [")", "}", "]"];
    let bracketMap = new Map([
        ["(", 0],
        ["{", 1],
        ["[", 2],
        [")", 0],
        ["}", 1],
        ["]", 2],
    ]);
    for (i = 0; i < s.length; i++){ // O(N) Time due to unknown length of string O(N) space due to array of unknown size
        // if (!isValidString){
        //     return isValidString;
        // }
        firstIter = true;
        if (firstIter){ // small optimization to not do two checks every loop
            if (openKeys.includes(s[s.length - 1])){ // O(1) base case
                isValidString = false;
                return isValidString;
            }  
            if (closingKeys.includes(s[0])){ // O(1) base case
                isValidString = false;
                return isValidString;
            }
            firstIter = false;
        }
        if (openKeys.includes(s[i])){ //push item on stack
            lastOpen.push(s[i]); //track the number and type of open brackets
        }
        else if (closingKeys.includes(s[i])){ //if a closing bracket
            if (bracketMap.get(s[i]) === bracketMap.get(lastOpen[lastOpen.length-1])){ //if the bracket index matches the opening index
               lastOpen.pop(); //pop the open index as it has been closed
           } else {
               return false;
           }
        }
        }
    return lastOpen[0] == null; // the condition is true if all open brackets have been closed properly.
}

/*
Runtime: 70 ms, faster than 75.49% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 43.4 MB, less than 14.79% of JavaScript online submissions for Valid Parentheses.
*/