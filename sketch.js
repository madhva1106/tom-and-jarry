var tom,tomwalk,toms,tomp;
var jarry,jarrys;
var garden,gardeni;


function preload() {
    //load the images here
jarry=loadImage("jerryOne.png");
tom = loadAnimation("tomOne.png");
tomwalk=loadAnimation("tomTwo.png","tomThree.png");
tomp=loadImage("tomFour.png");
gardeni=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

   // garden=createSprite(500,400,10,10);
   // garden.addImage("gardeni",gardeni)
    //create tom and jerry sprites here
    toms=createSprite(800,630,10,10);
    toms.addAnimation("tom",tom);
  toms.addAnimation("tomwalk",tomwalk);
  toms.addAnimation("tomp",tomp);
    toms.debug=true;
    toms.scale = 0.2;
    
    jarrys=createSprite(100,630,10,10);
    jarrys.addImage("jarry",jarry);   
    jarrys.scale=0.2; 
    jarrys.debug=true;
}

function draw() {

    background(gardeni);
    //Write condition here to evalute if tom and jerry collide
   if(jarrys.isTouching(toms)){
     toms.changeAnimation("tomp",tomp);
     toms.velocityX=0;
  }
   
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    
    toms.changeAnimation("tomwalk",tomwalk);
    toms.velocityX=-5;

}
  //For moving and changing animation write code here


}