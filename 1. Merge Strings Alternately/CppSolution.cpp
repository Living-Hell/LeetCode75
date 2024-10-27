class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int i1 = 0, i2 = 0, n1 = word1.length(), n2 = word2.length();
        string res = "";
        while(i1 < n1 && i2 < n2){
            res.push_back(word1[i1++]);
            res.push_back(word2[i2++]);
        }
        if(i1<n1){
            res += word1.substr(i1);
        }
        if(i2<n2){
            res += word2.substr(i2);
        }
        return res;
    }
};