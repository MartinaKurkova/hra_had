const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const snakeSize = 50;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "black";
ctx.fillRect(0, canvas.height / 2 - snakeSize / 2, snakeSize, snakeSize);