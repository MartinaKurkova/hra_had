//listeners
document.addEventListener("keydown", keyPush)

//canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//player
const snakeSize = 50;
let snakeSpeed = snakeSize;

let snakePosX = 0;
let snakePosY = canvas.height / 2;

let velocityX = 0;
let velocityY = 0;

const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;


//loop
function gameLoop() {
    drawStuff();
    moveStuff();
    setTimeout(gameLoop, 1000 / 15);
}

gameLoop();

/**
 * Move everything
 */
function moveStuff() {
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed * velocityY;

    if (snakePosX > (canvas.width - snakeSize)) {
        snakePosX = 0;
    }
    if (snakePosX < 0) {
        snakePosX = canvas.width;
    }
    if (snakePosY > canvas.height) {
        snakePosY = 0;
    }
    if (snakePosY < 0) {
        snakePosY = canvas.height;
    }
}


/**
 * Draw everything
 */
function drawStuff() {
    //background
    rectangle("#ffbf00", 0, 0, canvas.width, canvas.height);

    //grid
    drawGrid()

    //snake
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);
}

//draw rectangle
function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

/**
 * *KeyBoaard
 */
function keyPush(event) {
    switch(event.key) {
        case "ArrowLeft":
            if (velocityX !== 1) {
                velocityX = -1;
                velocityY = 0;
            }
            break;
        case "ArrowUp":
            if (velocityX !== 0) { // Opraveno z velocityY !== 1
                velocityX = 0;
                velocityY = -1;
            }
            break;
        case "ArrowRight":
            if (velocityX !== -1) {
                velocityX = 1;
                velocityY = 0;
            }
            break;
        case "ArrowDown":
            if (velocityX !== 0) { // Opraveno z velocityY !== 1
                velocityX = 0;
                velocityY = 1;
            }
            break;
    }
}


//grid
function drawGrid() {
    for (let i = 0; i < tileCountX; i++) {
        for (let j = 0; j < tileCountY; j++) {
            rectangle(
                "#fff", 
                snakeSize * i, 
                snakeSize * j, 
                snakeSize - 1, 
                snakeSize - 1
            );
        }
    }
}