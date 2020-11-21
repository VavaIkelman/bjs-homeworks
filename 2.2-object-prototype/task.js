
String.prototype.isPalindrome = function () {
    const str = this.toLowerCase().replace(/\s/g,'').split('').join('');
    const strRevers = this.split('').reverse().join('').toLowerCase().replace(/\s/g,'');
    return str === strRevers;
  
  }

  function getAverageMark(marks) {
    const score= marks;
    let sum = 0;
    if (!marks.length || !marks){
        return 0
    }
  for (let i = 0; i < score.length; i++){
    sum += score[i];
    }
   return Math.round(sum / score.length);
}


function checkBirthday(birthday) {
    const diff = Date.now() - Date.parse(birthday);
    let age = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
    const verdict = (age > 18) ?  true : false;
     return verdict
}
