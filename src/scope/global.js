// variables

var a; //declarando
var b; 'b'; // declarando / asignando
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion


// Global scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);