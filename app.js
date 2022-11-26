let string="";
const buttons = document.querySelectorAll("button");


let result = document.getElementById("input");



buttons.forEach(choice=>choice.addEventListener('click',(e)=>{
if( e.target.innerHTML=="CALCULATE !"){
    string = eval(string);
    result.value = string;
}
 else if( e.target.innerHTML=="C"){
    string=" "
    result.value =string;
}
else{
string+= e.target.innerHTML;
result.value = string;}
}))