"use strict"
//getSolution
function getSolutions(a, b, c) {
	let n1 = a, n2 = b, n3 = c;
	let roots = [];
	let D = b ** 2 - 4 * a * c;
	if (D < 0) {
		return {D: D, roots: roots};
	}
	if (D == 0) {
		let x = -b / 2 * a;
		roots = [x];
		return {D: D, roots: [x]};
	}
	else if (D > 0) {
		let x1 = ( -b + Math.sqrt(D)) / 2 * a;
		let x2 = ( -b - Math.sqrt(D)) / 2 * a;
		roots = [x1, x2];
		return {D: D, roots: [x1, x2]};
	}	
}
// showSolutionsMessage
function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
	 console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.D === 0){
console.log(`Уравнение имеет один корень X = ${result.roots[0]}`);
	} 
	else {
		console.log (`Уравнение имеет два корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`);
	}
}

const data = {
	algebra : [4, 5, 5, 4],
	geometry : [2, 5],
	russian : [3, 3, 4, 5],
	physics : [5, 5],
	music : [ 2, 2, 5],
	english : [4, 4, 3, 3],
	poetry : [5, 3, 4],
	chemistry : [2],
	french : [4, 4] 
  };

  function getAverageScore(data) {
	for (let prop in data){
		  let marks = data[prop];
		  console.log(`${prop} : ` +  getAverageMark(marks));
		    }
        let allMarks = Object.values(data);
        let sum = 0;
        for (let i = 0; i < allMarks.length; i++ ){
        sum += getAverageMark(allMarks[i]);
        
    }
    let average = sum / allMarks.length;
        console.log(`average : ${average}`);
    }

	function getAverageMark(mark) {
		let total = 0;
		for (let i = 0; i < mark.length; i++){
		total += mark[i];
		}
	 return (total / mark.length);
	}
