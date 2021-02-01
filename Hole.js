class Hole{
    constructor(x,y,width,height){
        this.hole=createSprite(x,y,width,height);
        this.image=loadImage("pad.png");
        this.x=x;
        this.y=y;
    }

    display(){
        image(this.image,this.x-20,this.y-20);
    }
}