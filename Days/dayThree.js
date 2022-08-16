//----------------------------------------------------------------------
/*
//Primitive
console.log(typeof 5);
console.log(typeof true);
console.log(typeof 'ensar');
console.log(typeof undefined)
console.log(typeof null);
Symbol('sadece ben');

//Non-Primitive
const obj1={
    a:'Ensar'
}
console.log(typeof {});
console.log(typeof []);
console.log(typeof function(){});
console.log(obj1);
*/
//----------------------------------------------------------------------
/*
var a = 5;
var b = a;
b++;
////////
var c=[1,2,3,4,5];
var d=[].concat(c);
d.push(23423);
console.log(d);
////////

let obj = { a: 'a', b: 'b', c: {deep:'beni kopyalamaya çalış köle '} };
let clone = Object.assign({}, obj);
let clone2={... obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'lalala';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
*/
//----------------------------------------------------------------------
/*
if(true)
{console.log(5)}
*/
//----------------------------------------------------------------------
/*
//Functions are first class citizens in JS
//1
var stuff = function () { }

//2
function a(fn) {
    fn()
}

a(function () { console.log('selam dünyalı') });

//3
function b() {
    return function c() { console.log('güle güle') };
}

var d = b();
d();
//yada aşağıdaki gibi yazabilirsin.
b()();
*/
//----------------------------------------------------------------------

