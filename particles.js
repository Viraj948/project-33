class Particles {
    constructor(x, y,r) {
        var options = {
            restitution: 0.4,
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image=loadImage("snow5.webp")
       
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(RADIUS);
        
        image(this.image,0,0,this.r*3,this.r*3);
        pop();
    }
}