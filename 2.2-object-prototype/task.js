
String.prototype.isPalindrome = function () {
    let str = this.toLowerCase().replace(/\s/g,'').split('').join('');
    let strRevers = this.split('').reverse().join('').toLowerCase().replace(/\s/g,'');
    let result = (str === strRevers);
      if (result == true){
          console.log(`Строка "${this}"" является полиндромом`);
      } else {
          console.log(`Строка "${this}"" не является полиндромом`);
      }
      return result
  
  }

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}