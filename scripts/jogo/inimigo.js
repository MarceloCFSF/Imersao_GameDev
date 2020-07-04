class Inimigo extends Animacao {
    constructor(imagem, tamanho, larguraBase, alturaBase, frames, framex, framey, posicaox, posicaoy, velocidade) {
        super(imagem, tamanho, larguraBase, alturaBase, frames, framex, framey, posicaox, posicaoy)

        this.velocidade = velocidade
        this.posicaox = width
    }

    move() {
        this.posicaox = this.posicaox - this.velocidade
    }

    aparece() {
        this.posicaox = width
    }
}