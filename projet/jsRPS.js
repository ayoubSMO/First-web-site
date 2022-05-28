var neem_score1 = 0 ;
var neem_score2 = 0 ;
var userCont = 0;
var computerCont = 0;
const userCont_span = document.getElementById("user-score");
const computerCont_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const Choix_User = document.getElementById("Show1");
const Choix_Computer = document.getElementById("Show2");
var cont = document.getElementById("round");
var round_cont;
var usernem1 = document.getElementById("Score1");
var usernem2 = document.getElementById("Score2");

function ChoiceOfComp() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function showcont() {
    userCont_span.innerHTML = userCont;
   computerCont_span.innerHTML = computerCont;
}

function win(userChoice, computerChoise) {
   userCont++;
   neem_score1+=20;
   neem_score2-=10;
   showcont();
   result_p.innerHTML = "You win" ;
   Choix_User.innerHTML = ShowNem(userChoice);
   Choix_Computer.innerHTML = ShowNem(computerChoise);
   usernem1.innerHTML=neem_score1;
   usernem2.innerHTML=neem_score2;
   if (neem_score1 >=80) {
    neem_score1*=2;
   }

}

function lose(userChoice, computerChoise) {
    computerCont++;
    neem_score1-=10;
    neem_score2+=20;
    showcont();
    result_p.innerHTML ="You lost";
    Choix_User.innerHTML = ShowNem(userChoice);
   Choix_Computer.innerHTML = ShowNem(computerChoise);
   usernem2.innerHTML=neem_score2;
   usernem1.innerHTML=neem_score1;
   if (neem_score2 >=80) {
    neem_score2*=2;
   }
}

function Equal(userChoice, computerChoise) {
    result_p.innerHTML ="EQUAL !" ;
    Choix_User.innerHTML = ShowNem(userChoice);
   Choix_Computer.innerHTML = ShowNem(computerChoise);

}


function ShowNem(Choix) {
    if (Choix === "r") return "ROCK";
    if (Choix === "p") return "PAPER";
    return "SCISSORS";
}

function Message(userCont , computerCont) {
    if (userCont === 10 ) return "YOU WIN , RELOAD YOUR GAME";
    if (computerCont === 10) return "YOU LOSE , RELOAD YOUR GAME !";
    return " ";
}

function game(userChoice) {
    const computerChoice = ChoiceOfComp() ;
    if (userChoice == "r" && computerChoice == "s") {
        win(userChoice, computerChoice);
    }
   else if (userChoice == "p" && computerChoice == "r") {
        win(userChoice, computerChoice); 
    }
   else if (userChoice == "s" && computerChoice == "p") {
        win(userChoice, computerChoice); 
    }
    if (userChoice == "r" && computerChoice == "p") {
        lose(userChoice, computerChoice); 
    }
   else if (userChoice == "p" && computerChoice == "s") {
        lose(userChoice, computerChoice); 
    }
   else if (userChoice == "s" && computerChoice == "r") {
        lose(userChoice, computerChoice); 
    }
    if (userChoice == "r" && computerChoice == "r") {
        Equal(userChoice, computerChoice); 
    }
   else if (userChoice == "p" && computerChoice == "p") {
        Equal(userChoice, computerChoice); 
    }
   else if (userChoice == "s" && computerChoice == "s") {
        Equal(userChoice, computerChoice); 
    }


round_cont=userCont+computerCont;
if( round_cont%3==0){
    cont.innerHTML=round_cont/3;
}

MESSAGE.innerHTML = Message(userCont , computerCont) ;
 
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });
}

main();