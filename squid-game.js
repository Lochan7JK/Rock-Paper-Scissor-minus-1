let userScore = 0;
let opponentScore = 0;
let user;
let opponent;

let choices = ["rock", "paper", "scissors"];

let userChoice0;
let userChoice1;
let opponentChoice0;
let opponentChoice1;
let instruction;

window.onload = function() {
    for(let i = 0; i < 3; i++){
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "./images/" + choices[i] + ".png";
        document.getElementById("choices").append(choice);
        choice.addEventListener("click", selectChoice);
    }

    userChoice0 = document.getElementById("user-choice0");
    userChoice1 = document.getElementById("user-choice1");
    opponentChoice0 = document.getElementById("opponent-choice0");
    opponentChoice1 = document.getElementById("opponent-choice1");

    userChoice0.addEventListener("click", minusOne);
    userChoice1.addEventListener("click", minusOne);

    instruction = document.getElementById("instruction");
}

function selectChoice(){
    if(userChoice0.src.includes("empty")){
        userChoice0.src = "./images/" + this.id + ".png";
    }
    else{
        userChoice1.src = "./images/" + this.id + ".png";

        for(let i = 0; i < 2; i++){
            let random = Math.floor(Math.random() * 3);
            let opponentChoice = choices[random];
            document.getElementById("opponent-choice" + i).src = "./images/" + opponentChoice + ".png";
        }

        document.getElementById("choices").hidden = true;
        document.getElementById("instructions").src = "./images/squid-game-font-1.png";
        document.getElementById("instructions").style.width = "220px";
    }
}

function minusOne(){

    if(!userChoice0.src.includes("empty") && !userChoice1.src.includes("empty") && !user && !opponent){
        if(this == userChoice0){
            userChoice1.hidden = true;
        }
        else {
            userChoice0.hidden = true;
        }

        let n = Math.floor(Math.random() * 2);
        let opponentChoice;
        if(n == 0){
            opponentChoice = opponentChoice0;
            opponentChoice1.hidden = true;
        }
        else{
            opponentChoice = opponentChoice1;
            opponentChoice0.hidden = true;
        }

        // assign final value to user and opponent
        // console.log(this.src);
        // console.log(opponentChoice.src);
        for(let i = 0; i < choices.length; i++){
            if(getImgName(this).includes(choices[i])){
                user = choices[i];
            }
            if(getImgName(opponentChoice).includes(choices[i])){
                opponent = choices[i];
            }
        }
        // console.log(user);
        // console.log(opponent);

        checkWinner();
    }
}

function checkWinner(){
    if(user != opponent){
        if(user == "rock" && opponent == "paper")
            opponentScore++;

        if(user == "rock" && opponent == "scissors")
            userScore++;

        if(user == "paper" && opponent == "rock")
            userScore++;

        if(user == "paper" && opponent == "scissors")
            opponentScore++;

        if(user == "scissors" && opponent == "rock")
            opponentScore++;

        if(user == "scissors" && opponent == "paper")
            userScore++;
    }

    
    if(userScore < 3 && opponentScore < 3){
        document.getElementById("user-score").innerText = userScore;
        document.getElementById("opponent-score").innerText = opponentScore;
        setTimeout(clearChoices, 1000);
    }
    else{
        startAgain();
    }
}

function startAgain(){
    if(userScore == 3){
        document.getElementById("user-score").innerHTML = "You Won!"
    }
    if(opponentScore == 3){
        document.getElementById("opponent-score").innerHTML = "Opponent Won... KILL🔪 The Other Player!!"
    }
}


function clearChoices(){
    user = null;
    opponent = null;
    opponentChoice0.src = "./images/empty.png";
    opponentChoice1.src = "./images/empty.png";
    userChoice0.src = "./images/empty.png";
    userChoice1.src = "./images/empty.png";

    opponentChoice0.hidden = false;
    opponentChoice1.hidden = false;
    userChoice0.hidden = false;
    userChoice1.hidden = false;

    document.getElementById("choices").hidden = false;
    document.getElementById("instructions").src = "./images/squid-game-font2.png";
    document.getElementById("instructions").style.width = "410px";
}


function getImgName(img){
    let imgSrcArray = img.src.split("/");
    // console.log(imgSrcArray);
    return imgSrcArray[imgSrcArray.length - 1];
}
