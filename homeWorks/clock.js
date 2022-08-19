let name = prompt("Lütfen İsminizi Giriniz: ");
let girilen_isim = name;
let isim = document.querySelector("#myName");
isim.innerHTML = `${girilen_isim}`;


function verSaat() {
    var simdi = new Date();
    return simdi.toLocaleTimeString();

}
function verGun() {
    var date = new Date();
    var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    return gunler[date.getDay()];

}
function saatGoster() {
    let saatTarih = document.querySelector("#myClock");
    saatTarih.innerHTML = `${verSaat()} ${verGun()}`
}

saatGoster();

setInterval("saatGoster()", 1000);
/*
var d = new Date();
document.getElementById("test").innerHTML = gunler[d.getDay()];

*/



