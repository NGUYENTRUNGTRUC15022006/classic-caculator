const AllButtonElements = document.querySelectorAll("button");
let InputElement = document.querySelector("input");

function AddPendToDisplay(input){
    InputElement.value += input;
}
function ClearDisPlay(){
    InputElement.value="";
}
function caculator(){
    try{
        InputElement.value = eval(InputElement.value);
    }catch{
        InputElement.value = "error";
    }
}
for(let index = 0;index < AllButtonElements.length;index++){
    AllButtonElements[index].onclick = ()=>{
        const ButtonText = AllButtonElements[index].textContent;
        if(ButtonText === "C"){
            ClearDisPlay();
        }else if(ButtonText === "="){
            caculator();
        }else{
            AddPendToDisplay(ButtonText);
        }
    }
}