let boxes = document.querySelectorAll('.box');
let resetbtn= document.querySelector('#reset');
let newGB = document.querySelector('#new_game');
let msgCon= document.querySelector('.mess-con');
let message = document.querySelector('#message')
let turn_O= true;




const resetGB =() =>{
    turn_O =true;
    enableBoxes();
    message.innerText="";
    msgCon.classList.add("hide");
};

const winpatten=[
    [0, 1, 2],
    [0, 3 ,6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];




boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        box.innerText=turn_O ? "O" : "X";
        turn_O=!turn_O;

        box.disabled=true;

        checkWinner();
    });
});




const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner =(winner) =>{
 message.innerText = `hello winner ${  winner }`;
 msgCon.classList.remove("hide");
 disableBoxes();
}




const checkWinner=()=> {
    for( let pattern of winpatten){
      let pos1val = boxes [pattern[0]].innerText;
      let pos2val = boxes [pattern[1]].innerText;
      let pos3val = boxes [pattern[2]].innerText;

if (pos1val != "" && pos2val !="" && pos3val != ""){
    if (pos1val == pos2val && pos2val == pos3val){
        console.log("winner");

       showWinner(pos1val);
}

    }
    }
}


newGB.addEventListener("click", resetGB);
resetbtn.addEventListener("click", resetGB);