const user = {
    name:'Bob',
    age: 34,
    id:1,
    address:{
        city:'Odessa',
        country:'Ukraine'
    },
    books:[
        {
            name:'red one',
            id:35,
            author: {
                name:'Some Author',
                id:277
            },
            tags:['history', 'roman']
        }
    ]

}

function doClone(object) {
    let objectClone = {};
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            if ("object"===typeof object[property]){
                objectClone[property] = doClone(object[property]);
            }
            else {
                objectClone[property] = object[property];
            }
        }
    }
    return objectClone;
}

let newObj = doClone(user);

console.log(newObj);




