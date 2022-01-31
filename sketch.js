
var s1,s2,s3,s4;
var pic1;
var gameState=0;
var startButton,nextButton;
var q=0;
var op1,op2,op3,op4;

function preload(){
  s1=loadSound("ButterRemix.mp3");
  s2=loadSound("DynamiteRemix.mp3");
  s3=loadSound("Idol.mp3");
  s4=loadSound("PTD.mp3");
  pic1=loadImage("btspic1.png")

}

function setup() 
{
  createCanvas(windowWidth,windowHeight);
  if(gameState==0){
  startButton=createButton("START QUIZ")
  startButton.position(width/2-400,450)
  startButton.class("customButton")

  songButton1=createButton("Butter ft Megan")
  songButton1.position(width/2+400,50)
  songButton1.class("songButton")

  songButton2=createButton("Dynamite(Tropical Remix)")
  songButton2.position(width/2+400,110)
  songButton2.class("songButton")

  songButton3=createButton("Idol")
  songButton3.position(width/2+400,170)
  songButton3.class("songButton")

  songButton4=createButton("Permission To Dance")
  songButton4.position(width/2+400,230)
  songButton4.class("songButton")
  }

  if(gameState==1){
    if(q==1){
      
   op1=createButton("2012");
op1.position(width/2-400,300);
op1.class("optionButton");

op2=createButton("2013");
op2.position(width/2+100,300);
op2.class("optionButton");

op3=createButton("2014");
op3.position(width/2-400,400);
op3.class("optionButton");

op4=createButton("2015");
op4.position(width/2+100,400);
op4.class("optionButton");

nextButton=createButton("NEXT");
nextButton.position(width/2+300,550);
nextButton.class("nextButton");
}
 }

 
  
}

function draw() 
{
  background("Purple");
   if(gameState==0){
  textSize(40)
  strokeWeight(4)
  fill("black")
  text("BTS QUIZ" ,windowWidth/2-100,50)
  textSize(30)
  text("Rules For The Quiz" , 50,150)
   fill("white")
  textSize(20)
  text("1. Every question will have 4 options, you will get 2 chances to select the correct answer." , 50,200)
  text("2. For every correct answer 50 points will be rewarded" , 50,250)
  text("3. For every question you will get 60 seconds(i.e 1 minute) to answer" , 50 ,300)
  text("4. Bonus questions will be given to earn extra chance" , 50 ,350)
  image(pic1,width/2+100,height/2)
  

songButton1.mouseClicked(()=>{
  s1.loop();
  s2.pause();
  s3.pause();
  s4.pause();
})

songButton2.mouseClicked(()=>{
  s2.loop();
  s1.pause();
  s3.pause();
  s4.pause();
})

songButton3.mouseClicked(()=>{
  s3.loop();
  s1.pause();
  s2.pause();
  s4.pause();
})

songButton4.mouseClicked(()=>{
  s4.loop();
  s1.pause();
  s2.pause();
  s3.pause();
})

} 

startButton.mouseClicked(()=>{
  gameState=1;
  q=1;
})

  
/*nextButton.mouseClicked(()=>{
  q +=1
})  */
  
if(gameState===1){

  if(q==1){
 textSize(30);
      fill("white");
     text("1. In Which Year Did BTS Debut?" , width/2-250,100);


  }

  if(q==2){
    textSize(30);
 fill("white");
text("2. How Many Members Are There In BTS?" , width/2-250,100);
  }

}

}




