const { VerletPhysics2D, VerletParticle2D, VerletSpring2D } = toxi.physics2d;

const { GravityBehavior } = toxi.physics2d.behaviors;

const { Vec2D, Rect } = toxi.geom;

let physics;
let particleA;

function setup() {
    createCanvas(640, 360);

    physics = new VerletPhysics2D();
    let v = new Vec2D(0, 1);
    let gravity = new GravityBehavior(v);
    physics.addBehavior(gravity);

    let bounds = new Rect(0, 0, width, height);
    physics.setWorldBounds(bounds);

    particleA = new VerletParticle2D(320, 100);
    physics.addParticle(particleA);
    particleB = new VerletParticle2D(320, 50);
    physics.addParticle(particleB);
}

function draw() {
    background(150);

    physics.update();

    fill(0);
    circle(particleA.x, particleA.y, 16);
    fill(50);
    circle(particleB.x, particleB.y, 16);
}