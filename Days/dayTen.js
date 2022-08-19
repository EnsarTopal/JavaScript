/*

//Array'ler ile çalışma

let domain = "denemeURL";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

let emptyArray = [];//boş liste


console.log(items[0]);
console.log(items[items.length - 1]);

console.log(Array.isArray(items));//array mi??

//hangileri isArray=>true verir?
console.log("[]: ", Array.isArray([]));
console.log("1: ", Array.isArray(1));
console.log("true: ", Array.isArray(true));


//ortadaki elemanın çağırılması

console.log(items[Math.floor(items.length / 2)]);

console.log(typeof (items))


let items1 = [10, 20, 30, 40];
console.log("items1 -> ilk hali: ", items1)

items1.push(50);
console.log("50: ", items1);

items1.unshift(5);
console.log("5: ", items1);

let lastItem = items1.pop();
console.log("lastItem: ", lastItem, " items1: ", items1)

let firstItem = items1.shift();
console.log("firstItem: ", firstItem, " items1: ", items1)

//dizi içindeki ilk elemanın değiştirilmesi
items1[0] = 5;
console.log(items1);

//dizi içindeki son elemanın değiştirilmesi

items1[items1.length - 1] = 1000;
console.log(items1);

*/

/*
//FOR döngüsü ile dom ögesi içerisine veri aktarımı
//verilerin okunması

let users = ["Ayşe", "Fatma", "Hayriye"];

const userlistDOM = document.querySelector("#userList");

for (index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = users[index];
    userlistDOM.appendChild(liDOM);
}
*/
/*
//While döngüsü kullanımı

// let counter = 0;
// while (counter < 10) {
//     console.log(counter)
//     counter++;
// }
//--------------------------------------------
// let userName = "";
// while (!userName) {
//     userName = prompt("Kullanıcı adınzı giriniz: ")
//     console.log(userName)
// }
*/


/*
const Products = ["Laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

Products.forEach((product, index, array) => console.log(array[index] = `${product.toUpperCase()}`));
console.log(Products);

const userlistDOM = document.querySelector("#userList");

Products.forEach(item => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = item;
    userlistDOM.append(liDOM);
})

*/


/*
const Products = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"];

const NEW_PRODUCTS = Products.filter(item => item.length > 5)
console.log(NEW_PRODUCTS);

//Aktif kullanicilar?
const USERS = [
    { fullName: "Kubra Selcuk", isActive: true },
    { fullName: "Ensar Topal", isActive: true },
    { fullName: "Sule Kurd", isActive: false },
    { fullName: "Adem Topal", isActive: false }
]

// const ACTIVE_USERS = USERS.filter(item => item.isActive === true)
const ACTIVE_USERS = USERS.filter(item => item.isActive)

console.log(ACTIVE_USERS);

*/

const USERS = ["AYSE", "FaTma", "HayriYE", "AkSEL"];

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => {

//     return {
//         userName: item,
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}`
//     }
// }
// )


const USERS_OBJ = USERS.map(item => (
        {
            userName: item,
            shortName: `${item[0]}.`,
            newName: `${item[0].toUpperCase()} ${item.slice(1).toLowerCase()}`
        }
    )
)
console.log(USERS_OBJ)