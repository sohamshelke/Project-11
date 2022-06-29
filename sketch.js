var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i, j;

function preload() {
      pathImg = loadImage("path.png");
      boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
      i = loadAnimation("energyDrink.png")
      j = loadAnimation("bomb.png")
}

function setup() {

      createCanvas(400, 400);


      path = createSprite(200, 200);
      path.addImage(pathImg);
      path.velocityY = 4;
      path.scale = 1.2;

      boy = createSprite(180, 340, 30, 30);
      boy.scale = 0.08;
      boy.addAnimation("JakeRunning", boyImg);


      leftBoundary = createSprite(0, 0, 100, 800);
      leftBoundary.visible = false;


      rightBoundary = createSprite(410, 0, 100, 800);
      rightBoundary.visible = false;

      energyDrink = createSprite(200, 200, 10, 10);
      energyDrink.addAnimation("energyDrink", i)
      energyDrink.scale = 0.2

      bomb = createSprite(300, 350, 5, 5);
      bomb.addAnimation("bomb", j);
      bomb.scale = 0.1
}

function draw() {
      background(0);
      path.velocityY = 4;

      boy.x = World.mouseX;

      edges = createEdgeSprites();
      boy.collide(edges[3]);
      boy.collide(leftBoundary);
      boy.collide(rightBoundary);



      if (path.y > 400) {
        path.y = height / 2;
      }

  drawSprites();
}
