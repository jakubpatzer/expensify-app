//
// Object destructuring
//

// const person = {
//   name: 'Jakub',
//   age: 29,
//   location: {
//     city: 'Sopot',
// 	temp: -2
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Focaults Pendulum',
//   author: 'Umberto Eco',
//   publisher: {
//     name: 'Aurum'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['Sikorskiego 15', 'Sopot', 'Pomorskie', '81-555'];
const [, city, region = 'default'] = address;
console.log(`You are in ${city} ${region}`);

// const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
// const [coffee, ,medium] = item;
// console.log(`Medium ${coffee} costs ${medium}`);
