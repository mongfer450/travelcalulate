// Input Section
function getVal(){
    let oilPrice = document.querySelector("#oilPrice");
    let distance = document.querySelector("#distance");
    let rateofc = document.querySelector("#rateofc");
    let output1 = document.querySelector("#output1");
    messageOutput();
}
// Function Section
function oilCon(distance, consump){
    let rateConsump = distance / consump;
    return rateConsump;
}
function oilCost(oilConsump, oilPrice){
    let calOilCost = oilConsump * oilPrice;
    return calOilCost;
}
function messageOutput(){
    output1.innerHTML = "Oil Price = " + oilPrice.value + "Distance = " + distance.value + "Consumption Rate = " + rateofc.value;
}


// Output Section 
let consump = oilCon(60 , 45);
let sum = oilCost(consump ,39);
console.log('Travel Cost =', sum, '฿');
console.log('Oil Consumption =', consump, 'L');

