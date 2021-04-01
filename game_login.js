var player1_name
var player2_name
function Login(){
player1_name=document.getElementById("player_1_input").value;
player2_name=document.getElementById("player_2_input").value;
localStorage.setItem("store_player1", player1_name);
localStorage.setItem("store_player2", player2_name);
window.location="game_page.html"
}