const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var gameState="start";
var car,carimg;
var track;
var tree,treeimg;
var input1,input2,button;
var backimg,backimg2,roadimg;
var background1,name;


function preload(){
  backimg=loadImage("back.png")
  roadimg=loadImage("download 2.jpg")
  carimg=loadImage("download.png")
  treeimg=loadImage("images.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine=Engine.create()
  world=engine.world
  background1=createSprite(200,200,50,50)
  
  background1.addImage(backimg)
  background1.scale=4;
    input1=createInput("name")
  input1.position(200,150)
  input2=input1.value()
  button=createButton('play')
 button.position(260,180)

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  button.mousePressed(()=>{
    gameState="play"
    input1.hide()
    button.hide()
    background1.visible=false;
    track=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
    track.addImage(roadimg)
    track.scale=3;
   car=createSprite(430,700,20,20)
   car.addImage(carimg)
   car.scale=0.7;
  })
  drawSprites();
  if(gameState=="start"){
  text("Car Racing Game",200,250)
  }
}

