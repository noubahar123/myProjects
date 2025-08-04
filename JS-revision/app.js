// // Testing var/let and const

// var num1 = 10
// let num2 = 20
// const num3 = 30
// console.log(num1, num2, num3)



// // Reassigning value
// num1 = 50
// num2 = 60
// // num3 = 70

// console.log(num1)
// console.log(num2)
// // console.log(num3)     
// //Hence concluded var and let can be reassigned but not const


// //Changing the dataType
// num1 = "hello from num1"
// num2 = "hello from num2"
// // num3 = "hello from num3"

// console.log(num1)
// console.log(num2)


// //Redeclaring the declarative
// var num1 = "hello from num1"           //var can be redeclared
// // let num2 = "hello from num2"           //let cannot be redeclared



// // Hoisting Eg
// var x = 5;
// function test() {
//     console.log(x);          //In JS, the local variable triumps the global one
//     var x = 10;
// }
// test();


// // Making setTimeout run as setInterval
// function remindTasks() {
//     setTimeout(() => {
//         console.log("Don't forget to check your tasks!");
//         remindTasks();
//     }, 5000);
// }
// remindTasks();

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// var x = 10;
// for (let i = 0; i < 1; i++) {
//     let y = x;
//     var x = 30;
//     console.log(x, y);
// }


// let arr  = [,2,3,4]
// console.log(arr.length)
// console.log(arr[0])


const arr = [1,2,3,4,5]
let sum = 0
for(i=0; i < arr.length; i++){
    sum += arr[i]
}

console.log(sum)