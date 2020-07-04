class Animacao {
    constructor(imagem, tamanho, larguraBase, alturaBase, frames, framex, framey, posicaox, posicaoy) {
        this.imagem = imagem
        this.x = 0
        this.y = 0
        this.frames = frames
        this.framex = framex - 1
        this.framey = framey - 1
        this.frame = 1
        this.largura = larguraBase * tamanho
        this.altura = alturaBase * tamanho
        this.larguraBase = larguraBase
        this.alturaBase = alturaBase
        this.posicaox = posicaox
        this.posicaoy = height - this.altura - posicaoy
    }

    exibe() {
        image(this.imagem, this.posicaox, this.posicaoy, this.largura, this.altura, this.x, this.y, this.larguraBase, this.alturaBase)

        this.anima()
    }

    anima() {
        const maxLargura = this.framex * this.larguraBase
        const maxAltura = this.framey *this.alturaBase

        if (this.frame < this.frames) {
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
            this.frame++
        } else {
            this.frame = 1
            this.x = 0
            this.y = 0
        }

    }
}