/* forEach */
// ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Arrays are often named using plural nouns like fruits
const fruits = ['apple', 'pear', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// The forEach callback method will call this function for each element in the array.
// When the function is called, the next array element is passed in as an argument.

// fruits.forEach(fruit => {
//     console.log(fruit);
// });

fruits.forEach(fruit => console.log(fruit));
//------------------------------------------------------------------------------------------------------//
let capitalizedFruits = [];
fruits.forEach(fruit => {
    let capitalizedFruit = fruit.toUpperCase();
    capitalizedFruits.push(capitalizedFruit);
});
console.log(capitalizedFruits); // => [ 'APPLE', 'PEAR', 'CHERRY' ]
//------------------------------------------------------------------------------------------------------//
const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
let total = 0;
prices.forEach(price => {
    total += price;
});
console.log(total);
//------------------------------------------------------------------------------------------------------//
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];// Result: ['Selma', 'Sam', 'Sharon'];
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
let sNames = [];
names.forEach(name => {
    if (name.charAt(0) === 'S') {
        sNames.push(name);
    }
});
console.log(sNames); // => [ 'Selma', 'Sam', 'Sharon' ]
//------------------------------------------------------------------------------------------------------//
// Use index
names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
//------------------------------------------------------------------------------------------------------//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // times10 should be: [10,20,30,40,50,60,70,80,90,100]
let times10 = [];
numbers.forEach(number => times10.push(number * 10));
console.log(times10);
//------------------------------------------------------------------------------------------------------//
/* filter */
// ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// const sNames_ = names.filter(name => {
//     if (name.charAt(0) === 'S') {
//         return true
//     }
//     else return false;
// });
// Can be simplified into:
const sNames_ = names.filter(name => (name.charAt(0) === 'S'));
console.log(sNames_);
// or
// If I have other arrays to filter, I can reuse this variable instead of typing this same function out 
// over and over again.
// const startWithS = name.charAt(0) === 'S';
// const sNames_ = name.filter(startWithS);
//------------------------------------------------------------------------------------------------------//
const no3 = numbers.filter(number => number !== 3);
console.log(no3);
const evens = numbers.filter(number => number % 2 === 0);
console.log(evens);
//------------------------------------------------------------------------------------------------------//
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter(year => year <= 2000);
console.log(century20); // => [ 1989, 2000, 1999, 1973 ]
//------------------------------------------------------------------------------------------------------//
/* map */
// ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const strings = ['1', '2', '3', '4', '5'];
const numbers_ = strings.map(string => parseInt(string, 10));
console.log(numbers_); // => [ 1, 2, 3, 4, 5 ]
//------------------------------------------------------------------------------------------------------//
const capitalizedFruits_ = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits_);
//------------------------------------------------------------------------------------------------------//
const prices_ = [5, 4.23, 6.4, 8.09, 3.20]; // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
const priceToDollars = price => `$${price.toFixed(2)}`;
const displayPrices = prices_.map(priceToDollars);
console.log(displayPrices); // => [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
//------------------------------------------------------------------------------------------------------//
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays = daysOfWeek.map(day => day.substring(0, 3));
console.log(abbreviatedDays); // => ['Sun', 'Mon','Tue', 'Wed', 'Thu', 'Fri','Sat']
//------------------------------------------------------------------------------------------------------//
/* reduce */
// ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
var total_ = [0, 1, 2, 3].reduce((acc, cur) => acc + cur);
console.log(total_); // => 6
//------------------------------------------------------------------------------------------------------//
const total_price = prices.reduce((sum, price) => sum + price, 0);
console.log(total_price);
//------------------------------------------------------------------------------------------------------//
// count start with G, result: 4
const names_ = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const gNameCount = names_.reduce((count, name) => {
    if (name[0] === 'G') return count + 1;
    else return count;
}, 0);
console.log(gNameCount);
//------------------------------------------------------------------------------------------------------//
const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678",
    "(212) 123-4567", "(416) 123-4567"];
let numberOf503 = phoneNumbers.reduce((count, phone) => {
    if (phone.substring(1, 4) === '503') return count + 1;
    else return count;
}, 0);
console.log(numberOf503); // => 3
//------------------------------------------------------------------------------------------------------//
const arr = [1, 2, 3];
const smallerArr = arr.filter(number => number !== 2);
const increamentedArr = smallerArr.map(number => number + 1);
// or const smallerArr = arr.filter(number => number !== 2).map(number => number + 1);
console.log(increamentedArr); // => [2,4]
// Easy to read or modify like this:
// const smallerArr = arr
//     .filter(number => number !== 2)
//     .map(number => number + 1);
//------------------------------------------------------------------------------------------------------//
const numbers_10 = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];
const unique = numbers_10.filter(function (number, index, array) {
    return index === array.indexOf(number); // return numebers_10[index]
});
console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//------------------------------------------------------------------------------------------------------//
const years_ = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears = years_
    .filter(year => year >= 2001) // 21st century
    .map(year => `${year} A.D.`);
console.log(displayYears);
//------------------------------------------------------------------------------------------------------//
// Working with objects in array
const users = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 32 },
    { name: 'Beatrice', age: 42 }
];
// remove the Samir in users name
const newUsersArray = users.filter(user => user.name !== 'Samir');
console.log(newUsersArray);
// Samir is 27 years old.
const olderArray = users.map(user => `${user.name} is ${user.age} years old.`);
console.log(olderArray);
// { Samir: 27, Angela: 32, Beatrice: 42 }
const userObject = users.reduce((userObject, user) => {
    userObject[user.name] = user.age;
    return userObject; //The first time through, reduce has this initial Object that it uses for usersObject.
    //And then the second time through it doesn't have anything, because we haven't 
    //returned anything from our callback.
}, {});
console.log(userObject);
//------------------------------------------------------------------------------------------------------//
const authors = [
    { firstName: "Beatrix", lastName: "Potter" },
    { firstName: "Ann", lastName: "Martin" },
    { firstName: "Beverly", lastName: "Cleary" },
    { firstName: "Roald", lastName: "Dahl" },
    { firstName: "Lewis", lastName: "Carroll" }
];
// fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// use reduce
let fullAuthorNames = authors.reduce((fullAuthorNames, author, index) => {
    fullAuthorNames[index] = `${author.firstName} ${author.lastName}`;
    return fullAuthorNames;
}, []);
// or using map
let fullAuthorNames_ = authors.map((author) => `${author.firstName} ${author.lastName}`);
console.log(fullAuthorNames_);
//------------------------------------------------------------------------------------------------------//
// Combining filter() and map()
const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];
const users_ = userNames
    .filter(userName => userName.charAt(0) === 'S')
    .map(userName => ({ name: userName })); // function doesn't know this is an object literal, 
// which also uses curly braces, it needs to surround this object with parenthesis.
console.log(users_);
//------------------------------------------------------------------------------------------------------//
const users__ = [
    { name: 'Samir', age: 27 },
    { name: 'Angela', age: 33 },
    { name: 'Beatrice', age: 42 },
    { name: 'Shaniqua', age: 30 },
    { name: 'Marvin', age: 23 },
    { name: 'Sean', age: 47 }
];
// 30 years old above, result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
const above30 = users__
    .filter(user => user.age >= 30)
    .map(user => user.name);
console.log(above30);
//------------------------------------------------------------------------------------------------------//
const todos = [
    { todo: 'Buy apples', done: false },
    { todo: 'Wash car', done: true },
    { todo: 'Write web app', done: false },
    { todo: 'Read MDN page on JavaScript arrays', done: true },
    { todo: 'Call mom', done: false }
];
// unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
let unfinishedTasks = todos
    .filter(todo => todo.done === false)
    .map(todo => todo.todo);
console.log(unfinishedTasks);
//------------------------------------------------------------------------------------------------------//
// Combining filter() and reduce()
// Find the highest price of all the products under $10
const products = [
    { name: 'hard drive', price: 59.99 },
    { name: 'lighbulbs', price: 2.59 },
    { name: 'paper towels', price: 6.99 },
    { name: 'flatscreen monitor', price: 159.99 },
    { name: 'cable ties', price: 19.99 },
    { name: 'ballpoint pens', price: 4.49 }
];
// Result: { name: 'paper towels', price: 6.99 }
let product = products
    .filter(product => product.price < 10)
    .reduce((highest, product) => {
        if (highest.price > product.price) return highest;
        return product;
    });
console.log(product);
//------------------------------------------------------------------------------------------------------//
// return a total of all products over $10 using filter and reduce.
let total__ = products
    .filter(product => product.price > 10)
    .reduce((sum, product) => sum + product.price, 0)
    .toFixed(2);
console.log(total__); // => 261.94
//------------------------------------------------------------------------------------------------------//
const purchaseItems = [
    { name: 'apples', dept: 'groceries', price: 2.49 },
    { name: 'bread', dept: 'groceries', price: 2.99 },
    { name: 'batteries', dept: 'electronics', price: 5.80 },
    { name: 'eggs', dept: 'groceries', price: 3.99 },
    { name: 't-shirts', dept: 'apparel', price: 9.99 }
];
let groceryTotal = purchaseItems
    .filter(purchaseItem => purchaseItem.dept === 'groceries')
    .reduce((sum, purchaseItem) => sum += purchaseItem.price, 0);
console.log(groceryTotal); // => 9.47
//------------------------------------------------------------------------------------------------------//
// Nested Data and Additional Exploration
const movies = [
    ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
    ['Finding Dory'],
    ['Jaws', 'On the Waterfront']
]
// Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']
// spread ref: https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
let flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);
// const flatMovies = movies
//   .reduce((arr, innerMovies) => arr.concat(innerMovies), []);
console.log(flatMovies);
//------------------------------------------------------------------------------------------------------//
const users___ = [
    {
        name: 'Samir', age: 27,
        favoriteBooks: [
            { title: 'The Iliad' },
            { title: 'The Brothers Karamazov' }]
    },
    {
        name: 'Angela', age: 33,
        favoriteBooks: [
            { title: 'Tenth of December' },
            { title: 'Cloud Atlas' },
            { title: 'One Hundred Years of Solitude' }
        ]
    },
    {
        name: 'Beatrice', age: 42,
        favoriteBooks: [
            { title: 'Candide' }
        ]
    }
];
// Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide'];
const books = users___
    .map(user => user.favoriteBooks
        .map(book => book.title))
    .reduce((arr, titles) => [...arr, ...titles], []);
console.log(books);
//------------------------------------------------------------------------------------------------------//
const customerNames = [
    ["John", "Sandy", "Tyrone", "Elizabeth", "Penny"],
    ["Barry", "Wanda", "Jamal", "Hayden"],
    ["Portia", "Pam", "Philip"]
];
// flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
let flattenedCustomerNames = customerNames.reduce((arr, names) => [...arr, ...names], []);
console.log(flattenedCustomerNames);
//------------------------------------------------------------------------------------------------------//
const customers = [
    {
        name: "Tyrone", personal: {
            age: 33,
            hobbies: ["Bicycling", "Camping"]
        }
    },
    {
        name: "Elizabeth", personal: {
            age: 25,
            hobbies: ["Guitar", "Reading", "Gardening"]
        }
    },
    {
        name: "Penny", personal: {
            age: 36,
            hobbies: ["Comics", "Chess", "Legos"]
        }
    }
];
// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
let hobbies = customers.map(customer => customer.personal.hobbies)
    .reduce((arr, hobbies) => [...arr, ...hobbies], []);
console.log(hobbies);

