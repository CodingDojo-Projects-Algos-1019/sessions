function displayArrayValues(arr, i=0) { // arr: [2,4,6,8], i:3
    // iterate array, display each value
    console.log(arr[i]);

    if(i < arr.length - 1) {
        displayArrayValues(arr, i+1);
    }
}

function sumOne20(num = 1) {
    if(num < 20) {
        return sumOne20(num+1) + num;
    }
    return 20;
    // return the sum of all array values
}

// 5 (1+2+3+4+5)
function sigma(num) { // num:3
    if(num < 2) {
        return num;
    }
    return sigma(num-1) + num;
}

sigma(2);