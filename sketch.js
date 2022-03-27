var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var loginForm, registerForm, addquestionForm;
var barbie,monster;
var barbie_image, monster_image;
var gameover,gameover_image;

function preload(){
  monster_image = loadImage("../images/happy b.png");
  barbie_image = loadImage("../images/capture.png");
  gameover_image = loadImage("../images/over.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
