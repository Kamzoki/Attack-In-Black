// This is where Game loop runs

//Drawing tools:-
var layer1 , ctx1 , layer2 , ctx2 ;
//menu , levels selecting , and entering buttons:-
var menu , levels , intro;
//Divs:-
var start_Btn , htp_Btn , about_Btn , exit_Btn , lvl1_Btn;
//Images needed:-
var BG1 , BG2 , Lvl1 ;
//Art variable:-
var source = {
	lvl1_BG:"Art/lvl1_BG.svg",
	level1:"Art/level1.svg",
	length:2
};

loadImages( source , function (images) {
	// Loading Artworks 
	BG1 = images.lvl1_BG;
	Lvl1 = images.level1;
});


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

function lvl1Press () {
	// Level one button function
	levels.style.display="none";
	lvl1Fun();
}

function lvl1Fun () {
	// Level one running function

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
	//------------------------------------------
 
}