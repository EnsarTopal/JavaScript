/*
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "1agirlik": 2
};

//anahtar bilgisi oluşturma
console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["1agirlik"]);


//anahtar bilgisine yeni değer ekleme
laptop1.brand = "Mac";
laptop1["brand"] = "Mac1";
console.log(laptop1);

//yeni bilgi ekleme
laptop1.version = "1.19.1";
console.log(laptop1);

//anahtar bilgilerine ulaşma
keys = Object.keys(laptop1);
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log(laptop1[keyInfo]);
});

//değer bilgilerine ulaşma
console.log(Object.values(laptop1));
let values = Object.values(laptop1)
values.forEach(value => {
    console.log("value: ", value)
})

/*
//test sorusu
let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

        name:"Ted",
        age: 35,
        job: ["Architect"]
  },
  {
        name: "Robin",
        age: 32,
        job: ["News Anchor", "Pop-Star"]
  }
  ]
};

alert(show.characters[2].job[2])
*/


/*
var person = {
    name: 'Emilio',
    surname: 'Koch',
    age: 23,
    city: 'West Cloyd',
    introduce: function () {
        console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
    },
};

console.log(person.introduce())

person.myCity = function () {
    console.log(`I live in ${this.city}`);
};
person.myCity();
*/


/*
let user={
    firstName:"Cathy",
    lastName:"Conroy",
    score:[1,2,3,4],
    gender:"male",
    isActive: true,
    shortName:function () { return `${this.firstName[0].toUpperCase()}. ${this.lastName}` }
};
console.log(user)
*/

/*
//Object Destructuring:
let settings = {
    userName: "Kubra",
    password: "Bad password",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "localhost",
};
//obj içindeki bilgilerin tek seferde çıkartılması
//let userName = settings.userName;
//console.log(userName)
//rename && destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;

console.log(user, password, isActive, serverIP, serverName);



//obje içindeki bazı bilgilerin çıkarılması

let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings;

console.log(userName2, password2, isActive2, newSettings);

//objenin destructuring ile kopyalanması

//HATALI!!!!!
//let settings2=settings;
//settings2.userName = "Değişen bilgi.";
//console.log("settings: ",settings)
//console.log("settings2: ",settings2)
////////////////////////////////

//DOĞRU KULLANIMI 
let settings2 = { ...settings }
settings2.userName = "Değişen bilgi.";
console.log("settings: ", settings)
console.log("settings2: ", settings2)

let score = [100, 200, 300, 500];
let [score1, score2, ...otherScore] = score;
console.log(score1, score2, otherScore)


//Object kopyalama ile aynı let settings2 = { ...settings }
let copiyOfScroe = [...score]
console.log(copiyOfScroe)
*/


/*
//hata yönetimi 
let products;

try {
    products.forEach(item => console.log((item)));

} catch (err) {
    console.log("error: ", err);
    //products = [1, 2, 3, 4];
    //products.forEach(item => console.log((item)));
}


console.log("Hata yönetimi düzgün çalışıyor.")
let info = "localhost"
console.log(info)
*/

/*

//JSON dosyadan veri çekme
fetch("data/settings.json").then(response => {
    return response.json();
}).then(responseJson => {
    console.log(responseJson);
    console.log(responseJson.userName);
})


let userListDOM = document.querySelector("#userList");
//API üzerinden veri çekme
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(
    responseJson => {
        responseJson.forEach(item => {
            let liDOM = document.createElement('li');
            liDOM.innerHTML = item.title;
            userListDOM.appendChild(liDOM);
        })
    }
);
*/
