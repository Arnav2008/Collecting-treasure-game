var sword,swordImage;
//Gamestates

var PLAY=1;
var END=0;

var gameState=PLAY;

var monsterImage1,monsterImage2
var score=0;

var knifeSwooshSound;
var fruit;
var fruit1,fruit2,fruit3,fruit4;
var fruitGroup;
var fruit1Image;
var fruit2Image;
var fruit3Image;
var fruit4Image;

var GameOver,GameOverImage,GameOverSound;



function preload(){
  
 swordImage=loadImage("sword.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  monsterImage1=loadImage("alien1.png");
  monsterImage2=loadImage("alien2.png");
  
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  
  GameOverImage=loadImage("gameover.png");
  GameOverSound=loadSound("gameover.mp3");
}// function preload



function setup(){
 createCanvas(600,600); 
  
//creating sword;
sword=createSprite(40,200,20,20);  
sword.addImage(swordImage);
sword.scale=0.7;
  
  
  // change the animation of sword to gameover and reset its position
  sword.addImage(swordImage);
  sword.x=200;
  sword.y=200;
  
   score=0;
   fruitGroup=createGroup();  
   enemyGroup=createGroup();


}//function setup



function draw(){

background("lightBlue");
  
 if (gameState===PLAY){
   
 
    //move sword with mouse
  sword.y=World.mouseY;
  sword.x=World.mouseX;
   
   //call fruits and enemy function
   fruits();
   Enemy();
 
  
  //increase score if sword touching the fruit  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2;
    knifeSwooshSound.play();
  }
  
  
  
      if(sword.isTouching(enemyGroup)){
    
          GameOverSound.play();  
    gameState=END;    
    }
 }
  else if(gameState===END){
      
 sword.addImage(GameOverImage)  
    sword.x=200;
    sword.y=200;  

    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
     
     fruitGroup.setVelocityXEach(0);   
     enemyGroup.setVelocityXEach(0);
           
  
  
    
  }
  
  
  //display score
  text("Score:"+score,300,30);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   drawSprites();
}//function draw

  
function fruits(){
if(World.frameCount%80===0) {
  fruit=createSprite(400,200,20,20)
  fruit.y=Math.round(random(50,340));
  
  fruit.velocityX=-7;
  fruit.lifetime=100;
  
  fruitGroup.add(fruit)
  fruit.scale=0.2;
  //fruit.debug=true;
  r=Math.round(random(1,4));
  if(r==1){
    fruit.addImage(fruit1);
  }else if (r==2){
    fruit.addImage(fruit2);
  }else if(r==3){
    fruit.addImage(fruit3);
  }else{
    fruit.addImage(fruit4);
  }
} 

}

function Enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addImage("moving",monsterImage1);  
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.Lifetime=50;  
  enemyGroup.add(monster);  
  

  }
}





