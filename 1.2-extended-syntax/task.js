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
    let allMarks = marks ;
    let n = marks.length;
    let averageMark ;
    if (n == 0) {
        averageMark = 0;
    }
    else {
      let actualMarks =  marks.slice(0, 5);{
        let sumMarks = 0;
        
          for (let i = 0; i <= actualMarks.length - 1; i++){
              sumMarks += actualMarks[i];
              averageMark = sumMarks / actualMarks.length;
          }
        } 
      }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}