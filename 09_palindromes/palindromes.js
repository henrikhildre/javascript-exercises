const palindromes = function (str) {
    let string = str.toLowerCase().replaceAll(/[!., ]/g,'');
    let string2 = string.split("").reverse().join("");
    return string == string2;
};

// Do not edit below this line
module.exports = palindromes;
