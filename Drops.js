class createDrops{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':0.01
          }
          this.body = Bodies.circle(x, y, 6, options);
          this.radius = 6;
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 1200), y:random(0, 700)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }

