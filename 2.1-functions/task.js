"use strict"
//getSolution
function getSolution(a, b, c) {
	let n1 = a, n2 = b, n3 = c;
	let roots = [];
	let D = b ** 2 - 4 * a * c;
	if (D < 0) {
		return {D: D, roots: roots};
	}
	if (D == 0) {
		let x1 = -b / 2 * a;
		roots = [x1];
		return {D: D, roots: [x1]};
	}
	else if (D > 0) {
		let x1 = ( -b + Math.sqrt(D)) / 2 * a;
		let x2 = ( -b - Math.sqrt(D)) / 2 * a;
		roots = [x1, x2];
		return {D: D, roots: Object([x1, x2])};
	}	
}
showSolutionsMessage
function showSolutionsMessage(a, b, c) {
	let result = getSolution(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`)
	if (result.D < 0) {
	 console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D === 0){
console.log(`Уравнение имеет один корень x1 = ${result.roots[0]}`);
	} 
	else {
		console.log (`Уравнение имеет два корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
	}
}
