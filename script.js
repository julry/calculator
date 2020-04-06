const result = document.querySelector('.result');
let newNumber = true;
let total = 0;
const calculation = {
    value: "0",
    operator: null
};

function calculate(operator) {
    switch (operator){
        case "+":
            total += +calculation.value;
            break;
        case "-":
            total -= +calculation.value;
            break;
        case "/":
            total /= +calculation.value;
            break;
        case "x":
            total *= +calculation.value;
            break;
        case "=":
            break;
        default:
            total = result.textContent;
            break;
    }
}


document.querySelector('.numbers').addEventListener('click', function(event){
    let text = result.innerText;
    if (event.target.innerText == ",") 
    {
        if (!text.includes(","))
          result.textContent += event.target.innerText;
    } 
    else {
        if ((text == "0")||(newNumber)){
            
            calculation.value =  event.target.innerText;
            newNumber = false;
            console.log("total:"+total);
        }
        else 
        { 
            calculation.value += event.target.innerText;    
        }
    }
    result.textContent = calculation.value;
});

document.querySelector('.secondOperator').addEventListener('click', function(event){

    switch  (event.target.innerText){
        case "C": 
            calculation.value ="0";
            calculation.operator ="";
            total = 0;
            break;
        case "+-":
            calculation.value  = 0 - +calculation.value;
            break;
        default: break;
    }
    result.textContent = calculation.value;
   
});

document.querySelector('.operators').addEventListener('click', function(event){
    if (total ==0){
        total = +calculation.value;
    }
    newNumber = true;
    if (calculation.operator != null){
        calculate(calculation.operator);
    }

    calculation.operator = event.target.innerText;

    if  (event.target.innerText == "="){
        result.textContent = total;
        calculation.operator = null;
    }
        
});
