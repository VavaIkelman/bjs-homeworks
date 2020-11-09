"use strict"
function getResult(a,b,c){
    let x, D = Math.pow(b,2) - 4 * a * c;
if (D < 0) {
    x = [];
}
else if (D == 0) {
    x = [(-b - Math.sqrt(D)) / 2 * a];
}
else if (D > 0) {
    x = [ (-b + Math.sqrt(D)) / 2 * a , (-b - Math.sqrt(D)) / 2 * a];
}
    return x;
}

function getAverageMark(marks){
    let currentMarks = marks;
    let n = marks.length;
    if (n == 0) {
        averageMark = 0;
    }
    else if (n >= 5) {
      let actualMarks =  marks.slice(0, 5);
        averageMark = (actualMarks.reduce(0, +)) / n;
      }
   
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}