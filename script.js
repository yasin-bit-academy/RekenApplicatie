let gasten = 42;
let deelExtraPorties = 3;
let extraPorties = gasten / deelExtraPorties;
let totaalPorties  = gasten + extraPorties;

let mlPerKom = 250;
let mlPerPan = 4000;

let totaalAantalKommen = totaalPorties * mlPerKom;

let result = Math.ceil(totaalAantalKommen / mlPerPan);

document.getElementById("result").innerHTML += result;