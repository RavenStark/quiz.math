name1 = localStorage.getItem("player1_name");
name2 = localStorage.getItem("player2_name");
console.log(name1 + name2);

score1 = 0;
score2 = 0;


function loadBody() {

document.getElementById("player1_name").innerHTML = name1 + ": ";
document.getElementById("player2_name").innerHTML = name2 + ": ";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("questioning").innerHTML = "Questioning: " + name1;
document.getElementById("answering").innerHTML = "Answering: " + name2;
}

function buttonSend() {

label = " <h3 id='theQuestion'>" + "Question: Will be put later" + "</h3>" + "<br>" ;
input = "<input type='text' placeholder='Answer'> <br>";
btnCheck = "<button class='btn btn-info' onclick='checkAnswer();'>CHECK</button>";
divOutput = label + input + btnCheck;
document.getElementById("output").innerHTML = divOutput;

noOne = document.getElementById("input1").value;
noTwo = document.getElementById("input2").value;
document.getElementById("theQuestion").innerHTML = "Question: " + noOne + " Multiplied By " + noTwo;

}


