class Chainy {
    constructor(body1, body2){
        var parameters = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.01,
            length: 5
        }
    
        this.chain= Constraint.create(parameters);
    
        World.add(world, this.chain)
    }

    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        strokeWeight(3)
        line (pointA.x, pointA.y, pointB.x, pointB.y)
    }
}