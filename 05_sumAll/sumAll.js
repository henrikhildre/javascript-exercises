const sumAll = function(a,b) {
    console.log("The numbers are " + a + " and " + b);
    let sum = 0;
//    if (a > b) {
//        console.log(b + " is smaller than " + a);
//        sum = 'ERROR';
//        console.log(sum);
//        return sum;
//    };
    console.log("A is a number?" + !Number.isNaN(a) + ". And is B a number? " + !Number.isNaN(b));
    if (a < 0 || typeof a !== 'number' || b < 0 || typeof b !== 'number'){
        console.log("Returning error");
        return 'ERROR';
    };
    let smallNum;
    let largeNum;
    if (a > b){
        console.log("A is biggest.");
        smallNum = b;
        largeNum = a;
        console.log("smallNum is " + smallNum + " and largeNum is " + largeNum);
    } else {
        console.log("B is biggest.");
        smallNum = a;
        largeNum = b;
        console.log("smallNum is " + smallNum + " and largeNum is " + largeNum);
    };
    console.log("Done with if");
    
    for (let i = smallNum; i <= largeNum; i++) {
        console.log("Starting at the top. The counter is on " + i);
        sum += i;
        console.log("The sum is at " + sum);
    };
    console.log("That's the answer. " + sum + ".");
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
