class Paint extends BaseClass {
  constructor(x,y){
    super(x,y,5,5);
    this.image = loadImage("paint.png");
    this.image.scale= 0.5;
    this.trajectory =[];
  }

  hide(){
   var canvas2 = createCanvas(1200,400);
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;

    super.display();

  }
}
