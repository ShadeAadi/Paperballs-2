const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    binImg = loadImage("bin.png");
}
function setup() {
	var canvas = createCanvas(1000, 500);
	background("black");
    engine = Engine.create();
    world = engine.world;
	imageMode(CENTER);
	ground = new Ground(500, 495, 1005, 15);
	binB = new Bin(900, 485, 80, 7);
	binL = new Bin(860, 437, 5, 100);
	binR = new Bin(940, 437, 5, 100);
	ball = new Paper(100, 300, 14);
	Engine.run(engine);
}


function draw() {
    Engine.update(engine);
	rectMode(CENTER);
	background("#3530b6");
	ground.display();
	ball.display();
	image(binImg, 900.5, 438, 95, 100);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:31, y:-48})
	}
}