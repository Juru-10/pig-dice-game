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
  $("#rule").click(function(event){
    $("#rules").toggle();
  });
  $("button#play").click(function(event){
    $("#rules").hide();
    $("#start").hide();
    $("#options").show();
  });

  player1=new Roll(true);
  player2=new Roll(false);
  secondPlayer1=new Roll(true);
  secondPlayer2=new Roll(false);

  $("#solo").click(function(event){
    $("#options").hide();
    $(".machine").show();

    $("#easy").click(function(event){
      $(".machine").hide();
      $("#dices").show();
      $("#back").show();
      $("#back").click(function(){
        $("#options").show();
        $("#dices").hide();
      });
    });

    $("#hard").click(function(event){
      $(".machine").hide();
      $("#dices").show();
      $("#back").show();
      $("#back").click(function(){
        $("#options").show();
        $("#dices").hide();
      });
    });

    $("#one").click(function(){
      $("#player2").trigger(function(event){
        player2.roll=toss();
        $("#img").show(function(event){

        });
        $("#roller2").text(player2.roll);
        player2.roll1();
        $("#curr2").text(player2.current);
      });
    });

    $("#two").click(function(event){
      $("#player2").trigger(function(event){
        player2.roll=toss();
        secondPlayer2.roll=toss();
        $("#img").show(function(event){
          $(parseInt("img id"))=toss;
        });
        $("#roller2").text(player2.roll);
        $("secondRoller2").text(secondPlayer2.roll);
        player2.roll1();
        secondPlayer2.roll1();
        $("#curr2").text(player2.current+secondPlayer2.current);
      });
    });

    $("#holder2").click(function(event){
      player2.hold();
      secondPlayer2.hold();
      $("#rslt2").text(player2.scores);
      $("#curr2").empty();
      $("#roller2").empty();
      $("#secondRoller2").empty();
      player2.winnerCheck();
    });
  });

  $("#duo").click(function(event){
    $("#options").hide();
    $("#dices").show();
    $("#back").show();
    $("#back").click(function(){
      $("#play").show();
      $("#dices").hide();
    });

    $("#one").click(function(event){
      $("#player2").click(function(event){
        player2.roll=toss();
        $("#img").show(function(event){
          $(parseInt("img id"))=toss;
        });
        $("#roller2").text(player2.roll);
        player2.roll1();
        $("#curr2").text(player2.current);
      });
    });

    $("#two").click(function(event){
      $("#player2").click(function(event){
        player2.roll=toss();
        secondPlayer2.roll=toss();
        $("#img").show(function(event){
          $(parseInt("img id"))=toss;
        });
        $("#roller2").text(player2.roll);
        $("secondRoller2").text(secondPlayer2.roll);
        player2.roll1();
        secondPlayer2.roll1();
        $("#curr2").text(player2.current+secondPlayer2.current);
      });
    });
  });



  
