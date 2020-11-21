'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
       this.name = name; 
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
    }
    set state(value) {
        if (value < 0){
            return 0
        } else if (value > 100){
            return 100;
        } else {
            return this._state = value;
        }
    }  
    get state(){
        return this._state;
    }  
    fix(){
    let fixedState = this.state * 1.5;
    if (this.state > 0 && this.state < 100) {
        this.state = fixedState; 
        
    }  
    return this.state
}
}
    
    class Magazine extends PrintEditionItem{
        constructor(name, author, releaseDate, pagesCount){ 
          super(name);       
           this.type = 'magazine';
        }
    }
    class Book extends PrintEditionItem{
        constructor (author, name, releaseDate, pagesCount){
            super(name);
            this.author = author;
            this.releaseDate = releaseDate;
            this.pagesCount = pagesCount;
            this.type = 'book';
        }
    }
    class NovelBook extends Book{
        constructor(author, name){
            super(author, name);
            this.type = 'novel';
        }       
    }
    class FantasticBook extends Book{
        constructor(author, name, releaseDate, pagesCount){
            super(author, name, releaseDate, pagesCount);
            this.type = 'fantastik';
        }       
    }
    class DetectivBook extends Book{
        constructor(author, name, releaseDate, pagesCount){
            super(author, name, releaseDate, pagesCount);
            this.type = 'detective';
        }       
    }
    

