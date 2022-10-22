const buttons = {
    b1: document.getElementById("b1"),
    b2: document.getElementById("b2"),
    b3: document.getElementById("b3"),
    b4: document.getElementById("b4"),
    b5: document.getElementById("b5"),
    b6: document.getElementById("b6"),
    b7: document.getElementById("b7"),
    b8: document.getElementById("b8"),
    b9: document.getElementById("b9"),
};


let currentPlayer =1;

const checkProgress = () =>{
if (b1.innerText === "X" && b2.innerText === "X" && b3.innerText==="X")
{
    alert("player X wins")
}

if (b4.innerText === "X" && b5.innerText === "X" && b6.innerText==="X")
{
    alert("player X wins")
}

if (b7.innerText === "X" && b8.innerText === "X" && b9.innerText==="X")
{
    alert("player X wins")
}

if (b1.innerText === "X" && b4.innerText === "X" && b7.innerText==="X")
{
    alert("player X wins")
}

if (b2.innerText === "X" && b5.innerText === "X" && b8.innerText==="X")
{
    alert("player X wins")
}

if (b3.innerText === "X" && b6.innerText === "X" && b9.innerText==="X")
{
    alert("player X wins")
}

if (b1.innerText === "X" && b5.innerText === "X" && b9.innerText==="X")
{
    alert("player X wins")
}

if (b3.innerText === "X" && b5.innerText === "X" && b7.innerText==="X")
{
    alert("player X wins")
}




if (b1.innerText === "O" && b2.innerText === "O" && b3.innerText==="O")
{
    alert("player O wins")
}

if (b4.innerText === "O" && b5.innerText === "O" && b6.innerText==="O")
{
    alert("player O wins")
}

if (b7.innerText === "O" && b8.innerText === "O" && b9.innerText==="O")
{
    alert("player O wins")
}

if (b1.innerText === "O" && b4.innerText === "O" && b7.innerText==="O")
{
    alert("player O wins")
}

if (b2.innerText === "O" && b5.innerText === "O" && b8.innerText==="O")
{
    alert("player O wins")
}

if (b3.innerText === "O" && b6.innerText === "O" && b9.innerText==="O")
{
    alert("player O wins")
}

if (b1.innerText === "O" && b5.innerText === "O" && b9.innerText==="O")
{
    alert("player O wins")
}

if (b3.innerText === "O" && b5.innerText === "O" && b7.innerText==="O")
{
    alert("player O wins")
}

for(const key in buttons){
    const button = buttons[key];
    if (button.innerText===""){
        return;
    }
}
alert("draw match");
return reset();

};

const play = (b) =>{
    const button = buttons[b];
    if(currentPlayer === 1){
        button.innerText = "X";
        currentPlayer=2;
    }
    else{
        button.innerText = "O";
        currentPlayer=1;
    }

    button.disabled = true;
    checkProgress();
};

const reset = () =>{
    for (const key in buttons){
        const button = buttons [key];
        button.disabled = false;
        button.innerText="";
    }
};