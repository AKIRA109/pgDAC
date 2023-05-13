let number1;
let number2;
let operator;
let result;


let flag=false;
function enterNo(num) {

    if( num=='+' ||num=='-' ||num=='*' ||num=='/'){
        flag=true;
        //operator=num;
        let op=document.getElementById("operator");
        op.innerText=num;
        operator=num;
    }
   
    console.log("operator",operator);


    if (flag) {
        let input1=document.getElementById("screen2");//<div id="screen2"></div>   
        console.log(input1); 
        number2 ="" +input1.innerText + num;    
        
        input1.innerText=number2;
        console.log("number2",number2); 
    }
    else{        
        let input=document.getElementById("screen");
        input.value = "" +input.value +  num;
        number1=input.value;
        console.log("number1",number1);       
    }
}
function cal(cal){
    switch (operator) {
        case '+':
            result=parseInt(number1) + parseInt(number2); 
            //console.log("number2",number2)
            document.getElementById("screen").value=result;
            //console.log("number",result)
            break;
        case '-':
            result=parseInt(number1) +parseInt(number2); 
            //console.log("number2",number2)
            document.getElementById("screen").value=result;
            //console.log("number",result)
            break;
        default:
            break;
    }
}