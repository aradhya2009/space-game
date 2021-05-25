var h1,hi_img;
var h2, h2_img;
var a1,a1_img,alien_group;
var background, background_img;
var life=3;
var b1, blackhole, blackhole_img;
var gameState=0;
var mars_img, mars_group;

function preload() {
h1_img=loadImage("h1 in space.png");
h2_img=loadImage("h1 final.png");
a1_img=loadImage("alien.gif")
background_img=loadImage("space background.jpg")
blackhole_img=loadImage("blackhole.png")
mars_img=loadImage("marsImage.png")
}

function setup() {
  createCanvas(1200,800);

  background=createSprite(0,0,1200,400);
  background.addImage(background_img);
  background.scale=3.5;
  background.velocityY=4

  h1=createSprite(400, 200, 50, 50);
  h1.addImage(h1_img);
  h1.scale=0.7
  h1.setCollider("circle",0,0,20);

  alien_group=new Group();
  blackhole_group=new Group();
  mars_group=new Group();
}

function draw() {
  //background(255,255,255);  
    
  fill("yellow")
text("lives:"+life,600,200);

   if(background.y>600){
     background.y=400
   }

if(keyDown(LEFT_ARROW)){
  h1.x=h1.x-2;
}
  if(keyDown(RIGHT_ARROW)){
    h1.x=h1.x+2;
}

if(keyDown(DOWN_ARROW)){
  h1.y=h1.y+2;
}

spawnALien();
spawnMars();
spawnBlackhole();

if(h1.isTouching(alien_group)){
  alien_group.destroyEach();
}

if(h1.isTouching(blackhole_group)){
  h1.visible=false;
  h1.destroy();
  life=life-1;

  blackhole_group.destroyEach();

  gameState = 1;

}

if(h1.isTouching(mars_group)){
gameState=2;

}
  
fill("yellow")
textSize(25);
text("lives:"+life,600,200);

if(gameState===1){
h1.visible=true;
h1=createSprite(400, 200, 50, 50);
h1.addImage(h1_img);
h1.scale=0.7
h1.setCollider("circle",0,0,20);
}

if(gameState===2){
 background.visible=false;
  alien_group.visible=false;
  blackhole_group.visible=false;

  h2=createSprite(0,0,1200,400);
  h2.addImage(h2_img);
  
h2.scale=2.5;
}

drawSprites();
}

function spawnALien(){
  if(frameCount%300===0){
    a1=createSprite(200,-50);
    a1.addImage(a1_img);
    a1.velocityY=4;
    a1.x=Math.round(random(300,700));

   alien_group.add(a1);

  }
}

function spawnBlackhole(){
  if(frameCount%300===0){
    b1=createSprite(200,500);
    b1.addImage(blackhole_img);
    b1.scale=0.6
   // b1.x=Math.round(random(300,700));

   blackhole_group.add(b1);

  }
}

function spawnMars(){
  if(frameCount%200===0){
    mars=createSprite(500,500);
    mars.addImage(mars_img);
    mars.scale=0.5

    mars_group.add(mars);
  }
}