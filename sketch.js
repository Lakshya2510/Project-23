var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,part1,part2,part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	part1Sprite=createSprite(width/2, height-50, 250,20);
	part1Sprite.shapeColor=color(255,0,0)

	part2Sprite=createSprite(280, 610, 20,100);
	part2Sprite.shapeColor=color(255,0,0)

	part3Sprite=createSprite(520, 610, 20,100);
	part3Sprite.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 15 , {isStatic:true});
	World.add(world, packageBody);
	
	 part1 = Bodies.rectangle(width/2, height-50, 250, 20 , {isStatic:true} );
	 World.add(world, part1);
	 
	 part2 = Bodies.rectangle(280, 610, 20, 100 , {isStatic:true} );
	 World.add(world, part2);
	 
	 part3 = Bodies.rectangle(520, 610, 20, 100 , {isStatic:true} );
	 World.add(world, part3);
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)
  }
}
