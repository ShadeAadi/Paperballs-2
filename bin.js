class Bin {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true,
        restitution:0.0,
        friction:1.0,
        density:1.0,
      }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
     pop();
  }
}