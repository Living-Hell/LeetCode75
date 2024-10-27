/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "", i=0;
    for(; i<word1.length && i<word2.length; i++){
        res += word1[i];
        res += word2[i];
    }
    res += word1.substring(i);
    res += word2.substring(i);
    return res;
};