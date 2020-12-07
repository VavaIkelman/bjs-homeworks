function parseCount(x) {
    let num = Number.parseInt(x);
      if (num != x) {
          throw new Error (`Невалидное значение`);
      }
  return num
  }
  
  function validateCount(x) {
      try {
          return parseCount(x);
      } catch (e) {
            return e
      }    
  }

class Triangle{
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ( a + b <= c || a + c <= b || b + c <= a ) 
          throw new Error(`Треугольник с такими сторонами не существует`);
    }

    getPerimeter() {
        return this.a + this.b + this.c
    }

    getArea() {
        let p = (this.getPerimeter() / 2 );
        let s = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }    
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
      } catch(e) {
        return {
            getArea() {
              return 'Ошибка! Треугольник не существует'
            },
            getPerimeter() {
              return 'Ошибка! Треугольник не существует'
            }
          }
      }   
}   

