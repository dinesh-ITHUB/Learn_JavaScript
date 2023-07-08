let person = {name: 'Dinesh', age: 34};
console.log(person);

// change calue using Dot
person.age = 35;
console.log(person);

// Change Value using Bracket
//Option 1 using key
person['name'] = 'Dinesh Chinnasamy';
console.log(person);
// Option 2 using Variable by assigning the key to the Variable
let keyValue = 'name';
person[keyValue] = 'Dinesh';
console.log(person);

