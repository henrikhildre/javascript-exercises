
// create a new array with added yearOfDeath

const findTheOldest = function(array){
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

const getAge = function(birth, death){
    if(!death){
        death = (new Date()).getFullYear();
    };
    return death - birth;
};

// const findTheOldest = function(people)
    //create new array with added yearOfDeath for those missing



    // function forEach(item) {
    //     if(item.yearOfDeath == undefined) {
    //         item.yearOfDeath = 2023;
    //     };
    //     item.age = item.yearOfDeath - item.yearOfBirth;

    // };

    // const newArray = forEach(people);


// console.log(newArray);
    //let newArray = people.map(if(people.yearOfDeath == undefined) yearofDeath = 2023);
    //calculate age of all people in a loop
    //define variable which stores the array num of the oldest,
    //replacing if they're older
    //return their position in thenqueue

// Do not edit below this line
module.exports = findTheOldest;
