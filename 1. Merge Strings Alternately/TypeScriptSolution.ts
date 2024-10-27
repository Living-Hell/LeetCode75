function mergeAlternately(word1: string, word2: string): string {
    let res : string = "";
    let ind : number = 0;
    for(; ind<word1.length && ind<word2.length; ind++){
        res += word1[ind] + word2[ind];
    }
    res += word1.slice(ind);
    res += word2.slice(ind);
    return res;
};