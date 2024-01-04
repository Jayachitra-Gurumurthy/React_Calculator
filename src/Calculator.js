import { useState } from 'react';
import './App.css';

function Calculator() {

    let symbolArray = ['+','-','/','*','.','=','','Reset'];
    const [input1,setInput1] = useState(0);
    const [input2,setInput2] = useState(0);
    
    const [display,setDisplay] = useState(0);
    const [operation,setOperation] = useState(null);
    



    function doCalculation(value,type) {

        if(type=='number') {      
            (display==0 ) ? setDisplay(value) : setDisplay(display.toString().concat(value));
            if(operation!=null)
            input2==0 ? setInput2(value) : setInput2(input2.toString().concat(value))
        }
        else 
        {
            if(value!= '=') {
                switch(value) {
                    case 'Reset' : setOperation(null);setInput1(0); setInput2(0); setDisplay(0);break;
                    case '+' : setInput1(display); setOperation('+'); setDisplay(display.toString().concat(value)); break;
                    case '-' : setInput1(display); setOperation('-'); setDisplay(display.toString().concat(value)); break;
                    case '*' : setInput1(display); setOperation('*'); setDisplay(display.toString().concat(value)); break;
                    case '/' : setInput1(display); setOperation('/'); setDisplay(display.toString().concat(value)); break;
                    case '.' : setDisplay(display.toString().concat(value)); break; 
                }
            }
            else {
                switch(operation) {
                    case '+' : { let temp = parseFloat(input1) + parseFloat(input2); console.log(input1,input2,display); setDisplay(temp); break; }
                    case '-' : { let temp = parseFloat(input1) - parseFloat(input2); console.log(input1,input2,display); setDisplay(temp); break; }
                    case '*' : { let temp = parseFloat(input1) * parseFloat(input2); console.log(input1,input2,display); setDisplay(temp); break; }
                    case '/' : { let temp = parseFloat(input1) / parseFloat(input2); console.log(input1,input2,display); setDisplay(temp); break; }
                }
                setOperation(null);
                setInput1(0); setInput2(0);
            }
           
        }
    

    }
        
return  (
<div> 
<h1 className='text-primary'> Simple Calculator App </h1>
<div className="container"> 
<input type='text' name="resultDisplayText"  value= {display} style={{fontWeight:'bold',height:'70px', width:'90%',paddingLeft:'15px', display:'block',margin:'auto',border:'none'}} readOnly/>
{
   <div className='calc-grid'> 
    {Array.from(new Array(10),(z,y)=>y).map(item=> <button className='calc-button' key={item} onClick={() => doCalculation(item,'number')} > {item}</button> ) }
    {symbolArray.map(item => <button className='calc-button' key={item} onClick={() => doCalculation(item,'symbol')} > {item}</button>  ) }
    </div>
}

</div>
</div>
)
}

export default Calculator;