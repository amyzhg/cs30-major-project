// 
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bookArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(57, 52, 51);
}

function preload() {
  bookArray.push(loadStrings("assets/The-Great-Gatsby.txt"));
  bookArray.push(loadStrings("assets/Charlottes-Web.txt"));
}