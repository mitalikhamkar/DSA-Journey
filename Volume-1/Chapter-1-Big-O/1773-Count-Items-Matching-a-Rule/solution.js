/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let index;
    let rulekey;
    let ruleIndex;
    if (ruleKey === "type") {
        index = 0;
    } else if (ruleKey === "color") {
        index = 1;
    } else if (ruleKey === "name") {
        index = 2;
    }
    let count=0;
    for (let i=0;i<items.length;i++) {
        if(items[i][index] === ruleValue) {
            count++;
        }
    }
    return count;
};
