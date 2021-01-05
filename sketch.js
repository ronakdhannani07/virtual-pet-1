//Create variables here
var pet,petI;

function preload()
{
  //load images here
  petI = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(800, 700);
  
}


function draw() {  
  
  pet = createSprite(200,200,50,50);
  pet.addImage("petI");
 
  drawSprites();
 
  //add styles here

}



