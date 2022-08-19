
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    this.id == "increase" ? counter += 1 : counter -= 1
    localStorage.setItem('counter', counter)
    counterDOM.innerHTML = counter
}

/*

function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
const ensar = new Elf(`Ensar`, `YAY`);
//console.log(ensar.attack());
console.log(ensar.name);
const kubra = new Elf(`kubra`, `Ateş`);
//console.log(kubra.attack());


*/