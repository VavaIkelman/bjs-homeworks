 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */
 let  a;
 let  g;
 let  p;
 let resultTask1;

function averageMark(a, g, p) {
	
    resultTask1 = (a + g + p) / 3;
    
	return resultTask1;
}

let myName ;
let message;
function sayHello(userName) {
	myName = userName;
    message = `Привет, мир! Меня зовут ${myName}`;
    
	return message;
}

let x ;
let y ;
let z ;
let resultTask3
function calculateFormula(x, y, z) {
	x = 2;
    y = 22;
    z = 0;
	resultTask3 = (x * y + 5 * z + x - 1) ;
    
    return resultTask3
}
