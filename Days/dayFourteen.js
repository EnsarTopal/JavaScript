/*
//currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b

const curriedMultiply5 = curriedMultiply(5)

console.log(curriedMultiply5(4))
*/
//----------------------------------------------------------------
/*
//Partial application

const multiply = (a, b, c) => a * b * c;
const patrialMultiplyBy5 = multiply.bind(null, 5)

console.log(patrialMultiplyBy5(4, 10))

*/
//----------------------------------------------------------------
/*
//Memoization 
function addTo80(n) {
    console.log('long time')
    return n + 80;
}

function memoizedAddTo80(n) {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            console.log('long time')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo80();
console.log('1: ', memoized(5))
console.log('2: ', memoized(5))
*/
//----------------------------------------------------------------
/*
//Compose
//pIpE
fn1(fn2(fn3(50)));
compose(fn1, fn2, fn3)(50);//compose soldan sağa doğru 
pipe(fn3, fn2, fn1)(50)//pipe soldan sağa doğru tek biri önce f3 biri önce f1 i alıyo
const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyByThreeAndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyByThreeAndAbsolute(-30));
*/
function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
        if (num > max_num) {
            // (Fill in the missing line here)
            max_num = num;

        }
    }
    return max_num;
}
