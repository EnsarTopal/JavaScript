//const isHappy=false;

/*function jsengine(code){
    return code.split(/\s+/)
}

jsengine('var a = 5')
*/
//----------------------------------------------------------------------
/*
//interpreter vs compiler
function someCalculation(x, y) {
    return x + y;
}
for (let i = 0; i < 100; i++) {
    someCalculation(5, 4);
    console.log(i);
}
*/
//----------------------------------------------------------------------
/*
function findUser(user) {
    return "found ${user.firstName} ${user.lastName}"
}
const userData{
    firstName = "Ensar",
    lastName = "Topal",
}
findUser(userData)
*/
//----------------------------------------------------------------------
/*
//hidden classes
function Animal(x, y) {
    this.x = x;
    this.y = y;
}
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);
//obj1.a = 30;
//obj1.b = 100;
//obj2.b = 30;
//obj2.a = 100;
delete obj1.x = 30; 
*/
//----------------------------------------------------------------------
/*
// call stack + memory heap
const number = 323; //allocate memory for number 
const string = 'azcık kelime'// allocate memory for string
const human = { //allocate memory for an object... and it's values
    first: 'Ensar',
    last: 'Topal',
}
console.log(human)

function substructTwo(num){
return num -2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return substructTwo(sumTotal);
}
console.log(calculate());
*/
//----------------------------------------------------------------------
/*
//memory şişiriyor çalışmıyor
function inception(){
    inception()
}
inception()
*/
/*
//Memory leak
//Global variable
var a = 1;
var b = 1;
var c = 1;
// event listeners
var element = document.getElementById('button');
element.addEventListener('click', onClick);

//setInterval
setInterval(()=> {
    //referencing objects
})*/
//----------------------------------------------------------------------
