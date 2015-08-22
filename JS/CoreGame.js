re Game loop runs

//Drawing tools:-
var layer1 , ctx1 , layer2 , ctx2 ;
//menu , levels selecting , and entering buttons:-
var menu , levels , intro;
//Divs:-
var start_Btn , htp_Btn , about_Btn , exit_Btn , lvl1_Btn;
//Images needed:-
var BG1 , BG2 , Lvl1 ;

//Drawing objects:-
var BG1_Obj , BG2_Obj , Lvl1_Obj ;

//drawing objects 
var BG1_Obj , BG2_Obj , Lvl1_Obj;

//Art variable:-
var source = {
	lvl1_BG:"Art/lvl1_BG.jpg",
	level1:"Art/level1.svg",
	length:2
};



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

function lvl1Fun () {
	// Level one running function
	levels.style.display="none";
	BG1_Obj.draw(ctx1);
	Lvl1_Obj.draw(ctx2);
	requestAnimationFrame(lvl1Fun);

}

// Loading art work 


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

 	loadImages( source , function (images) {
	// Loading Artworks 
	BG1 = images.lvl1_BG;
	Lvl1 = images.level1;

	BG1_Obj = new backGround(0,0,layer1.width,layer2.height,BG1,0.25);
	Lvl1_Obj= new Ground(0,50,5000,100,Lvl1,2);

});
}

	loadImages( source , function (images) {
	// Loading Artworks 
		BG1 = images.lvl1_BG;
		Lvl1 = images.level1;
		BG1_Obj = new Ground(0,400,200,100,BG1);
	});

}

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

function lvl1Fun () {
	// Level one running function
	levels.style.display="none";
	BG1_Obj.draw(ctx1);
	requestAnimationFrame(lvl1Fun);
}

