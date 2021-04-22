import React,{useState,useEffect} from 'react';
import ButtonNum from './components/button';


const Calc = () => {
    const [n,setN] = useState(0);
    const [k,setK] = useState(0);
    const [a,setA] = useState();
    const [b,setB] = useState();
    const [op,setOp] = useState();
    const [r,setR] = useState(false);
    const [p,setP] = useState();

    function fract() {
        setP(1);
    }

    function addop() {
        if (a) {
            res();
            if (op=='add')
            {
            setA(a+n);
            }
            if (op=='sub') {
                setA(a-n)
            }
            if (op=='mul') {
                setA(a*n)
            }
            if (op=='div') {
                setA(a/n)
            }
        }
        else {
        setA(n);
         setN(0)
        }
       
        setOp('add');
        setP()
        
    };
    function subop() {
        if (a) {
            res();
            if (op=='sub'){
            setA(a-n);
            }
            if (op=='add')
            {
            setA(a+n);
            }
            if (op=='mul') {
                setA(a*n)
            }
            if (op=='div') {
                setA(a/n)
            }
        }
        else {
        setA(n);
        setN(0)
        };
        setOp('sub');
        setP()

    };
    function mulop() {
        if (a) {
            res();
            if (op=='add')
            {
            setA(a+n);
            }
            if (op=='sub') {
                setA(a-n)
            }
            if (op=='mul') {
                setA(a*n)
            }
            if (op=='div') {
                setA(a/n)
            }
        }
        else{
            setA(n);
            setN(0)
        };
        setOp('mul');
        setP()
    };
    function divop() {
        if (a) {
            res();
            if (op=='add')
            {
            setA(a+n);
            }
            if (op=='sub') {
                setA(a-n)
            }
            if (op=='mul') {
                setA(a*n)
            }
            if (op=='div') {
                setA(a/n)
            }
        }
        else {
            setA(n);
            setN(0)
        };
        setOp('div');
        setP()
    };
    function res() {
        if (a) {
        if (op=='add') {
            setN(a+n);
        }
        if (op=='sub') {
            setN(a-n);
        }
        if (op=='mul') {
            setN(a*n);
        }
        if (op=='div') {
            setN(a/n);
        }
        setA();
        setR(true);
        setOp();
        setP()
    }

    }
    function reset() {
        setN(0);
        setA();
        setOp();
        setR(false);
        setP()
    };
    return (
    <React.Fragment>
<h1>Калькулятор</h1>
<br/>
<form id="calc1">
    <input type="text" value={n} />
    <br/>
<ButtonNum caption={1} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+1)/Math.pow(10,p));
            setP(p+1)
        }
        else{
        setN(n*10+1)}
    }
    else {
        setN(1);
        setR(false)
    }}}/>
<ButtonNum caption={2} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+2)/Math.pow(10,p));
            setP(p+1)
        }
        else {
            setN(n*10+2)
        }
    }
    else {
        setN(2);
        setR(false)
    }}}/>
<ButtonNum caption={3} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+3)/Math.pow(10,p));
            setP(p+1)
        }
        else {
            setN(n*10+3)}
        }
    else {
        setN(3);
        setR(false)
    }}}/>
<br/>
<ButtonNum caption={4} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+4)/Math.pow(10,p));
            setP(p+1)
        }
        else {
            setN(n*10+4)
        }
    }
    else {
        setN(4);
        setR(false)
    }}}/>
<ButtonNum caption={5} onClick={()=>{
    if(!r) {
        if (p) {
        setN((n*Math.pow(10,p)+5)/Math.pow(10,p));
        setP(p+1)
    }
    else {
        setN(n*10+5)
        }
    }
    else {
        setN(5);
        setR(false)
    }}}/>
<ButtonNum caption={6} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+6)/Math.pow(10,p));
            setP(p+1)
        }
    else {
        setN(n*10+6)}
    }
    else {
        setN(6);
        setR(false)
    }}}/>
<br/>
<ButtonNum caption={7} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+7)/Math.pow(10,p));
            setP(p+1)
        }
        else {
            setN(n*10+7)
        }
    }
    else {
        setN(7);
        setR(false)
    }}}/>
<ButtonNum caption={8} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+8)/Math.pow(10,p));
            setP(p+1)
        }
        else {
            setN(n*10+8)
        }
    }
    else {
        setN(8);
        setR(false)
    }}}/>
<ButtonNum caption={9} onClick={()=>{
    if(!r) {
        if (p) {
            setN((n*Math.pow(10,p)+9)/Math.pow(10,p));
            setP(p+1)
        }
        else {
        setN(n*10+9)
        }
    }
    else {
        setN(9);
        setR(false)
    }}}/>
<br/>
<ButtonNum caption={0} onClick={()=>{
    if(!r) {
        if (p) {
            setP(p+1)
        }
        else {setN(n*10)}}
    else {
        setN(0);
        setR(false)
    }}}/>
<ButtonNum caption={'.'} onClick={fract}/>
<ButtonNum caption={'C'} onClick={reset}/>
<br/>
<ButtonNum caption={'+'} onClick={addop}/>
<ButtonNum caption={'-'} onClick={subop}/>
<ButtonNum caption={'*'} onClick={mulop}/>
<ButtonNum caption={'/'} onClick={divop}/>
<br/>
<ButtonNum caption={'='} onClick={res}/>
</form>
</React.Fragment>
)
;
}
export default Calc;