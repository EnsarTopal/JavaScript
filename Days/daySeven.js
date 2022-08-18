//----------------------------------------------------------------------
/*
let score = prompt("Lütfen puanınızı giriniz: ");
let textinfo;
if (score >= 0 && score <= 100) {
    if (score < 50) {
        textinfo = "FF";
    }
    else if (score >= 50 && score < 60) {
        textinfo = "FD";
    }
    else if (score >= 60 && score < 65) {
        textinfo = "DD";
    }
    else if (score >= 65 && score < 70) {
        textinfo = "DC";
    }
    else if (score >= 70 && score < 75) {
        textinfo = "CC";
    }
    else if (score >= 75 && score < 80) {
        textinfo = "CB";
    }
    else if (score >= 80 && score < 85) {
        textinfo = "BB";
    }
    else if (score >= 85 && score < 90) {
        textinfo = "BA";
    }
    else if (score >= 90 && score <= 100) {
        textinfo = "AA";
    }
}
else {
    alert("Lütfen 0-100 değer aralığında veri giriniz!")
}

let info = document.querySelector("#info")
info.innerHTML = `${textinfo} → ${score}`

*/

Date.prototype.lastYear = function () {
    return this.getFullYear() - 1;
}
console.log(new Date().lastYear());

Array.prototype.map = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push((this[i] + ':D'))
    }
    return arr
}
console.log([1, 2, 3].map());