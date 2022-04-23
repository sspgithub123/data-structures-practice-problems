/* 1. Write a program in the following steps
a. Generates 10 Random 3 Digit number.
b. Store this random numbers into a array.
c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
*/

var arr = [];
var largest = 0;
var secondLargNum = 0;
for (var i=1; i<=5; i++){
    var num = Math.floor(Math.random()*(999-100+1)+100);
    arr.push(num);
    if(num > largest){
        largest = num;
    }
}
for(let i = 0; i < arr.length; i++){
    if(secondLargNum < arr[i] && arr[i] != largest){
        secondLargNum = arr[i];
    }
}
console.log(arr, secondLargNum);