
String.prototype.isPalindrome = function () {
    let str = this.toLowerCase().replace(/\s/g,'').split('').join('');
    let strRevers = this.split('').reverse().join('').toLowerCase().replace(/\s/g,'');
    let result = (str === strRevers);
      if (result == true){
          console.log(`Строка "${this}" является полиндромом`);
      } else {
          console.log(`Строка "${this}" не является полиндромом`);
      }
      return result
  
  }

  function getAverageMark(marks) {
    let average = Array.from(marks);
    let sum = 0;
    if (marks == 0 || null || undefined){
        return 0
    }
  for (let i = 0; i < average.length; i++){
    sum += average[i];
    }
   return Math.round(sum / average.length);
}


function checkBirthday(birthday) {
    let diff = Date.now() - Date.parse(birthday);
    let age = Math.round(diff / (365.25 * 24 * 60 * 60 * 1000));
    let verdict = (age > 17) ?  "Да" : "Нет";
     return verdict
}
