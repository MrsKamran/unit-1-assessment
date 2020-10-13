
var showResult = document.getElementsByTagName("h1")[0];
var addButton = document.getElementById("add-button");
var subtractButton = document.getElementById("subtract-button");
var numberInput = document.getElementById("number-input");

var result = 0;

addButton.addEventListener('click', doAddition);
subtractButton.addEventListener('click', doSubtraction);


function doAddition(){
    result = result + parseInt(numberInput.value) ;
    displayResult()
}

function doSubtraction(){
    result = result - parseInt(numberInput.value) ;
    displayResult()
}

function displayResult(){
    showResult.innerText = result;
    if(result<0){
        showResult.style.color = "red";
     }
     else{
        showResult.style.color = "black";
     }
}

