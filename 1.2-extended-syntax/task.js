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
    let averageMark = 0;
    if (n == 0) {
        averageMark = 0;
    }
    else {
      let actualMarks =  marks.slice(0, 5);{
        let sumMarks = 0;
        let countMarks = 0;
        console.log(actualMarks);
          for (let i = 0; i <= actualMarks.length; i++){
              countMarks += 1;
              sumMarks += actualMarks[i];
              averageMark = sumMarks / countMarks;
          }
        } 
      }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}