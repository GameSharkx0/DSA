var removeDuplicates = function(nums) {
    let j = nums.length;
    for (let i = 1; i < j; i++){
        if (nums[i] === nums[i-1]){
            nums.splice(i,1);
            i--;
            j--;
        }
    }
    return nums;
};

array = [1,1,2,2,5,5];
console.log(removeDuplicates(array));