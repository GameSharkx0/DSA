/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/*
First thought, it's possible to nest for loops and check all values, but can it be done in under n^2 considering we have an array parameter with an unknown size.

beyond that we have an array with strings of unknown length.

One loop for the array and one for the strings.

pick an element in the array
pull the value
compare against the rest

one opimization could be using a trie or continuously holding a map of what characters have been noted as the longest prefix and then checking and removing items from the hashmap that don't exist.
*/

// O(N^2) time complexity due to nested for loops of unknown size O(N) space complexity due to hashmap of unknown size
let longestCommonPrefix = (strs) => { 
    let arrayLength = strs.length;
    let longest = "";
    //Initiialize hashmap as data structure to track common prefixes O(N) space
    
    // O(1) If there is only one value in the array, return it as the longest common prefix.
    let prefixMap = new Map(); 
    if (arrayLength === 1){ 
        longest = strs[0];
        return longest;
    }
    //Determine the number of words in the array O(N^2) time due to nested for
    for (i = 0; i < arrayLength; i++){  
        //Determines length of the word to loop over each char O(N) time J starts at one to slice first char and not ""
        for (j = 1; j <= strs[i].length; j++){ 
            //O(1) check if the word prefix has been found before
            if (prefixMap.get(strs[i].slice(0, j)) === undefined && i == 0 && strs[i].slice(0, j)){ 
                prefixMap.set(strs[i].slice(0, j), 1);    
            // O(1) optimization to cancel loop as soon as deviation is found. We're only looking for the largest common prefixes among all strings. so any array with a prefix that does not match the first array can stop being looped through.
            } else if (prefixMap.get(strs[i].slice(0, j)) === undefined && i > 0){ 
                break; 
            // O(1) condition to go increment the value of a key which will be used to determine if there is a commonality between all strings in terms of prefix
            } else {
                prefixMap.set(strs[i].slice(0, j), prefixMap.get(strs[i].slice(0, j)) + 1); 
                // O(1) change the longest prefix if the number of times this prefix appeared in the strs array matches the length of the strs array.
                if (strs[i].slice(0, j).length > longest.length && prefixMap.get(strs[i].slice(0, j)) === arrayLength){ 
                    longest = strs[i].slice(0, j);
                 }
            }
        }
    }
    return longest;
}

let testArray = ["a", "ab"];
console.log(longestCommonPrefix(testArray));