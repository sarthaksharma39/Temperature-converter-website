//celsius to fahrenheit
function CtoF() {
    let x = document.getElementById("getdata").value;
    let y = x * (9 / 5) + 32;
    document.getElementById("demo").innerHTML = y;
};
// fahrenheit to celsius
function FtoC() {
    let y = 122;
    let x = (y-32)*5/9;
    document.getElementById("demo").innerHTML = x;
};


//celsius to Kelvin
function CtoK() {
    let x = 50;
    let y = x + 273.15;
    document.getElementById("demo").innerHTML = y;
};
//Kelvin to celsius
function KtoC() {
    let y = 323.15;
    let x = y - 273.15;
    document.getElementById("demo").innerHTML = x;
};
