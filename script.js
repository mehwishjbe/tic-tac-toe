let boxes = document.querySelectorAll(".box");

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }else{
            box.innerText ="X";
            turnO = true;
        }
    });
});