let btns=document.querySelectorAll(".btn");
let  winMsg=document.querySelector(".winMsg");
let p=document.querySelector("#para");
let reset=document.querySelector("#reset");
let startNewGame=document.querySelector("#newBt");

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
];

//making button clickable and text insert 
let turn=true;
for(let btn of btns){
    btn.addEventListener("click",(checkTurn)=>{
        if(turn ==true){
            btn.innerText="X";
            btn.style="color:aqua; cursor:default;";
            turn=false;
            btn.disabled=true;
        }
        else{
            btn.innerText="O";
            btn.style="color:red; cursor:default;";
            turn=true;
            btn.disabled=true;
        }
        checkWinner();
    });
}

//check winner function
function checkWinner(){
    for(let pattern of winPattern){
        let pos1=btns[pattern[0]].innerText;
        let pos2=btns[pattern[1]].innerText;
        let pos3=btns[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                winMsg.style="visibility:visible;";
                disableBtn();
                p.innerText=`${pos3} is won`;
            }
        }
    }
}
//disable button function 
const disableBtn=()=>{
    for(let btn of btns){
        btn.disabled=true;
        btn.style="cursor:default;";
    }
}
const enableBtn=()=>{
    for(btn of btns){
        btn.disabled=false;
        btn.style="cursor:pointer;";
    }
}

//resetBtn
reset.addEventListener("click",()=>{
    turn=true;
    for(btn of btns){
        btn.innerText="";
    }
    enableBtn();
    winMsg.style="visibility:hide;";
});
//new game start button
startNewGame.addEventListener("click",()=>{
    turn=true;
    for(btn of btns){
        btn.innerText="";
    }
    enableBtn();
    winMsg.style="visibility:hide;";
})
const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.textContent = '★';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.fontSize = `${Math.random() * 10 + 5}px`;
      star.style.animationDuration = `${Math.random() * 3 + 1}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      document.body.appendChild(star);
    }