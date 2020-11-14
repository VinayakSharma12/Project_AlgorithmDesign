
var fixedrectangle,movingrectangle;



function setup() {
  createCanvas(800,400);
 

  fixedrectangle = createSprite(200,100,50,50)
  fixedrectangle.shapeColor = "red"

  movingrectangle = createSprite(500,300,50,50)
  movingrectangle.shapeColor = "green"
 
}

function draw() {
  background("lightblue"); 
  
  movingrectangle.y = World.mouseY
  movingrectangle.x = World.mouseX


  if(movingrectangle.x-fixedrectangle.x  ==  movingrectangle.width/2 + fixedrectangle.width/2 || 
     fixedrectangle.x - movingrectangle.x == fixedrectangle.width/2 + movingrectangle.width/2 ||
     movingrectangle.y-fixedrectangle.y == movingrectangle.height/2 + fixedrectangle.height/2 ||
     fixedrectangle.y- movingrectangle.y == fixedrectangle.height/2 + movingrectangle.height/2 ){

     fixedrectangle.shapeColor = "yellow"
     movingrectangle.shapeColor = "yellow"


  }

  else{
    fixedrectangle.shapeColor = "red"
    movingrectangle.shapeColor = "green"
  }
   
  



  drawSprites();
}