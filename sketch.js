var canvas;
var database;
var quiz, question, contestant;
var gameState = 0;
var allContestants;
var contestantCount;
var answer;
var a1, a2, a3, a4, allAnswers;

function setup(){
  canvas = createCanvas(800, 800);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  // if(gameState === 2){
  //   game.end();
  // }
}
