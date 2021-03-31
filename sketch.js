const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rabbitImage,rabbit;
var snake , snakeImage;
var wall,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11;
var burrow;
var gameState = "play";
var score = 0;
var carrotGroup;
var index = 0
var carrots= [];

function preload() {
    backgroundImg = loadImage("images/garden.png");
    rabbitImage = loadImage("images/rabbit.jpg");
    carrotImage = loadImage("images/carrot2.jpg");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    

    rabbit =  createSprite(10,142,200,200)
    rabbit.addImage(rabbitImage);

    rabbit.scale=0.15;

  //  wall = createSprite(100,100,1,1);
  // stroke('black');
  // strokeWeight(1);
   // wall.shapeColor = color(62,26,11);
    
     
    wall1 = createSprite(100,225,250,25);
   stroke('black');
   strokeWeight(1);
    wall1.shapeColor = color(144,80,30);

    wall2 = createSprite(220,338,25,250);
    stroke('black');
    strokeWeight(1);
     wall2.shapeColor = color(144,80,30);           

     wall3 = createSprite(458,460,638,30);
    stroke('black');
    strokeWeight(1);
     wall3.shapeColor = color(51,75,38);

     wall4 = createSprite(338,285,25,175);
     stroke('black');
     strokeWeight(1);
      wall4.shapeColor = color(150,149,133);

     
      wall5 = createSprite(560,363,270,25);
      stroke('black');
      strokeWeight(1);
       wall5.shapeColor = color(150,149,133);

       wall6 = createSprite(685,279,25,175);
     stroke('black');
     strokeWeight(1);
      wall6.shapeColor = color(150,149,133);

      wall7 = createSprite(450,190,200,30);
     stroke('black');
     strokeWeight(1);
      wall7.shapeColor = color(150,149,133);

      wall8 = createSprite(900,180,25,350);
     stroke('black');
     strokeWeight(1);
      wall8.shapeColor = color(86,102,105);

      wall9 = createSprite(787,437,25,75);
     stroke('black');
     strokeWeight(1);
      wall9.shapeColor = color(86,102,105);

      wall10 = createSprite(400,66,800,25);
     stroke('black');
     strokeWeight(1);
      wall10.shapeColor = color(86,102,105);


      wall11 = createSprite(787,437,25,75);
      stroke('black');
      strokeWeight(1);
       wall11.shapeColor = color(86,102,105);

       wall11 = createSprite(1125,175,250,25);
       stroke('black');
       strokeWeight(1);
        wall11.shapeColor = color(86,102,105);

       // carrot= createSprite(200,200,10,10)
    
 
        burrow = createSprite(1300,570,100,100);
        carrotGroup = new Group();
        spawnCarrots();

    
    
}

function draw(){
    background(backgroundImg);
    createEdgeSprites();
    Engine.update(engine);

  
    if(gameState === "play"){
 

       /*wall.x = mouseX;
        console.log(wall.x);
        wall.y = mouseY;
        console.log(wall.y);*/

        if(touches.length>0||keyDown(UP_ARROW)){
            rabbit.y = rabbit.y-10
            touches=[]
        }

        if(touches.length>0||keyDown(DOWN_ARROW)){
            rabbit.y = rabbit.y+10
            touches=[]
        }

        if(touches.length>0||keyDown(LEFT_ARROW)){
            rabbit.x = rabbit.x-10
            touches=[]
        }

        if(touches.length>0||keyDown(RIGHT_ARROW)){
            rabbit.x = rabbit.x+10
            touches=[]
        }

    

        /*if(rabbit.isTouching(wall1) || 
        rabbit.isTouching(wall2) || 
        rabbit.isTouching(wall3) ||
        rabbit.isTouching(wall4) ||
        rabbit.isTouching(wall5) ||
        rabbit.isTouching(wall6) ||
        rabbit.isTouching(wall7) ||
        rabbit.isTouching(wall8) ||
        rabbit.isTouching(wall9) ||
        rabbit.isTouching(wall10) ||
        rabbit.isTouching(wall11) 
    ){
        rabbit.x = rabbit.x;
        rabbit.y = rabbit.y;

    }
        */
    if (rabbit.isTouching(wall1)){
        rabbit.bounceOff(wall1);
    }
    if (rabbit.isTouching(wall2)){
        rabbit.bounceOff(wall2);
    }
    if (rabbit.isTouching(wall3)){
        rabbit.bounceOff(wall3);
    }
    if (rabbit.isTouching(wall4)){
        rabbit.bounceOff(wall4);
    }
    if (rabbit.isTouching(wall5)){
        rabbit.bounceOff(wall5);
    }
    if (rabbit.isTouching(wall6)){
        rabbit.bounceOff(wall6);
    }
    if (rabbit.isTouching(wall7)){
        rabbit.bounceOff(wall7);
    }
    if (rabbit.isTouching(wall8)){
        rabbit.bounceOff(wall8);
    }
    if (rabbit.isTouching(wall9)){
        rabbit.bounceOff(wall9);
    }
    if (rabbit.isTouching(wall10)){
        rabbit.bounceOff(wall10);
    }
    if (rabbit.isTouching(wall11)){
        rabbit.bounceOff(wall11);
    }
    

    
   
    
    drawSprites();
   
    if(carrotGroup.isTouching(rabbit)){
        score = score + 10
        console.log("inside the condition")
        carrotGroup.destroyEach();
    }
   /* if(carrots !== undefined){
        for(var carrot in carrots){
            index = index+1;
            if(carrots[index].isTouching(rabbit)){
                
                score = score + 10
                console.log("inside the condition")
                carrots[index].pop();
            }
        }
        
     }*/
    
    
    textSize(25);
    fill('white')
    
    noStroke();
    text("score: "+ score,80,25);


    if(rabbit.isTouching(burrow)){
        
       
          
        gameState = "end"
    }

//rabbit.bounceOff(edges);
}
else if(gameState === "end"){
    rabbit.velocityX = 0;
    rabbit.velocityY = 0;
    fill('red')
    textSize(35);
    text("you have won now",600,300);
}







    
     
     
}

function mouseDragged(){
}

function keyPressed()
{
    if (keyCode === 32)
    {
      
    }
}

function mouseReleased(){
}


function spawnCarrots(){
    /*if(frameCount%100===0){
        var carrot = createSprite(Math.round(random(228,1123)),Math.round(random(75,474)),10,10);
        carrot.shapeColor="orange";
    }*/
    for(var x = 228;x<879;x =x+30){
         carrot1 = createSprite(x,140,10,10);
         carrot1.depth = rabbit.depth-1
         carrotGroup.add(carrot1);
        // carrots.push(carrot1);
         console.log(carrots);
        carrot1.addImage("carrot",carrotImage);
        carrot1.scale = 0.09
    }
    for(var x = 228;x<759;x =x+30){
        carrot2 = createSprite(x,411,10,10);
        carrot2.depth = rabbit.depth-1
        carrotGroup.add(carrot2);
        carrot2.addImage("carrot",carrotImage);
        carrot2.scale = 0.09
    }
    for(var y = 80;y<420;y =y+30){
         carrot3 = createSprite(286,y,10,10);
         carrot3.depth = rabbit.depth-1
         carrotGroup.add(carrot3);
        carrot3.addImage("carrot",carrotImage);
        carrot3.scale = 0.09
    }
    for(var y = 80;y<420;y =y+30){
         carrot4 = createSprite(799,y,10,10);
         carrot4.depth = rabbit.depth-1
         carrotGroup.add(carrot4);
        carrot4.addImage("carrot",carrotImage);
        carrot4.scale = 0.09
    }
    for(var y = 214;y<329;y =y+30){
         carrot5 = createSprite(617,y,10,10);
         carrot5.depth = rabbit.depth-1
         carrotGroup.add(carrot5);
       // carrot5.addImage("carrot",carrotImage);
        carrot5.scale = 0.09
    }
    for(var y = 214;y<329;y =y+30){
         carrot6 = createSprite(617,y,10,10);
         carrot6.depth = rabbit.depth-1
         carrotGroup.add(carrot6);
        carrot6.addImage("carrot",carrotImage);
        carrot6.scale = 0.09
    }
   
     for(var y = 214;y<329;y =y+30){
         carrot7 = createSprite(368,y,10,10);
         carrot7.depth = rabbit.depth-1
         carrotGroup.add(carrot7);
        carrot7.addImage("carrot",carrotImage);
        carrot7.scale = 0.09
    }
   // carrot.depth = rabbit.depth-1
    
    console.log(carrotGroup);
}




