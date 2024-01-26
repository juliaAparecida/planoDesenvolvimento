let imagemDaEstrada;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
}