var player1="";
var player2="";
var secondPlayer1="";
var secondPlayer2="";

var imgs1=["$('#img1')","$('#img2')","$('#img3')","$('#img4')","$('#img5')","$('#img6')"];
var imgs2=["$('#img7')","$('#img8')","$('#img9')","$('#img10')","$('#img11')","$('#img12')"];

var toss=function(){
  return Math.floor(Math.random() * 6) + 1;
}
function Roll(turn){
  this.roll=0;
  this.current=0;
  this.scores=0;
  this.turn=turn;
}
Roll.prototype.roll1=function(){
  if(this.roll===1){
    this.current=0;
    alert("Sorry,you rolled a 1! Your turn is over! Kindly pass the mouse to your opponent.")
  }
  else{
    this.current+=this.roll;
  }
}
Roll.prototype.hold=function(){
  this.scores+=this.current;
  this.current=0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}
Roll.prototype.winnerCheck=function(){
  if(this.current>=100){
    alert("You are the winner!");
    $("#winner").show();
  }
}
Roll.prototype.newGame=function(){
  this.roll=0;
  this.current=0;
  this.scores=0;
}



$(document).ready(function(){
