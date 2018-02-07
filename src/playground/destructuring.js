const person = {
  name: 'Jakub',
  age: 29,
  location: {
    city: 'Sopot',
	temp: -2
  }
};

const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

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