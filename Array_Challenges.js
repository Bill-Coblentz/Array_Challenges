//ARRAY CHALLENGES
//Always Hungry
function alwaysHungry(arr) {
    let hungry = arr.includes("food");
    if (hungry != true) {
        console.log("I'm hungry");
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ("food")) {
            console.log("yummy");
        }
    }
}

//alwaysHungry([3.14, "food", "pie", true, "food"]);
alwaysHungry([4, 1, 5, 7, 2]);

//High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Better than average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i in arr) {
        sum += arr[i];
    }
    var avg = (sum / arr.length);
    var count = 0;
    // count how many values are greated than the average
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Array Reverse
function reverse(arr) {
    // your code here
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    let n1 = 0;
    let n2 = 1;
    for (var i = 2; i < n; i++) {
        var x = fibArr[n1] + fibArr[n2];
        fibArr.push(x);
        n1++
        n2++
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]