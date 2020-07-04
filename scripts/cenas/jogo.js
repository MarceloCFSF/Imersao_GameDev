class Jogo {
    constructor(){
        this.indice = 0
        this.mapa = fita.mapa
    }

    setup(){
        cenario = new Cenario(imagemCenario, 5);
        pontuacao = new Pontuacao()

        // Personagem
        personagem = new Personagem(imagemPersonagem, proporcao, 220, 270, 16, 4, 4, 10, chao);

        // Inimigos
        gotinha = new Inimigo(imagemGotinha, proporcao, 104, 104, 28, 4, 7, width - 100, chao, 10);
        gotinhaVoadora = new Inimigo(imagemGotinhaVoadora, proporcao, 200, 150, 16, 3, 6, width - 100, 200, 10);
        troll = new Inimigo(imagemTroll, proporcao, 400, 400, 28, 5, 6, width - 52, 0, 10);

        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

        inimigos.push(gotinha)
        inimigos.push(gotinhaVoadora)
        inimigos.push(troll)
    }
    
    keyPressed(key){
        if(key == 'ArrowUp'){
            personagem.pula()
            somDoPulo.play()
          }
    }
    
    draw(){
        // Cenario
        cenario.exibe()
        cenario.move()

        vida.draw()
        
        // Pontuação
        pontuacao.exibe()
        pontuacao.adcionarPonto()

        // Personagem
        personagem.exibe()
        personagem.aplicaGravidade()

        
        // Inimigos
        const linhaAtual = this.mapa[this.indice]
        const inimigo = inimigos[linhaAtual.inimigo];
        console.log(inimigo)
        const inimigoVisivel = inimigo.posicaox < - inimigo.largura;
        
        // inimigo.velocidade = inimigo.velocidade + 1
        
        inimigo.exibe()
        inimigo.move()
        
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece()
            if(this.indice > this.mapa.length - 1) {
            this.indice = 0;
            }
        }

        if(personagem.colisao(inimigo)) {
            vida.perdeVida()
            personagem.invencivel()
            if(vida.vidas == -1) {
                image(imagemGameOver, width/2 -200, height/3)
                noLoop()
            }
        }
    }
}