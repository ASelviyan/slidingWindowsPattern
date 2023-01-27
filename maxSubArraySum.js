// Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

//Naive Approach 
//Has a time complexity of O(N^2)
function maxSubArraySum(array, num){
    if(num > array.length){
        return null
    }

    //start the maxSum at negative infinity so that if the whole array is negative numbers then we can account to that
    let maxSum = -Infinity
    //iterate through the array. We add the minus num to arr.length so that the i stops "num" numbers before the array ends so that we don't add more digits that don't exist. When we tell it to add the next 'num' digits together 
    for(let i = 0; i < array.length - num; i++){
        //creating a variable of sum here will keep the value that are being added up until the next iteration 
        let sum = 0     
        //iterate through the next "num" numbers that was inputted 
        for (let j = i; j < i+num; j++) {
            //add up the 'num' into sum
            sum += array[j]
            //if the sum is bigger then maxSum then max sum the new maxSum
            if(sum > maxSum){
                maxSum = sum
            }
        }
    
    }
    //return the maxSum
    return maxSum 
}
//so the function start at 1 for the first iteration then goes to the next for loop and iterates from the 1 to 2 to 5 to 2, adding up all of those numbers up to sum. then is checks if sum is bigger then maxSum. Which it is so it makes maxSum 10. Then it does the iteration again but this time starting at index 1 which is 2. then add up the next 4 numbers which equals 17 nad makes that the maxSum. Keeps going until it cant add anymore numbers in the array. Then returns the maxSum which is 17
// console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) //output 17

//Refactored Solution 
//Has a time complexity of O(N)
function maxSubArraySumRefactored(arr, n) {
    let maxSum = 0;
    let tempSum = 0 
    if(n > arr.length){
        return null
    }

    //this for loop creates the initial maxSum. So it takes the first "n" numbers in the array and add them up.
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }

    //then it takes the initial maxSum and puts it into temp sum
    tempSum = maxSum

    //this for loop starts "n" numbers in the array and then add the next index in the array to tempSum and subtracts the first "n'th" index.
    //for example i starts at index 3 which is 2 and then takes the temp variable which is 17 and takes the arr[i - num] index away from it so 17 - 2 = 15 and then add the next index in the array to the tempSum so 15 + 3 = 18. keeps doing that until it gets to the end of the array.
    for(let i = n; i < arr.length; i++){
        //here we take tempSum then subtract the number before the i and then add the next number after "n" numbers 
        //ex for the first loop: tempSum = 17 - arr[3 - 3] + 3 ->  17 - 2 + 3 -> 15 + 3 -> 18 
        tempSum = tempSum - arr[i - n] + arr[i]
        console.log("temp", tempSum)
        //if tempSum is bigger then maxSum then tempSum us assigned to maxSum
       if(tempSum > maxSum){
        maxSum = tempSum
        
       }
    }
    //finally we return the maxSum
    return maxSum
}

console.log(maxSubArraySumRefactored([2,6,9,3,1,8,5,6,3], 3))