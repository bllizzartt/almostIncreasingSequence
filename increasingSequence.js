// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.


// define let variable "sequence" equal to array 1, 3, 2, 1
let sequence = [1, 3, 2, 1];
// initiate a function 
function solution(seq) {
    const num = 0;
    // create a for loop
    //   i = 0  i <     4     0 + 1     
    for (i = 0; i < seq.length; i++)
    //  seq is an array. The brackets ([]) are used to access an element of an array.
    // i is a variable that holds a number (the index of an element in the array).
    // seq[i] is the element of the seq array at the index i.
    // seq[i-1] is the element of the seq array at the index i-1, or the element immediately before the element at index i.
    if(seq[i]<=seq[i-1]) {
        // 0 + in increments of 1
        num++;
        // if((num + 1) > 1)
        if(num>1) 
        // if the criteria above is not met then return false
        return false
        // if(1,2,3,4)
        if(seq[i]<=seq[i-2]
        &&
        seq[i+1]<=seq[i-1])
        return false
    }
    return true
}

