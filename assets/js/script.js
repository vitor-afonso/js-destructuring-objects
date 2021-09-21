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

//here we are binding the variable to the object, so that we can call the variable(function reference) from the outside the object.
idade = idade.bind(car);

console.log(`O segundo dono do ${marca} ${modelo} foi o ${segundoDono}, já o primeiro é ${first}. O carro tem ${idade()} anos de idade`);

