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

/*
0-49 → FF
50-59 → FD
60-64 → DD
65-69 → DC
70-74 → CC
75-79 → CB
80-84 → BB
85-89 → BA
90-100 → AA
*/