const string = new String();

String.prototype.isPalindrome = function () {
    let lowerStr = this.toLowerCase();
    let reversStr = this.split('').reverse().join('');
    let result = (lowerStr === reversStr);
    if (result == true){
        console.log(`Строка ${lowerStr} является полиндромом`);
    } else {
        console.log(`Строка ${lowerStr} не является полиндромом`);
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