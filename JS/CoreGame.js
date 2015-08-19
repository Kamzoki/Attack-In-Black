// This is where Game loop runs

//Drawing tools:-
var layer1 , ctx1 , layer2 , ctx2 ;
//menu , levels selecting , and entering buttons:-
var menu , levels , intro;
//Divs:-
var start_Btn , htp_Btn , about_Btn , exit_Btn , lvl1_Btn;

function  enterFun() {
	// Enter button function
	menu.style.display = "block";
	intro.style.display = "none";
}

function startFun(){
	//Start buton function
	menu.style.display="none";
	levels.style.display="block";
}


function init () {
	// Initilaizing
	layer1 = document.getElementById('Layer1');
	layer2 = document.getElementById('Layer2');
	ctx1 = layer1.getContext('2d');
	ctx2 = layer2.getContext('2d');
	//-------------------------------------------
	start_Btn = document.getElementById('Start');
	htp_Btn = document.getElementById('Htp');
	about_Btn = document.getElementById('About');
	exit_Btn = document.getElementById('Exit');
	lvl1_Btn = document.getElementById('Lvl1');
	//------------------------------------------- 
	menu = document.getElementById('Menu'); 
	levels = document.getElementById('Levels'); 
	intro = document.getElementById('Intro'); 
}