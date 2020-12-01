class Ball {
    constructor(x, y, radius) {
      var options = {
          'density':0.25,
          'isStatic':false,
         
      }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(7);
        stroke("white");
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
       
    }
  };


   
   