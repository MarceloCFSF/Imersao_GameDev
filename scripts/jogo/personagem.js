class Personagem {
    constructor(imagem, tamanho, larguraBase, alturaBase, frames, posicaox, posicaoy) {
        this.imagem = imagem
        this.x = 0
        this.y = 0
        this.frame = sqrt(frames) - 1
        this.largura = larguraBase * tamanho
        this.altura = alturaBase * tamanho
        this.larguraBase = larguraBase
        this.alturaBase = alturaBase
        this.posicaox = posicaox
        this.posicaoy = posicaoy
    }

    exibe() {
        const posicaoy = height - this.altura - this.posicaoy
        image(this.imagem, this.posicaox, posicaoy, this.largura, this.altura, this.x, this.y, this.larguraBase, this.alturaBase)

        this.anima()
    }

    anima() {
        const maxLargura = this.frame * this.larguraBase
        const maxAltura = this.frame *this.alturaBase

        if (this.x >= maxLargura) {
            this.x = 0
            if (this.y >= maxAltura) {
                this.y = 0
            }
            else 
                this.y = this.y + this.alturaBase
        }
        else {
            this.x = this.x + this.larguraBase
        }
    }
}