function parseCount(x) {
    if (Number.parseInt(x) !== parseInt(x)) {
        const e = new Error (`Невалидное значение`);
        throw e;
    }
return Number.parseInt(x)
}

function validateCount(x) {
    try {
        return parseCount(x);
    } catch (e) {
         return new Error (`Невалидное значение`);   
    }    
}

class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
      if ( ((this.a + this.b) > this.c) && ((this.a + this.c) > this.b) && ((this.b + this.c) > this.a) ) {
          throw e = new Error(`Треугольник с такими сторонами не существует`);
          return e;
      }
    }
    getPerimeter(a, b, c) {
        return this.a + this.b + this.c
    }
    getArea(a, b, c) {
        let p = (getPerimeter(a, b, c) / 2 );
        let s = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c));
        return s.toFixed(3)
    }
}
function getTriangle(a, b, c) {
try {
    new Triangle(a, b, c);
} catch (e){
// this.getPerimeter(){
//     return `Ошибка! Треушольник не существует`
// }
// this.getArea(){
//     return `Ошибка! Треушольник не существует`
// }
}
}