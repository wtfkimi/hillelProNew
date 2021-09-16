const users = [
  {
    name: 'Bob',
    lastName: "Jesus",
    age: 27,
    address:{
      country:'USA',
      city:'LA'
    },
    marks:[2,3,5,4,2,3,1,5]
  },
  {
    name: 'July',
    lastName: "Cry",
    age: 21,
    address:{
      country:'Ukraine',
      city:'Kiev'
    },
    marks:[4,4,5,4,3,4,3,5]
  },
  {
    name: 'Monya',
    lastName: "Kolokolov",
    age: 15,
    address:{
      country:'Ukraine',
      city:'Odessa'
    },
    marks:[5,1,5,1,5,1,5,1]
  },
  {
    name: 'Vsevolod',
    age: 19,
    address:{
      country:'Ukraine',
      city:'Lviv'
    },
    marks:[3,4,5,3,1,2,4,6]
  },
];

//1...
const isNotAdult = users.find(user => user.age < 18); // arrow function implemented in hw4;

//2...
const foreignStudent = users.filter(user => user.address.country !== "Ukraine"); // arrow function implemented in hw4;

//3...
const isAdult = users.map(user => {
  user.isAdult = user.age >= 18; // non need ternary operator but it can be used: user age >= 18 ? true : false
  return user
});

//4...

const average0 = (users.reduce((prev, curr, index, arr) => {
  prev.push(...curr.marks); // Spread used in hw4
  if (arr[arr.length - 1] === curr){
    let summ = prev.reduce((prev, curr) => prev + curr);
    prev = summ / prev.length
    return prev
  }
  return prev;

}, []))

const average1 = users.reduce((prev, curr, index, arr) => {
  prev += ((curr.marks.reduce((acc, el) => acc + el) / curr.marks.length)) / arr.length;
  return prev
}, 0)

const av = users.reduce((acc, el) => (acc += el.marks.reduce((a, e) => (a += e)) / el.marks.length), 0) / users.length;
// *** some error in your code, which you implemented, you sad, that accumulator can't be used in arrow function :)

//5...
const addresses0 = users.reduce((prev, curr, index) => {
  prev.countries.push(curr.address.country ? curr.address.country : `Country is not defined in user by index ${index}`); // ternary operator implemented in hw4
  prev.cities.push(curr.address.city ? curr.address.city : `City is not defined in user by index ${index}`); // ternary operator implemented in hw4
  return prev;
}, {countries: [], cities: []});

//Unique addresses
let unique = {
  countries: addresses0.countries.filter((e, i, arr) => arr.lastIndexOf(e) === i), // arrow function implemented in hw4;
  cities: addresses0.cities.filter((e, i, arr) => arr.lastIndexOf(e) === i) // arrow function implemented in hw4;
}


//Function 1;
function setLastName(users) {
  return users.reduce((acc, el) => {
    acc.push({firstName: el.name, lastName: el.lastName ? el.lastName : "Doe"})
    return acc;
  }, [])
}

console.log(setLastName(users));

let newUsers = [
  {
    firstName: "Andrew",
    lastName: "Kwasnevskiy",
  },
  {
    firstName: "Elena",
    lastName: "Kniazieva"
  },
  {
    firstName: "Viacheslav",
    lastName: "Bondariev",
    age: new Date().getFullYear() - 1998
  },
  {
    firstName: "Vladyslav",
    lastName: "Bondariev",
    age: new Date().getFullYear() - 1998,
    dateOfBirth: "16/04/1998"
  },
  {
    firstName: "Olga",
    lastName: "Kniazieva",
    age: new Date().getFullYear() - 1999,
    dateOfBirth: "21/12/1999"
  }
]


// Function 2;

function getUsersMoreThanTwoProperty(newUsers) {
  return newUsers.reduce((acc, el) => {
   Object.keys(el).length > 2 ? acc.push(el) : null; // ternary operator
   return acc;
  }, [])
}

console.log(getUsersMoreThanTwoProperty(newUsers));


//Function 3;


function propertyStringAndNumber (users) {
  return users.reduce((acc, el) => {
    let isStringAndNumber = [];
    for (let [, value] of Object.entries(el)) { // Destructuring with Object.entries()
      isStringAndNumber.push(typeof value)
    }
    isStringAndNumber.includes("string") && isStringAndNumber.includes("number") ? acc.push(el) : null;
    return acc;
  }, [])
}

console.log(propertyStringAndNumber(newUsers));

