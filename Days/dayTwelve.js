
/*
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

const fiona = new Elf('Estell', 'ninja stars');
console.log(fiona instanceof Elf) // 
const ben = new Elf('Otha', 'bow');
console.log(fiona.name  ,fiona.attack());
*/

///----------------------------------------------------------------
/*
// new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

const person1 = new Person('Xavier', 55)

//implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi() {
        console.log('hi' + this.name)
    }
}

person.hi()

//explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        console.log('hi' + this.setTimeout)
    }.bind(window)
}

person3.hi()

// arrow functions
const person4 = {
    name: 'Karen',
    age: 40,
    hi: function () {
        var inner = () => {
            console.log('hi ' + this.name)
        }
        return inner()
    }
}

person4.hi()

*/
//----------------------------------------------------------------


class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}
class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type//this anahtar kelimesini çağırmak için super sınıfını çapırmak zorundayız
        console.log(this)
    }
}

class ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the world made'
    }
}



const ivy = new Elf('Estell', 'spear', 'house');
console.log(ivy.attack());

const shrek=new ogre('shrek','club','green')
console.log(shrek.makeFort())


//console.log(ogre.prototype.isPrototypeOf(shrek))
//console.log(Character.prototype.isPrototypeOf(ogre.prototype))
//console.log(ivy instanceof Character)

