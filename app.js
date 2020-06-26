var demo;
function getNum(num){
    var inputVal=document.getElementById("inputVal");
    inputVal.value+=num;
}

function clearNum(){
    var inputVal=document.getElementById("inputVal");
    demo=inputVal.value;
    inputVal.value="";
    
}
function getResult(){
    var inputVal=document.getElementById("inputVal");
inputVal.value=demo+inputVal.value;
console.log(demo);
    inputVal.value=eval(inputVal.value);
}