// This is where Game loop runs

//Drawing tools:-
var layer1 , ctx1 , layer2 , ctx2 ;
//menu , levels selecting , and entering buttons:-
var menu , levels , intro;
//Divs:-
var start_Btn , htp_Btn , about_Btn , exit_Btn , lvl1_Btn;
//Images needed:-
var BG1 , BG2 , Lvl1 ;
//Drawing objects:-
var BG1_Obj , BG2_Obj , Lvl1_Obj , eren , Eren1 , Eren2 ;
//Art variable:-
var source = {
	lvl1_BG:"Art/lvl1_BG.jpg",
	level1:"Art/level1.svg",
	eren_Run : "Art/run.png",
	eren_Jump : "Art/jump.png",
	length:4
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
	Eren1 = new Sprite
                ({
                    x: 5,
                    y: 50,
                    width: 30,
                    height: 30,
                    image: images.eren_Run,
                    numberOfFramesX: 5,
                    numberOfFramesY: 2,
                    timer: 3,
                    reverse: true
                }, ctx2);
    Eren2 = new Sprite
               ({
            	    x: 5,
                    y: 50,
                    width: images.eren_Jump.width,
                    height: images.eren_Jump.height,
                    image: images.eren_Jump,
                    numberOfFramesX: 4,
                    numberOfFramesY: 1,
                    timer: 20,
                    reverse: true
                },ctx2);

//------------------------------------------------------
	BG1_Obj = new backGround(0,0,layer1.width,layer2.height,BG1,0.25);
	Lvl1_Obj= new Ground(0,50,5000,100,Lvl1,2);
	eren = new Eren (5 , 50 , 30 , 30 , Eren1 , Eren2);
});
}