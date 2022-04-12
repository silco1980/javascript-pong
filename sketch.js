function setup() {
  createCanvas(600, 400);
}

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let xRaquete = 5;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let hit = false;
let meusPontos = 0;
let pontosOponente= 0;

function draw() {
  background(0);

  mostraMovimentaBolinha();
  mostraMovimentaRaquete();
  seTocarNaBordaVolte();
  movimentaRaqueteOponente();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  placar();
  pontuacao();
  
  
  function placar() {
    textSize(32);
    text(meusPontos, 200, 50);
    text(pontosOponente, 400,50);
    fill(255);
  }
  
  function pontuacao(){
    if (xBolinha - raio <= 0){
      pontosOponente++;
     }
    if (xBolinha + raio >= width){
      meusPontos++;
    }
  }

  function movimentaRaqueteOponente() {
    yRaqueteOponente = yBolinha - raqueteAltura / 2 - 100;
  }
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);

  function mostraMovimentaRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);

    if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }

  function colisaoRaquete(x, y) {
    hit = collideRectCircle(
      x,
      y,
      raqueteComprimento,
      raqueteAltura,
      xBolinha,
      yBolinha,
      diametro
    );
    if (hit) {
      velocidadeXBolinha *= -1;
    }
  }

  function seTocarNaBordaVolte() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
  function mostraMovimentaBolinha() {
    circle(xBolinha, yBolinha, diametro);
    xBolinha -= velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
}