class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i1 = 0, i2 = 0, n1 = word1.length(), n2 = word2.length();
        StringBuilder res = new StringBuilder();
        while(i1 < n1 && i2 < n2){
            res.append(word1.charAt(i1++));
            res.append(word2.charAt(i2++));
        }
        while(i1 < n1){
            res.append(word1.charAt(i1++));
        }
        while(i2 < n2){
            res.append(word2.charAt(i2++));
        }
        return res.toString();
    }
}