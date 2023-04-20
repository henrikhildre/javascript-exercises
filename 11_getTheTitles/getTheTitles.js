const getTheTitles = function(books) {
    //get add books.title to a new array
    const newArr = books.map(getTitle);
    function getTitle(title) {
        return title.title;
    };
    console.log(newArr);
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
