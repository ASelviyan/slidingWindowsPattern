# Learning about the Sliding Window Pattern
- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of a data in an array/string ect.

#### Problem #1: Max SubArray Sum 
- Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

#### Problem #2: Min SubArray Length
- Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
- This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

#### Problem #3: Find Longest Substring
- Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.