const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let engine,world;
let hole1,hol2,hole3,hol4,hole5,hole6,hole7,hole8,hole9,hole10,hole11;
let holeImage;
let backgroundImage;
let diglettPosition;
let diglett1,diglett2;
let diglettImage;
let hammer,hammerimage,hammerAnimation;
 function preload(){
// //    diglettImage=loadImage("Diglett.png");
    backgroundImage=loadImage("backgroundImage.jpg");
    hammerImage=loadImage("Hammer1.png");
    hammerAnimation=loadAnimation("Hammer1.png","Hammer2.png","Hammer3.png","Hammer4.png");
 }
function setup(){
    canvas=createCanvas(displayWidth,displayHeight);

    engine=Engine.create();
    world=engine.world;
    // hole1=new Hole(600,600,20,20);
    // hole2=new Hole(400,400,20,20);
    // hole3=new Hole(400,400,20,20);
    // hole4=new Hole(400,400,20,20);
    // hole5=new Hole(400,400,20,20);
    // hole6=new Hole(400,400,20,20);
    // hole7=new Hole(400,400,20,20);
    // hole8=new Hole(400,400,20,20);
    // hole9=new Hole(400,400,20,20);
    // hole10=new Hole(400,400,20,20);
    // hole11=new Hole(400,400,20,20);
    diglett1=new Diglett(200,200,40,40);
    diglett2=new Diglett(600,200,40,40);

    hammer=new Hammer(50,50,50,50);
   

    diglettPosition=Math.round(random(1,2));
}

function draw(){
    Engine.update(engine);
     background(backgroundImage);
//     hammer.x=mouseX;
//     hammer.y=mouseY;
    
//    console.log(hammer.x);
    // switch(diglettPosition){
    //     case 1: diglett1=createSprite(200,200,40,40);
    //             diglett1.addImage(diglettImage);
    //              console.log("diglett1");

    //     break;
    //     case 2: diglett2=createSprite(600,200,40,40);
    //             diglett2.addImage(diglettImage);
    //             console.log("diglett2");
    //     break;
    //     // case 3:
    //     // break;
    //     // case 4:
    //     // break;
    //     // case 5:
    //     // break;
    //     default:
    //     break;
    // }
    // hole1.display();
    // hole2.display();
    // hole3.display();
    // hole4.display();
    // hole5.display();
    // hole6.display();
    // hole7.display();
    // hole8.display();
    // hole9.display();
    // hole10.display();
    // hole11.display();    
    if(diglettPosition===1){
        console.log("diglett1");
        
        diglett1.display();
    }
    else if(diglettPosition===2){
        console.log("diglett2");
        
        diglett2.display();
    }

    hammer.display();
    drawSprites();
    

}