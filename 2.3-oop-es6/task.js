'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
       this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
    }

    fix(){
     this.state *= 1.5;
    }
    
    set state(state) {
        
        if (state <= 0) {
            return 0
        } else if (state > 100) {
            return this._state = 100;
        } else {
            return this._state = state;
        }
    } 

    get state() {
        return this._state;
    }    
}
    
    class Magazine extends PrintEditionItem{
        constructor(name, releaseDate, pagesCount){ 
          super(name, releaseDate, pagesCount);
          this.type = 'magazine';
        }
    }

    class Book extends PrintEditionItem{
        constructor (author, name, releaseDate, pagesCount){
            super(name, releaseDate, pagesCount);
            this.author = author;
            this.type = 'book';
        }
    }

    class NovelBook extends Book{
        constructor(author, name, releaseDate, pagesCount){
            super(author, name, releaseDate, pagesCount);
            this.type = 'novel';
        }       
    }

    class FantasticBook extends Book{
        constructor(author, name, releaseDate, pagesCount){
            super(author, name, releaseDate, pagesCount);
            this.type = 'fantastic';
        }       
    }

    class DetectiveBook extends Book{
        constructor(author, name, releaseDate, pagesCount){
            super(author, name, releaseDate, pagesCount);
            this.type = 'detective';
        }       
    }

    class Library{
        constructor(name){
            this.name = name;
            this.books = [];  
        }

        addBook(object){
            if (object.state > 30) {
                this.books.push(object); 
                return this.books      
            }
        }
         
        findBookBy(type, value) {
            for (let i in this.books){
                if (this.books[i][type] === value){
                     return this.books[i]
                }    
            }
            return null
       } 
        
        giveBookByName(bookName){
            for (let i in this.books) {
                if (this.books[i].name === bookName){
                   let removedBook = this.books.splice(i, 1);
                   return removedBook[0];
                } 
            }
          return null
        }
   }

   class StudentLog {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
    getName() {
      return this.name
    }
  
    addGrade(grade, subject) {
      if (grade > 0 && grade <= 5) {
        this.marks[subject] || (this.marks[subject] = []);
        this.marks[subject].push(grade);
      } else {
        console.log(`Вы пытались поставить оценку "${grade} "по предмету ${subject}"`);
      }
      
      return (this.marks[subject] || { length: 0 }).length;
    }
    getAverageBySubject(subject){
      if (!subject || !this.marks[subject]){
        return 0
      }
      let sum = 0;
      for (let i = 0; i < this.marks[subject].length; i++){
        sum += this.marks[subject][i]; 
      }
      return sum / this.marks[subject].length;
      }
      
      getTotalAverage(){
        let sum = 0;
        let n = this.marks.length;
        for (let i = 0; i < n; i++) {
          sum += getAverageBySubject(Object.keys(this.marks)[i]);
        }
       return sum / this.marks.length
       }
  }


            
            
    
        