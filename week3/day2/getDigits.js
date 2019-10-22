// Get Digits

// Create a JavaScript function that given a string, 
//returns the integer made from the string’s digits. 
//Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) { // "0s1a3y5w7h9a2t4?6!8?0"
    var result = [];
    for(var c of str) {
        if(isNaN(c) === false) {
            result.push(c);
        }
    }
    return parseInt(result.join(""));
    // should return 1357924680
}

var result = getDigits("0s1a3y5w7h9a2t4?6!8?0");