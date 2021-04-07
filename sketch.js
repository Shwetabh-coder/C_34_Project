const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var hero,monster,rope,ground;
// var gameState = 'onSling';

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 90, 70, 70);
  box4 = new Box(900, 80, 70, 70);
  box5 = new Box(600, 90, 70, 70);
  box6 = new Box(600, 80, 70, 70);
  box7 = new Box(600, 70, 70, 70);
  box8 = new Box(600, 200, 70, 70);
  box9 = new Box(900, 70, 70, 70);
  box10 = new Box(900, 60, 70, 70);
  box11 = new Box(700,100,70,70);
  box12 = new Box(700,90,70,70);
  box13 = new Box(700,80,70,70);
  box14 = new Box(700,70,70,70);
  box15 = new Box(700,60,70,70);
  box16 = new Box(800,100,70,70);
  box17 = new Box(800,90,70,70);
  box18 = new Box(800,80,70,70);
  box19 = new Box(800,70,70,70);
  box20 = new Box(800,60,70,70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
  
}
