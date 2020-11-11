"use strict"
function getResult(a,b,c){
    let x = [], D = Math.pow(b,2) - 4 * a * c;
 if (D == 0) {
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
        return 0;
    }
    let actualMarks =  marks.slice(0, 5);{
      let sumMarks = 0;
      for (let i = 0; i < actualMarks.length; i++){
              sumMarks += actualMarks[i];
      }
      return sumMarks / actualMarks.length;
    } 
}

function askDrink(name,dateOfBirthday){
    let userName = name;
    let userDate = dateOfBirthday;
    let str1 = `Не желаете ли олд-фэшн, ${userName}?`;
    let str2 = `Сожалею, ${userName}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    return ((new Date().getFullYear() - userDate.getFullYear()) > 18) ? str1 : str2 ;
    
}