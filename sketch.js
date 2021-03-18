const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var drops;
var thunder;
var umbrella;
var man;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    drops = new Drops(300,20,10);
    man = new Man(300,580,20,20);
    umbrella = new Umbrella(man.body,{x:300,y:580});
   
    
}

function draw(){
    background("black");
    Engine.update(engine);

    drops.display();
    man.display();
    umbrella.display();
    
}   

function rain(){
   if(this.rain.position.y > height){

   Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
  }
}

function lightning(){
rand = Math.round(random(1,4));

if(frameCount%80===0){
thunderCreatedFrame = frameCount;
thunder = createSprite(random(10,370),random(10,30),10,10);
}

thunder.scale = random(0.3,0.6);

}

