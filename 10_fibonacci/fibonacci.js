const fibonacci = function(num) {
    let num1 = 1; //the highest number in the sequence
    let num2 = 1; //the second highest number in the sequence
    let numHold = 0;
    if (num < 0) return 'OOPS';
    for (let i = 1; i < num; i++) {
        console.log("i: " + i + ". numHold: " + numHold + ". num1: " + num1 + ". num2: " + num2);
        numHold = num1;
        console.log("Updated numHold to " + numHold)
        num1 += num2;
        num2 = numHold;
    };
    console.log("num1: " + num1 + ". num2: " + num2 + ".");
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
