//celsius to fahrenheit
function CtoF() {
    let x = document.getElementById("getdata1").value;
    let y = x * (9 / 5) + 32;
    document.getElementById("demo1").innerHTML = y;
};
// fahrenheit to celsius
function FtoC() {
    let y = document.getElementById("getdata2").value;
    let x = (y-32)*5/9;
    document.getElementById("demo2").innerHTML = x;
};


//celsius to Kelvin
function CtoK() {
    let x = document.getElementById("getdata3").value;
    let y = x*1 + 273.15;
    document.getElementById("demo3").innerHTML = y;
};
//Kelvin to celsius
function KtoC() {
    let y = document.getElementById("getdata4").value;
    let x = y*1 - 273.15;
    document.getElementById("demo4").innerHTML = x;
};
