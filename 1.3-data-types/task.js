"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let p = percent, c = contribution, a = amount, d = date;
    let S = amount - contribution;
    let P = (p / 12) / 100; 
    let now = new Date(); 
    let n = (d.getFullYear() - now.getFullYear()) * 12 + d.getMonth() - now.getMonth();
    let everyMonthPay = S * (P + P / (((1 + P) ** n) - 1));
    let  totalAmount = everyMonthPay * n;
    let percentOfCredit = totalAmount - S;
 
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let user = name;
    let greeting = undefined;
    if (user == null || user == undefined || user == 0){
        greeting = "Привет, мир! Меня зовут Аноним"
    } else {
        greeting = `Привет, мир! Меня зовут ${user}`
    }
    return greeting;
}