class Particle extends VerletParticle2D {
    constructor(x, y) {
        super(x ,y);
        this.r = 8;
        physics.addParticle(this);
    }
    show() {
        fill(100);
        stroke(0);
        circle(this.x, this.y, this.r * 2);
    }
    
    count(num) {
        textSize(100);
        text(num+1, this.x, this.y);
    }
}
