class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;         
        this.offsetY=offsetY;
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
           
            pointB:{x:offsetX , y:offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("white");
        fill("white");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY); 
    }
}