const users = [
    {
        name: 'Bob',
        age: 27,
        address:{
            country:'USA',
            city:'LA'
        },
        marks:[2,3,5,4,2,3,1,5]
    },
    {
        name: 'July',
        age: 21,
        address:{
            country:'Ukraine',
            city:'Kiev'
        },
        marks:[4,4,5,4,3,4,3,5]
    },
    {
        name: 'Monya',
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
const isNotAdult = users.find(user => user.age < 18);

//2...
const foreignStudent = users.filter(user => user.address.country !== "Ukraine");

//3...
const isAdult = users.map(user => {
    user.isAdult = user.age >= 18;
    return user
});

//4...

const average = (users.reduce((prev, curr, index, arr) => {
    prev.push(...curr.marks);
    if (arr[arr.length - 1] === curr){
        let summ = prev.reduce((prev, curr) => prev + curr);
        prev = summ / prev.length
        return prev
    }
    return prev;

}, []))

//5...
const addresses0 = users.reduce((prev, curr, index) => {
    prev.countries.push(curr.address.country ? curr.address.country : `Country is not defined in user by index ${index}`);
    prev.cities.push(curr.address.city ? curr.address.city : `City is not defined in user by index ${index}`);
    return prev;
}, {countries: [], cities: []});

//Unique addresses
let unique = {
    countries: addresses0.countries.filter((e, i, arr) => arr.lastIndexOf(e) === i),
    cities: addresses0.cities.filter((e, i, arr) => arr.lastIndexOf(e) === i)
}
