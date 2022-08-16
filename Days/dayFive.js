/*
//excersize
function callMeMaybe(){
    const callMe='Selam! Şuan buradayım!';
    setTimeout(function(){
        console.log(callMe);
    },3000);
}
callMeMaybe();
*/

//----------------------------------------------------------------------
/*
//Memory efficient
function heavyDuty(index){
    const bigArray = new Array(7000).fill('haha');
    console.log('created!')
    return bigArray[index];
}

heavyDuty(687);
heavyDuty(687);
heavyDuty(687);
const getHeavyDuty = heavyDuty2();
getHeavyDuty(486);
getHeavyDuty(500);
getHeavyDuty(700);

function heavyDuty2(){
    const bigArray = new Array(7000).fill('haha');
    console.log('created Again!')
    return function(index){
        return bigArray[index];
    };
}
*/
//----------------------------------------------------------------------
/*
//Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'bomb';
    }
    setInterval(passTime, 1000)
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();

ohno.totalPeaceTime();
*/
//----------------------------------------------------------------------
/*
function initialize() {
    let called = 0;
    return function setView() {
        if (called > 0) {
            return;
        } else {
            view = 'view',
                called++;
            console.log('Görünüm ayarlandı!')
        }
    }
}
const startOnce = initialize();
startOnce();


console.log(view);
*/
//----------------------------------------------------------------------
/*
//Yol 1 
const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    setTimeout(function () {
        console.log('I am at index ' + array[i]);
    }, 1000);
}
//Yol 2

const array2 = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
    (function (closureI) {
        setTimeout(function () {
            console.log('I am at index ' + array[closureI]);
        }, 3000);
    })(i);

}
*/
//----------------------------------------------------------------------
/*
let dragon = {
    name: 'Ensar',
    fire: true,
    fight() {
      return 5
    },
    sing() {
      if(this.fire){
        return `Ben ${this.name}, ateşin nefesi`
      }    
    }
  }
  
  let lizard = {
    name: "Kubra",
    fight() {
      return 1
    }
  }
  
  lizard.__proto__=dragon;
  for(let prop in lizard){
    if(lizard.hasOwnProperty(prop)){
        console.log(prop)
    }
  }
  */
 
  