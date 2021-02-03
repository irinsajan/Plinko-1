class Plinko {
    constructor(x, y, radius) {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.circle(x, y, 10, options);
        this.radius = 10;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        ellipseMode(RADIUS);
        fill(119, 119, 121);
        ellipse(0,0,this.radius);

        pop();
      }
    };
