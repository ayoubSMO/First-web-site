

var boxes = document.querySelectorAll("table td"), XO = 0;
var box1 = document.getElementById("box1");
var  box2 = document.getElementById("box2");
var  box3 = document.getElementById("box3");
var  box4 = document.getElementById("box4");
var  box5 = document.getElementById("box5");
var  box6 = document.getElementById("box6");
var  box7 = document.getElementById("box7");
var  box8 = document.getElementById("box8");
var  box9 = document.getElementById("box9");
var us1turn = document.getElementById("User1_Turn");
var Message = document.getElementById("Win_message");

 function WinnerAnnim(b1,b2,b3){
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    Message.innerHTML = "You Win !"
            }

 function drawing() {
    Message.innerHTML = "It's a draw";
 }
  
            
  function Winner(){

if (box1.innerHTML !=="" & box2.innerHTML !=="" & box3.innerHTML !=="" & box4.innerHTML !=="" & box5.innerHTML !=="" & box6.innerHTML !=="" & box7.innerHTML !=="" & box8.innerHTML !=="" & box9.innerHTML !=="")   
             drawing(); 

  if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
       WinnerAnnim(box1,box2,box3);
         
  if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
       WinnerAnnim(box4,box5,box6);
             
  if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
       WinnerAnnim(box7,box8,box9);
             
  if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
       WinnerAnnim(box1,box4,box7);
             
  if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
       WinnerAnnim(box2,box5,box8);
             
  if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
       WinnerAnnim(box3,box6,box9);
             
  if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
       WinnerAnnim(box1,box5,box9);
             
  if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
       WinnerAnnim(box3,box5,box7);
            
         }   
            us1turn.innerHTML = "Player 1 Turn !" ;
   for(var i = 0; i < boxes.length; i++){
       boxes[i].onclick = function(){

  if(this.innerHTML !== "X" && this.innerHTML !== "O"){
     if(XO%2 == 0){
       this.innerHTML = "X" ;
       us1turn.innerHTML = "Player 2 Turn !" ;
       Winner();
         XO += 1;
                       
           }
      else 
         {
            this.innerHTML = "O";
           us1turn.innerHTML = "Player 1 Turn !" ;
                 Winner();
           XO += 1;  
                }
                }
                }
            }


