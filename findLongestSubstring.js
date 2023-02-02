//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(string){
    let start = 0
    //stores the char that have been seen in the string 
    let found = {}
    //counts how long the unique characters there have been 
    let count = 0

for (let i = 0; i < string.length; i++) {
    if(found[string[i]]){
        start = Math.max(start, found[string[i]]);
    }
    // index - beginning of substring + 1 (to include current in count)
    count = Math.max(count, i - start + 1);
    // store the index of the next char so as to not double count
    found[string[i]] = i + 1;
  }
  return count;
}

console.log(findLongestSubstring('thisisawesome'))