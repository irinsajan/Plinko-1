const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
// 1 is farthest left & 7 is farthest right
var ground, divider1, divider2, divider3, divider4, divider5, divider6, divider7, divider8;

var plinkos = [];
var balls = [];

// var dividers = [];

function setup() {
  createCanvas(550,700);
   
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 685, 800, 10);

  // for (var k = 0; k<= width; k = k + 80) {
  //   dividers.push(new Ground(k, height - dividersHeight/2, 10, divisionHeight));
  // }
  
  for (var j = 40; j<= width; j = j + 80) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j<= width-10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  

  divider1 = new Ground(5, 565, 9, 230);
  divider2 = new Ground(82, 565, 8, 230);
  divider3 = new Ground(159, 565, 8, 230);
  divider4 = new Ground(236, 565, 8, 230);
  divider5 = new Ground(313, 565, 8, 230);
  divider6 = new Ground(390, 565, 8, 230);
  divider7 = new Ground(467, 565, 8, 230);
  divider8 = new Ground(545, 565, 8, 230);
}

function draw() {
  background(253, 19, 175);
  Engine.update(engine);

  ground.display();

  divider1.display();
  divider2.display();
  divider3.display();
  divider4.display();
  divider5.display();
  divider6.display();
  divider7.display();
  divider8.display();

  for(k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }
  
}
