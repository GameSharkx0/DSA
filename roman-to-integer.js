/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.
/*
Take first and next index and compare
if first < next, last - first + repeat
If there is no current and next index, + index

option to store data is a hashmap of character codes so it is O(1) time to retrieve the data.
*/

let romanHashmap = new Map([ //Hashmap has O(1) lookup time and also O(1) space as it will not grow beyond this set of key value pairings
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000]
])

let romanToInt = (s) => { //O(N) Time complexity as we loop through eqach char of string of unknown length) O(1) space due to definite known value of hashmap and no other structures increase this beyond O(1);
    sum = 0;
    currentNode = 0;
    nextNode = currentNode + 1;
    while (currentNode < s.length){ // O(N)
        position1 = romanHashmap.get(s[currentNode]);
        position2 = romanHashmap.get(s[nextNode]);
        if (position1 > position2 || position1 === position2 || currentNode >= s.length - 1){ //O(1)
            sum += position1;
            currentNode++;
        } else if (position1 < position2) { // O(1)
            sum += (position2 - position1);
            currentNode += 2;
        }
        nextNode = currentNode+1;
    }
    return sum;
}
console.log(romanToInt("LVIII"));

50+5+1+2+3

/*
Runtime: 100 ms, faster than 99.78% of JavaScript online submissions for Roman to Integer.
Memory Usage: 46.1 MB, less than 97.93% of JavaScript online submissions for Roman to Integer.
*/