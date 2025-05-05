let firstNum=null;
let seconedNum=null;
let operation =null;
let total;


// catched ellemnets 
const buttons =document.querySelectorAll('.button'); // because its not an id 
const calculator = document.querySelector('#calculator');
const show = document.querySelector('.display');
show.innerText=0;



//

calculator.addEventListener('click',(event)=>{
    console.log(event.target.innerText);

    if(event.target.classList.contains('number')){

    if (firstNum === null && operation === null && seconedNum === null){
        firstNum =event.target.innerText;
        show.innerText=firstNum;
    }
    else if( firstNum !== null && operation === null && seconedNum ===null){
        if (firstNum===total)firstNum =event.target.innerText;
        show.innerText =seconedNum
    }
    else if (firstNum!== null && operation!== null && seconedNum === null){
        seconedNum=event.target.innerText;
        show.innerText = seconedNum
    }
    else if ( firstNum !== null && operation !== null && seconedNum !== null){
        seconedNum+=event.target.innerText;
        show.innerText =seconedNum
    }
     console.log("firstNumber =", firstNum, "seconedNumber =" , seconedNum);
    }

 if (event.target.classList.contains('operator')){
if(event.target.innerText==='C'){
    show.innerText =0;
    firstNum = null;
    operation = null ;
    console.log("clear");
}
else {
    operation=event.target.innerText;
    console.log('selected operation'+ operation); 
}
}
if ( event.target.innerText ==='='){
     

    firstNum =firstNum*1
    seconedNum =seconedNum *1
     
    if (operation === '+') {
        total =firstNum +seconedNum;
    }
    else if (operation === '-'){
        total = firstNum =seconedNum;
    }
    else if (operation === '*'){
        total = firstNum*seconedNum;
    }
    else if ( operation === '/'){
        total = firstNum / seconedNum;
    }


    show.innerText=total;
    firstNum=total;
    operation = null;
    seconedNum= null;
}
});
