/* jshint esversion:6 */

let car = {
    brand: "VW",
    make: "Golf",
    year: 1999,
    owners: {
        second: "Vitor"
    },
    yearsOld: function() {
        //to be able to use this.year in yearsOld i need to bind the variable that calls it, to the object car. 
        return 2021 - this.year;
        
    }
};



let {brand:marca, make:modelo, owners:{first = "desconhecido"}, owners:{second:segundoDono}, yearsOld:idade} = car;

//here we bind the variable to the object, so that "this" is still working when we call the variable(function reference) from the outside the object/or without referencing the object.
idade = idade.bind(car);

console.log(`O segundo dono do ${marca} ${modelo} foi o ${segundoDono}, já o primeiro é ${first}. O carro tem ${idade()} anos de idade`);




//Destructuring directly in function parameter

function getBrandAndMake({brand, make}) {
    return `${brand} ${make}`;
}

let res = getBrandAndMake(car);

console.log(res);






// DESTRUCTURING ARRAYS

// destructuring, 
// defining just the variables i need, 
// assigning a default value to an inexistent item

let myArray = ['Vitor', 'Afonso',];

let [myName, , age = 77] = myArray;

console.log(`${myName} ${age}`);


// destructuring via function


function create() {
    return [3, 7, 11, 15, 20, 23, 25];
}
let [ , , , d, , f] = create();

console.log(d, f);



