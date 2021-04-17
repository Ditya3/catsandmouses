var gardenbg;
var cat1,cat2,cat3;
var mouse1,mouse2,mouse3;
var cat,mouse;
function preload() {
    //load the images here
    gardenbg=loadImage("images/garden.png");
    cat1=loadAnimation("images/cat1.png");
    cat2=loadAnimation("images/cat2.png","images/cat3.png");
    cat3=loadAnimation("images/cat4.png");
    mouse1=loadAnimation("images/mouse1.png");
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(870,600);
    cat.addAnimation("catsleeping",cat1)
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("mousestanding",mouse1)
    mouse.scale=0.15;
}

function draw() {

    background(gardenbg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("sitting",cat3);
        cat.changeAnimation("sitting");
        cat.x=300;
        cat.scale=0.2;
        mouse.addAnimation("idk",mouse3);
        mouse.changeAnimation("idk");
    }
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
   cat.velocityX=-4;
   cat.addAnimation("running",cat2);
   cat.changeAnimation("running");
   mouse.addAnimation("teasing",mouse2);
   mouse.changeAnimation("teasing");
  }
  //For moving and changing animation write code here


}