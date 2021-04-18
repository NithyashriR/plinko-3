const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score=0;
var count=0;

function preload(){
  groundimg = loadImage("iceback.jpg");
}
function setup() { 
  createCanvas(480,800);
  
  back = createSprite(240, 798, 480, 30);
  back.addImage(groundimg);
  back.scale = 0.3;

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background(232, 255, 255 );
  fill(0);
  console.log(count);
  text("score:"+score,50,50);
  text("500",50,550)
  text("500",150,550)
  text("500",200,550)
  text("500",250,550)
  text("500",300,550)
  text("500",350,550)
  /*if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
*/
  ground.display();
  /*
  for (var k = 0; k < particles.length; k++){
    particles.display();

  }
*/
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  if(particles!==null){
    particles.display();
  if (particles.body.position.y>120)
  {
        if (particles.body.position.x < 300) 
        {
            score=score+500;      
            particles=null;
            if(count>=5){
              gameState="end"
            }                      
        }


        else if (particles.body.position.x < 600 && particles.body.position.x > 301 ) 
        {
              score = score + 100;
              
              particles=null;
             

              if ( count>= 5) gameState ="end";

        }
        else if (particles.body.position.x < 900 && particles.body.position.x > 601 )
        {
              score = score + 200;
              particles=null;
             

              if ( count>= 5)  gameState ="end";

        }  
      }    
    } 
  


  drawSprites();
  textSize(20);
  text("score:"+score,400,50)
  
  
}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particles=new Particle(mouseX,10,10,10)

  }
}