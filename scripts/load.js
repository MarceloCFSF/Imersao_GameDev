function preload() {
    imagemCenario = loadImage('assets/imagens/cenario/floresta.png')
    imagemGameOver = loadImage('assets/imagens/assets/game-over.png')
    imagemPersonagem = loadImage('assets/imagens/personagem/correndo.png')
    imagemGotinha = loadImage('assets/imagens/inimigos/gotinha.png')
    imagemGotinhaVoadora = loadImage('assets/imagens/inimigos/gotinha-voadora.png')
    imagemTroll = loadImage('assets/imagens/inimigos/troll.png')
    somDoJogo = loadSound('assets/sons/trilha_jogo.mp3')
    somDoPulo = loadSound('assets/sons/somPulo.mp3')
    imagemTelaInicial = loadImage('assets/imagens/assets/telaInicial.png')
    imagemVida = loadImage('assets/imagens/assets/coracao.png')
    fonteTelaInicial = loadFont('assets/imagens/assets/fonteTelaInicial.otf')
    fita = loadJSON('fita/fita.json')
  }