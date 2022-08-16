/*
function printName() {
    return 'Ensar Topal'
}
function findName() {
    return printName()
}
function sayMyName() {
    return findName()
}

console.log(window.sayMyName());
*/
//----------------------------------------------------------------------
/*
console.log('1*-*-*-*-*-*')
console.log(teddy)
console.log(sing())
var teddy='bear';

//function expression
var sing2=function(){
    console.log('aww yeaahh')
}

//function declaration
function sing(){
    console.log('oh la la la')
}
*/
//----------------------------------------------------------------------
/*
a()
function a() {
    console.log('hi')
}

function a() {
    console.log('bye')
}
*/
//----------------------------------------------------------------------
/*
var favouriteFood = "grapes";
var foodThoughts = function () {
    console.log("Orginal favourite food: " + favouriteFood);
    var favouriteFood = "sushi";
    console.log("New favourite food: " + favouriteFood);
};
foodThoughts();
*/
//----------------------------------------------------------------------
/*
var canada = () => {
    console.log('cold')
}
function india() {
    console.log(arguments)
    console.log('warm')
}

//Function Invocation/Call/Execution
canada()
india()

function marry(person1, person2) {
    console.log('arguments', arguments)
    console.log(Array.from(arguments))
    return '${person1} is now married to ${person2}'
};
marry('Ensar', 'Kübra');

function marry2(...args) {
    console.log('arguments', args)
    console.log(Array.from(arguments))
    return '${args[0]} is now married to ${args[1]}'
};
marry2('Ensar', 'Kübra');
*/
//----------------------------------------------------------------------
/*
function two() {
    var isValid;//undefined
}
function one() {
    var isValid = true;//local environment
    two();//new execution context
}
var isValid = false;
one();

//two() --undefined
//one() --true
//global() --false
*/
//----------------------------------------------------------------------
//#region 
/*
var x = 'x'
function findName() {
    console.log(x)
    var b = 'b';
    return printName();
}
function printName() {
    var c = 'c';
    return 'Ensar Topal';
}
function sayMyName() {
    var a = 'a'
    return findName()
}

console.log(window.sayMyName());
*/
/*
function sayMyName() {
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            console.log(a)
            return 'Ensar Topal';
        }
    }
}

console.log(sayMyName()()())
*/
//#endregion
//----------------------------------------------------------------------
/*
//--------------------
'use strict'
function weird() {
    var height = 50;
    return height;
}

console.log(weird())
//----------------------

var heyhey = function doodle() {
    //do something
    console.log(doodle)
    return 'heyhey'
}
console.log(heyhey)
*/
//----------------------------------------------------------------------
/*
if (5 > 4) {
    var secret = '12345';
}
console.log(secret);
*/
//----------------------------------------------------------------------
/*
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log('final',i)
}
loop()
*/
//----------------------------------------------------------------------
/*
//IIFE
(function () {

})();
//örneği html sayfasında 
*/
//----------------------------------------------------------------------
/*
//myExercise

function faktoriyel(sayi) {
    let fak = 1;
    for (let i = 1; i <= sayi; i++) {
        fak = fak * i;
    }
    console.log(fak)
}
faktoriyel();
*/
//----------------------------------------------------------------------
/*
const object = {
    name: "Ensar",
    sing: function(){
        return  this.name + " sing a song"
    },
    singAgain(){
        return this.sing()+  "!"
    }
}
object.sing();
*/
//----------------------------------------------------------------------
/*
function multiply(a, b) {
    return a * b
}
let multiplyByTWo =multiply.bind(this,2)
console.log(multiplyByTWo(4))
let multiplyByTen=multiply.bind(this,10)
console.log(multiplyByTen(4))
*/
//----------------------------------------------------------------------
/*
var b = {
    name: 'ensar',
    say() { console.log(this) }
}
var c = {
    name: 'ensar',
    say() { return function () { console.log(this) } }
}
var d = {
    name: 'ensar',
    say() { return () => console.log(this) }
}
c.say()
*/
//----------------------------------------------------------------------

