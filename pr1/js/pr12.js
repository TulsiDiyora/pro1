let price1 = 1000;
let discount1= 5;

let price2 = 1050;
let discount2 = 10;

let price3 = 5000;
let discount3= 2;

let price4 = 10000;
let discount4 = 1;


document.querySelector('.p1').innerHTML = "BACKPACK"
document.querySelector('.price1').innerHTML = +price1
document.querySelector('.q1').innerHTML = "5"
let total =  price1 + price1 + price1 + price1 + price1
document.querySelector('.total').innerHTML = +total
document.querySelector('.discount1').innerHTML = +discount1
let afterDiscount1= total - ( total * discount1/100 );
document.querySelector('.t-amount1').innerHTML = +afterDiscount1

document.querySelector('.p2').innerHTML = "COLLGE-BAG"
document.querySelector('.price2').innerHTML = +price2
document.querySelector('.q2').innerHTML = "3"
let total2 =  price2 + price2 + price2
document.querySelector('.total2').innerHTML = +total2
document.querySelector('.discount2').innerHTML = +discount2
let afterDiscount2= total2 - ( total2 * discount1/100 );
document.querySelector('.t-amount2').innerHTML = +afterDiscount2

document.querySelector('.p3').innerHTML = "BACKPACK"
document.querySelector('.price3').innerHTML = +price3
document.querySelector('.q3').innerHTML = "2"
let total3 =  price3 + price3
document.querySelector('.total3').innerHTML = +total3
document.querySelector('.discount3').innerHTML = +discount1
let afterDiscount3= total3 - ( total3 * discount3/100 );
document.querySelector('.t-amount3').innerHTML = +afterDiscount3

document.querySelector('.p4').innerHTML = "COLLGE-BAG"
document.querySelector('.price4').innerHTML = +price4
document.querySelector('.q4').innerHTML = "3"
let total4 =  price4 + price4
document.querySelector('.total4').innerHTML = +total4
document.querySelector('.discount4').innerHTML = +discount4
let afterDiscount4= total4 - ( total4 * discount4/100 );
document.querySelector('.t-amount4').innerHTML = +afterDiscount4



