
// Checking GEC,scopes & hoisting  

console.log(a, "Hoisting:- Accessing before delaring the variable")
var a = 10

function b(){
    console.log(c, "c value inside fn accessing before variable")
    var c = 200
    console.log(a, "Accessing a value inside fn")
    console.log(c, "Accessing c value after declaring it's value")
    a = 20
    console.log(a, "Accessing a variable after declaring it's value inside function")
}

console.log(a,"Accessing a variable after declaring it's value")
b()

