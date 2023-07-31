console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);


// 1.a. TODO: Make an array with some favorite foods
// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above

let myFavoriteFoods = [ 'chicken', 'rice', 'broccoli', 'pizza', 'steak', 'salmon', 'cookies', 'sour patch kids' ];
console.log( 'My favorite foods are: ', myFavoriteFoods );



// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);



// 2.a. TODO: Log to the console the number of foods in your array
console.log( 'Number of foods: ', myFavoriteFoods );



// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log( 'Second animal is: ', animalArray[1] );

// 3.b. TODO: Log the last animal in the array using it's array index 
// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log( 'The last animal is: ', animalArray[animalArray.length-1] );



// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
myFavoriteFoods.push( 'yogurt' );
console.log( 'Added a food item at the end, ', myFavoriteFoods );



// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = myFavoriteFoods.pop();
console.log( 'Removed the last food item ', removedFood );
console.log( 'The food is now: ', myFavoriteFoods );



// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
myFavoriteFoods.unshift( 'Cheeseburger' );
console.log( 'Added a food item to beginning: ', myFavoriteFoods );



// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = myFavoriteFoods.shift();
console.log( 'Removed the first food item ', removedFood );
console.log( 'The food list is now: ', myFavoriteFoods );

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
let secondFoodItem = 'Mac n Cheese';
let newMyFavoriteFoods = myFavoriteFoods.slice( 0,1 ).concat( secondFoodItem, myFavoriteFoods.slice(2) );

console.log( 'Removed ', myFavoriteFoods[1] );
console.log( 'Replaced the second food item. New list is: ', newMyFavoriteFoods );

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
myFavoriteFoods.sort( (a,b) => b.localeCompare(a) );
console.log( 'Sorted original food list in reverse alphabetical order. The list is now: ', myFavoriteFoods );

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
let string = myFavoriteFoods.reduce((acc, item, index ) => {
    if ( index === 0 ) {
        return item;
    } else if (index === myFavoriteFoods.length-1 ) {
        return acc + ' and ' + item;
    } else {
        return acc + ' and ' + item;
    }
}, '');

console.log( 'Converted array to string. The string reads: ', string );



// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']


