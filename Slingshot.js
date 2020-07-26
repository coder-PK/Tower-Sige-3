class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: -5
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;    
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            //strokeWeight(4);
            stroke(126, 65, 32);
            if (pointA.x < 220){
                strokeWeight(7);
                fill("blue");
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
        
            }
            else {
                strokeWeight(3);
                fill("blue");    
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            
            }
            pop();
        }
    }
    
}