/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++) {
        let str=nums[i].toString();
        let digit=str.length;
        if(digit %2 === 0) {
            count++;
        } 
    }
    return count;
};
