/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let merge=s+t;
    let arr=Array.from(merge);
        let freq=arr.reduce((acc,val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    for(let key in freq) {
        if(freq[key] === 1) {
            return key;
        }
    }
}
