let isPalindrome = (string) => {//O(N) Time, O(1) Space
    let start = 0;
    let end = string.length - 1;
    if (string.length == 0) return false;
    if (string.length === 1) return true;
    while (start < end){
        if (string[start] !== string[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}


let string = "racecar";
console.log(isPalindrome(string));


