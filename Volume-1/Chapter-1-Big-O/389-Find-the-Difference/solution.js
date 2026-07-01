/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let freq = {};

    for (let ch of t) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s) {
        freq[ch]--;
    }

    for (let key in freq) {
        if (freq[key] === 1) {
            return key;
        }
    }
};
