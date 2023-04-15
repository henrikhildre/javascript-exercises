const reverseString = function(str) {
    let reverseStr = "";
//create a for loop which loops through str from the end
    for (let index = str.length; index >= 0; index--){
        let char = str.charAt(index);
        console.log(str.charAt(index));
        reverseStr += char;
        //the loop puts the last character of str at the beginning of reverseStr
    };
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
