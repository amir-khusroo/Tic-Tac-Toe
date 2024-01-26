let boxes=document.querySelectorAll(".box");
let massage=document.querySelector("#massage");
let reset=document.querySelector(".btn");
let turn=true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            massage.innerText="Turn of X";
            turn=false;
        }
        else{
            box.innerText="X";
            massage.innerText="Turn of O";
            turn=true;
        }
        box.disabled=true;
        let win=checkWin();
        count++;
        if(count==9&& !win){
            massage.innerText="Game has been Drawn!";
            massage.style.color="yellow";
        }
    })
})

let winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const checkWin=()=>{
    for(let pattern of winPattern){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1===val2 && val2===val3){
                massage.innerText=`Congratulation! ${val1} has Won`;
                massage.style.color="green";
                boxes.forEach((box)=>{
                    box.disabled=true;
                })
                return true;
            }
        }
    }
}

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    turn=true;
    massage.innerText="Turn of O";
    massage.style.color="red";
    count=0;
})