// This is where Game loop runs

var layer1 , ctx1 , layer2 , ctx2 ;

function init () {
	// Initilaizing
	layer1 = document.getElementById('Layer1');
	layer2 = document.getElementById('Layer2');
	ctx1 = layer1.getContext('2d');
	ctx2 = layer2.getContext('2d');
}