P1=localStorage.getItem("player1");
P2=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=P1+":";
document.getElementById("player2_name").innerHTML=P2+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn-"+P1;
document.getElementById("player_answer").innerHTML="answer turn-"+P2;
function send(){
   word=document.getElementById("word").value;
   lowerword=word.toLowerCase();
   console.log(lowerword);
letter2=lowerword.charAt(1);
   console.log(letter2);
    middlenum=Math.floor(lowerword.length/2);
    middleletter=lowerword.charAt(middlenum);
    console.log(middleletter)
   lastnum= lowerword.length-1;
lastletter=lowerword.charAt(lastnum);
console.log(lastletter);
}