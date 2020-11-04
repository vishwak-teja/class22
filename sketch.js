const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world, ground, ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var bird2={
    isStatic: true
  }
  ground=Bodies.rectangle(200, 390, 400, 20, bird2);
  World.add(world,ground);
  console.log(ground.position.x)
  var ball2={
    restitution: 1
  }
  ball=Bodies.circle(200, 100, 40, ball2)
  World.add(world,ball)
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20)

ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y, 40, 40)


}