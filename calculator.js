import { LightningElement } from 'lwc';
export default class Calculator extends LightningElement {
firstNumber;
secondNumber;
sumofTwoNumbers;
changeFirstNumber(event){
    console.log("First Number :: "+event.target.value);
    this.firstNumber=event.target.value;
    }
changeSecondNumber(event){
    console.log("Second Number :: "+event.target.value);
    this.secondNumber=event.target.value;
}
addNumbers (event){
    const sum= parseInt(this.firstNumber)+parseInt(this.secondNumber);
    this.sumofTwoNumbers=sum;
    alert(":: sum ::"+sum);
}
subNumbers (event){
    const sub= parseInt(this.firstNumber)-parseInt(this.secondNumber);
    this.subofTwoNumbers=sub;
    alert(":: sub ::"+sub);
}
mulNumbers (event){
    const mul= parseInt(this.firstNumber)*parseInt(this.secondNumber);
    this.mulofTwoNumbers=mul;
    alert(":: mul ::"+mul);
}
divNumbers (event){
    const div= parseInt(this.firstNumber)/parseInt(this.secondNumber);
    this.divofTwoNumbers=div;
    alert(":: div ::"+div);
}
}