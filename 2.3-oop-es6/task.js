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
            this.type = 'fantastiс';
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
                   this.books.splice(i, 1);
                   return this.books[i]
                } 
            }
          return null
        }
   }

   class StudentLog{
    constructor (name){
        this.name = name;
        this.subject = [];
    }
    getName(){
        return this.name
    }
    addGrade(grade, subject) {
      if (grade > 0 && grade <= 5){
       this.subject.push(grade);
       return this.subject.length
       }
     console.log(`Вы пытались поставить оценку "${grade} "по предмету ${subject}"`); 
     return this.subject.length
    }
   }


            
            
    
        