function handleDetectiveAnimation() {
  DETECTIVE.neighbors =  GAME.maze.getGenerator().graph.cellDisconnectedNeighbors(DETECTIVE.currentCell);
  var cellToAdd = null;
  if (CONTROLS.detective.d) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getX() + 1== c.getX()){
      CONTROLS.detective.d = false;
        //DETECTIVE.latest.x += GAME.maze.getCellWidth();
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.w) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getY() - 1== c.getY()){
        CONTROLS.detective.w = false;
        //DETECTIVE.latest.y = GAME.maze.getCellHeight();
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.a) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getX() - 1== c.getX()){
        //DETECTIVE.latest.x -= GAME.maze.getCellWidth();
        CONTROLS.detective.a = false;
        cellToAdd = c;
      }
    }
  }
  else if (CONTROLS.detective.s) {
    for (var i = 0; i < DETECTIVE.neighbors.length; i++){
      var c = DETECTIVE.neighbors[i];
      if (DETECTIVE.currentCell.getY() + 1== c.getY()){
        CONTROLS.detective.s = false;
        //DETECTIVE.latest.y += GAME.maze.getCellHeight();
        cellToAdd = c;
      }
    }
  }
  if (cellToAdd != null){
    DETECTIVE.currentCell = cellToAdd;
  }
  DETECTIVE.latest.y = DETECTIVE.currentCell.getY() * GAME.maze.getCellHeight() + 5;
  DETECTIVE.latest.x = DETECTIVE.currentCell.getX() * GAME.maze.getCellWidth() + 5;

}

function renderDetective (ctx) {
  var canvas = document.getElementById('maze');
  var detectiveImage = new Image();
  detectiveImage.src = "detective-156961_960_720.png";
  ctx.drawImage(detectiveImage,DETECTIVE.latest.x,DETECTIVE.latest.y,10,10);
}
function renderLight (ctx) {
  var canvas = document.getElementById('maze');
  var lightImage = new Image();
  lightImage.src = "download.jpg";
  ctx.drawImage(lightImage,LIGHT.x,LIGHT.y,25,25);

}
function runGame() {
  var canvas = document.getElementById('maze');
  var ctx = canvas.getContext('2d');
  //ctx.clearRect(0, 0, 600, 300);
  if (GAME.started) {
   ctx.clearRect(DETECTIVE.latest.x, DETECTIVE.latest.y, 10, 10);
    handleDetectiveAnimation();
    // 1 - Reposition the objects
    //handleAirplaneMovement();

    // 2 - Clear the CANVAS


    renderDetective(ctx);
    renderLight(ctx);


    // 3 draw the blood drops


      ctx.beginPath();
      ctx.lineWidth = "6";
      ctx.strokeStyle = "red";
      ctx.rect(COORD.x1, COORD.y1, 5, 5);
      ctx.rect(COORD.x2, COORD.y2, 5, 5);
      ctx.rect(COORD.x3, COORD.y3, 5, 5);
      ctx.rect(COORD.x4, COORD.y4, 5, 5);
      ctx.rect(COORD.x5, COORD.y5, 5, 5);
      ctx.rect(COORD.x6, COORD.y6, 5, 5);

      ctx.strokeStyle = "white";
      ctx.lineWidth = "10";
      ctx.rect(130, 190, 100, 10);
      ctx.stroke();
      if (DETECTIVE.currentCell != null){
        ctx.fillText("x: " + DETECTIVE.latest.x + " y: " + DETECTIVE.latest.y + " cx: " + DETECTIVE.currentCell.getX()+" cy: " + DETECTIVE.currentCell.getY(), 135, 200);
      }

    // 3 - Draw new items


  } else {
    //ctx.font = "30px Arial";
    //ctx.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
