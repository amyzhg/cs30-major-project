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
  background(196,196,202);
}

function preload() {
  bookArray.push(loadStrings("assets/The-Great-Gatsby.txt"));
  bookArray.push(loadStrings("assets/Charlottes-Web.txt"));
}