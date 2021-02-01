class Hammer{
    constructor(x,y,width,height){
        
        this.image=loadImage("Hammer1.png");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.hammer=Bodies.rectangle(x,y,width,height);
        World.add(world,this.hammer);
    }

    display(){
        var pos=this.hammer.position;
        pos.x=mouseX;
        pos.y=mouseY;
        image(this.image,pos.x,pos.y);
        console.log(this.hammer.position.x);
    }
}