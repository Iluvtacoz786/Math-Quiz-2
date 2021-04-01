var player1_name=localStorage.getItem("store_player1");
var player2_name=localStorage.getItem("store_player2");
var player1_score=0;
var player2_score=0;
var answer_player=player2_name;
var question_player=player1_name;
document.getElementById("name1").innerHTML=player1_name+" : ";
document.getElementById("name2").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("question_name").innerHTML=player1_name;
document.getElementById("answer_name").innerHTML=player2_name;
function Send(){
    get_word=document.getElementById("word_input").value;
    word=get_word.toLowerCase();
    console.log(word);
    first_letter=word.charAt(1);
    console.log(first_letter);
    middle_letter=Math.floor(word.length/2);
    middle_letter=word.charAt(middle_letter)
    console.log(middle_letter);
    last_letter=word.length-1;
    last_letter=word.charAt(last_letter);
    console.log(last_letter);
    remove_1=word.replace(first_letter,"_");
    remove_2=remove_1.replace(last_letter,"_");
    remove_3=remove_2.replace(middle_letter,"_")
    console.log(remove_1);
    console.log(remove_2);
    console.log(remove_3);
    document.getElementById("output").innerHTML=remove_3+"<br><input id='output_input' class='form-control'><br><button onclick='Check()' class='btn btn-success'>Check Word</button>";
    document.getElementById("word_input").value=""
}
function Check(){
    get_answer=document.getElementById("output_input").value;
    answer=get_answer.toLowerCase();
    if(answer==word){
        if(answer_player==player1_name){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            answer_player=player2_name;
            question_player=player1_name;
            document.getElementById("answer_player").innerHTML=answer_player;
            document.getElementById("question_player").innerHTML=question_player;
        }
        else if(answer_player==player2_name){
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            answer_player=player1_name;
            question_player=player2_name;
            document.getElementById("answer_player").innerHTML=answer_player;
            document.getElementById("question_player").innerHTML=question_player;

        } 
    }
    else if(answer!=word){
        if(answer_player==player1_name){
            answer_player=player2_name;
            question_player=player1_name;
            document.getElementById("answer_player").innerHTML=answer_player;
            document.getElementById("question_player").innerHTML=question_player;
        }
        else if(answer_player==player2_name){
            answer_player=player1_name;
            question_player=player2_name;
            document.getElementById("answer_player").innerHTML=answer_player;
            document.getElementById("question_player").innerHTML=question_player;
        
    }
}
document.getElementById("output").innerHTML=""
}

