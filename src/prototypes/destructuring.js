/* OBJECT DESTRUCTURING
const person = {
    name: 'Ryan Narwhal',
    age: 26,
    location: {
        city: 'San Francisco',
        temp: 61
    }
};

const { name = 'Anonymous', age  } = person;
console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It's ${city} in ${temperature}. So cold!`);
}

const book = {
    title: 'Hard-Boiled Wonderland and The End Of The World',
    author: 'Haruki Murakami',
    publisher: {
        name: 'Vintage'
    }
}

const { name : publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);
*/


// ARRAY DESTRUCTURING
const address = ['1299 S Juniper Street', 'San Francisco', 'California', '19147'];
const [ , city, state,  ] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Cortado', '$2.00', '2.50', '$2.75'];
const [coffeeType, , medium] = item;
console.log(`A medium ${coffeeType} costs ${medium}`);