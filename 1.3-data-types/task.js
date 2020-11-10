"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let p = percent, c = contribution, a = amount, d = date;
<<<<<<< HEAD
    let S = amount - contribution; //тело кредита
    let P = (p / 100) / 12; // 1/12 процентной ставки(от 0 до 1)
    let now = new Date(); //текущая дата
    let n = (d.getFullYear() - now.getFullYear()) * 12 + (d.getMonth() - now.getMonth() - 1);
    let everyMonthPay = S * (P + P / (((1 + P) ** n) - 1));//ежемесячный платеж
         totalAmount = everyMonthPay * n;//итоговая выплата
    let percentOfCredit = totalAmount - S//проценты за пользование кредитом итог
    
    return totalAmount.toFixed(2);
=======
    let S; //тело кредита
    let P; // 1/12 процентной ставки(от 0 до 1)
    let n; //количество выплачиваемых месяцев
    let bodyCredit; //Тело кредита
    let everyMonthPay;
    let totalAmount;//
    return totalAmount;
>>>>>>> 001ead9d40fceaf7468b261854b32e1df4f21a13
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}