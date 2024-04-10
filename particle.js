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
        let num = [];
        for(let i = 1; i < 4; i++) {
            text(num[i], this.x, this.y);
        }
    }
}
