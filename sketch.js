// Litertain (title play on lit and entertain)
// Amy Zhang
// 12/9/24
//
// Extra for Experts:
// - Check proposal

let bookArray = [];
let game_state;

//use a class to rep all the words
// class txtFile {
//   constructor
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(	69, 123, 157);
}

function preload() {
  bookArray.push(loadStrings("assets/The-Great-Gatsby.txt"));
  bookArray.push(loadStrings("assets/Charlottes-Web.txt"));
}

function typing() {
  if (game_state === onGame) {
    // display keyboard + things we need
    textFont("Montserrat");
  }
}