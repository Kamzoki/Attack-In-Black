//Core Game 

// main menu buttons Initializing	
	var menu = document.getElementById('mainMenu');
	var mbtn01 = document.getElementById('mBtn01');
	var mbtn02 = document.getElementById('mBtn02');
	var mbtn03 = document.getElementById('mBtn03');
	var mbtn04 = document.getElementById('mBtn04');
//----------------------------------------------------
// level selecting buttons Initializing
	var levelSel = document.getElementById('levelsMenu');
	var lbtn01 = document.getElementById('lBtn01');
	var lbtn02 = document.getElementById('lBtn02');
	var lbtn03 = document.getElementById('lBtn03');
//----------------------------------------------------
// Intro elements Initializing
	var introDiv = document.getElementById('Intro');
	var ebtn = document.getElementById('enter');
//----------------------------------------------------


function init () {
	// body...

	// onloading function

	var layer1 , ctx1 , layer2 , ctx2;
	layer1 = document.getElementById('layer1');
	layer2 = document.getElementById('layer2');
	ctx1 = layer1.getContext('2d');
	
//----------------------------------------------------

//----------------------------------------------------
//LoadImages function call
/*loadImages(source,function(images){

	requestAnimationFrame();
	});
*/
}

function IntroDisplay(){
	//Intro displaying none
	introDiv.style.display="none";
}

function Level_Select (){
	// levels selecting menu
	levelSel.style.display = "block";
	menu.style.display="none";
}

