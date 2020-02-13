//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

//new Date('1900-10-10').lastYear()
//'1899'

let human = {
    name : 'Jim',
    eat(){
        console.log('I can eat');
    }
}

let sam = Object.create(human);
sam.age = 35;
sam.married = true;




class DateExt extends Date{

    constructor(fullDate){
        if(fullDate){
            super(fullDate);
            this.fullDate = fullDate;
        }
        else{
            super();
        }   
       
    }
      
    lastYear(){
       return this.getFullYear() - 1
        
    }
}

let today = new DateExt('1900-10-10').lastYear();

 console.log(today);


//console.log(Date.prototype);

//Date = Object.create(dateExtension);
 




let dateExtension = {
    
    lastYear(){
         return new Date().getFullYear - 1;
    }
}

