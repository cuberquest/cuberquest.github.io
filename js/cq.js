console.log("Alpha Version: v0.01"); // Allows us to track our website timeline

// import format from "./compact.js";

let myGamePiece,
mySound,
myMusic;

const speed = {
  base: 5,
  mod: 1
};

function loadGame() {
  myGameArea.start();
  myGamePiece = new comp(100, 100, "black", 0, 0, "block", true)
}

const myGameArea = {
  canvas: document.createElement("canvas"),
  start() {
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.canvas.innerHTML = "";
    this.frameNo = 0;
    this.interval = requestAnimationFrame(updateGameArea);
  },
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop() {
    clearInterval(this.interval);
  }
}

function updateSize() {
  myGameArea.canvas.width = innerWidth;
  myGameArea.canvas.height = innerHeight;
  updateGameArea();
}
addEventListener("resize", updateSize);
updateSize();

class comp {
  constructor(width, height, color, x, y, type, isPlayer = false) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() {}
}

class sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }
  play() {
    this.sound.play();
  }
  stop() {
    this.sound.pause();
  }
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.update();
}

function everyInterval(n) {
  return (myGameArea.frameNo / n) % 1 === 0;
}

function keyPress(key) {
  switch (key) {
    case "w":
      myGamePiece.speedY = -speed.base * speed.mod;
      break;
    case "s":
      myGamePiece.speedY = speed.base * speed.mod;
      break;
    case "a":
      myGamePiece.speedX = -speed.base * speed.mod;
      break;
    case "d":
      myGamePiece.speedX = speed.base * speed.mod;
      break;
  }
}