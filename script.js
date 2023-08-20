// Function Section
function oilCon(distance, consump){
    let rateConsump = distance / consump;
    return rateConsump;
}
function oilCost(oilConsump, oilPrice){
    let calOilCost = oilConsump * oilPrice;
    return calOilCost;
}

// Output Section 
let consump = oilCon(60 , 45);
let sum = oilCost(consump ,39);
console.log('Travel Cost =', sum, '฿');
console.log('Oil Consumption =', consump, 'L');
