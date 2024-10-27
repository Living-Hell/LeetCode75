# Problem Statement:
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

# Intuition
We need to add characters alternately while we reach at end of one string and then add the remaining as a whole.

# Approach
- Taking an index variable and incrementing it as we go along till it reaches the end of one of the strings.
- We come out of the loop as soon as we reach the end of one of string.
- Then we simply add the remaining substring of the other string in our result string and return it.

# Complexity Analysis
- Time Complexity: O(max(n, m)) -> O(n)
- Space Complexity: O(m+n) -> O(n)