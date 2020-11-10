function calculateTotalMortgage(percent, contribution, amount, date) {
    let p = percent, c = contribution, a = amount, d = date;
    let S = amount - contribution; //тело кредита
    let P = (p / 100) / 12; // 1/12 процентной ставки(от 0 до 1)
    let now = new Date(); //текущая дата
    let n = (d.getFullYear() - now.getFullYear()) * 12 + (d.getMonth() - now.getMonth() - 1);
    let everyMonthPay = S * (P + P / (((1 + P) ** n) - 1));//ежемесячный платеж
         totalAmount = everyMonthPay * n;//итоговая выплата
    let percentOfCredit = totalAmount - S//проценты за пользование кредитом итог
    
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}