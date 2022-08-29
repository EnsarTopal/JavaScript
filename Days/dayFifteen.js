/*
const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
]
const getData = async function () {
    try {
        const [users, posts, albums] = await Promise.all(
            urls.map(async function (url) {
                const response = await fetch(url);
                return response.json();
            }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('hop kardeş nereye!')
    }
}

const getData2 = async function () {
    const arrayOfPrmises = urls.map(url => fetch(url));
    for await (let request of arrayOfPrmises) {
        const data = await request.json();
        console.log(data);
    }
}
*/
//--------------------------------------------------------
const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `prallel is done: ${output1} ${output2} ${output3}`
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`
}

sequence().then(console.log)
parallel().then(console.log)
race().then(console.log)
