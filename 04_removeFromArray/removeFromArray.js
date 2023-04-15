//const removeFromArray = function(array, ...theArgs) {
//    let originalArray = Array.from(array);
//    console.log("Source array: " + originalArray);

//    let toRemove = Array.from(theArgs);
 //   console.log("Arguments to remove: " + theArgs);

//    let counter = 0;
//
//    for (const removedItem of toRemove){ //go through remove list
  //      console.log("The first number I'm wanting to remove is " + removedItem);
    //    for (const search of originalArray){ //compare current item w array
      //      console.log("Starting round " + counter + " of search through array");
        //    console.log("I'm currently looking at " + search + ", and the number I'm searching with is " + removedItem);
          //  if (removedItem === search) {
            //    originalArray.splice(counter,1); //remove the current item
              //  console.log("Removed " + removedItem + " from the array");
            //};
           // counter++;
          //  console.log("The counter is now at " + counter);
       // };
      //  counter = 0;
   // };
   // console.log("Resulting array: " + originalArray);
    //return originalArray;
//};

const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // var removeFromArray = function(array, ...args) {
  //   return array.filter(val => !args.includes(val))
  // }
  //
// Do not edit below this line
module.exports = removeFromArray;
