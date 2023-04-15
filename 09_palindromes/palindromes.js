const palindromes = function (str) {
    let string = str.toLowerCase().replaceAll('.,! ','');
    let string2 = string.split("").reverse().join("");
//need to do this with a regex search for the replacement 
    return string == string2;
};

// Do not edit below this line
module.exports = palindromes;
