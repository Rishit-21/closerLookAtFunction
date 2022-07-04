 'use strict';
const bookings =[];
const creatbooking = function(flightNum,numPassengers=1,price= 199*numPassengers){
    const booking= {
        flightNum,
        numPassengers,
        price,

    }
    console.log(booking);
    bookings.push(booking);
}

creatbooking('LH123');
creatbooking('LH123',2,800);
creatbooking('LH123',2);
creatbooking('LH123',5);
creatbooking('LH123',undefined,1000);


const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord = function(str){
    const[first,...others]=str.split(' ');
    return[first.toUpperCase(),...others].join(' ');
}

const transformer = function(str,fn){
    console.log(`Orignal string: ${str}`);
    console.log(`transformed string: ${fn(str)}`);
    //console.log(`transformed string: ${fn(str)}`);
    console.log(`transformed string: ${fn.name}`);


};
 transformer('JavaScript is the best!',upperFirstWord);
 transformer('JavaScript is the best',oneWord);

 //
//  const high5 = function(){
//     console.log('👍');
//  };
//  document.body.addEventListener('click',high5);
//  ['jonas','marthe','adam'].forEach(high5)

 const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    bookings: [],

    book(flightNum,name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`

        );
        this.bookings.push({flight:`${this.iataCode}${flightNum} `,name});
    
    }

 }

 lufthansa.book(239,'Jonas Schmedtmann');
 lufthansa.book(635,'John Smith');
 console.log(lufthansa);

 const eurowing = {
    airline: 'Eurowing',
    iataCode:'Ew',
    bookings:[],
 };

 let book = lufthansa.book;

 book.call(eurowing,23,'Sarah Williams');
console.log(eurowing);

book.call(lufthansa,239,'Marry Copper')
console.log(lufthansa)

const bookEW = book.bind(eurowing);
const bookLH=book.bind(lufthansa);

bookEW(23,'RIshit Kalyani');
bookLH(27,'RIshit Kalyani');

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate,value)=> value+value+rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const  addTaxRate =  function(rate){
    return function (value){
        return value + value+ rate;
    };
};
const addVAT2 =addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

(function (){
    console.log('this will never run again');
    const isPrivate = 23;
})();

(()=> console.log('this will nver run again'))();

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    };
};

const h = function (){
    const b = 777;
    f = function(){
        console.log(b*2);
    };
}

g();
f();
h();
f();

const boardPassengers = function(n,wait){
    const perGroup = n/3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} pasanger`);
        console.log(`there are 3 group,each with ${perGroup} passanger`);
    },wait*1000);

    console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 1000;
boardPassengers(180,3);


//// coding challange
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    registerNewAnswer(){
        let ans = Number(prompt(`${this.question} \n ${this.options.join('\n')}`));
        ans>=0 &&ans<=this.answers.length && typeof ans=='number'&&  this.answers[ans]++;
                
                
            
        

        console.log(this.answers)
        this.displayResults();
    },
    displayResults(){
        let dis = Number(prompt('chosse one way in which u wanna seee result of poll \n 1: String \n 2: array \n 3:default'))
        switch(dis){
            case 1:
                console.log(`poll results are ${this.answers.join(',')}`)
                break;
            case 2:
                console.log(this.answers)
                break;
            case 3:
                console.log(this.answers)
                break;
            default:
                console.log(this.answers)
                console.log(`poll results are ${this.answers.join(',')}`)
        }

    }
    };
    document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))
    // poll.registerNewAnswer();
    //poll.displayResults();
    poll.displayResults.call({answers:[5,3,2]});

    //coding challange 2

    document.querySelector('body').addEventListener('click',(function(){
        const header = document.querySelector('h1');
        header.style.color = 'blue';
    }))  
    
    

