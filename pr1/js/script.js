let pamount = 50000;
let rate = 10;
let year = 2;


document.querySelector('h1').innerHTML = "Simple Interest Calculator";
document.querySelector('.pa').innerHTML = "Principal Amount ($)";
document.querySelector('.p-box').innerHTML = +pamount;
document.querySelector('.annual').innerHTML = "Annual Interest Rate(%)";
document.querySelector('.p1-box').innerHTML = +rate;
document.querySelector('.year').innerHTML = "Number of Year : ";
document.querySelector('.p2-box').innerHTML = +year;
document.querySelector('.a1').innerHTML = "After 2 year, your investment will be worth ";
let totalAccruedAmount =(pamount * rate * year) / 100;
document.querySelector('.a2').innerHTML = +totalAccruedAmount;
document.querySelector('.a3').innerHTML = "With simple interest.";
