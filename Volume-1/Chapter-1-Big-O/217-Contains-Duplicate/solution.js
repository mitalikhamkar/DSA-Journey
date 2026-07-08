/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const freq=nums.reduce((acc,value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    },{});
    for(let key in freq) {
        if(freq[key] > 1) {
            return true;
        }
    }
    return false;
};
