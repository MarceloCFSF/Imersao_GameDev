class Personagem extends Animacao {
    constructor(imagem, tamanho, larguraBase, alturaBase, frames, framex, framey, posicaox, posicaoy) {
        super(imagem, tamanho, larguraBase, alturaBase, frames, framex, framey, posicaox, posicaoy)

        this.ybase = this.posicaoy

        this.velocidadeDoPulo = 0
        this.alturaDoPulo = - 35
        this.gravidade = 3
        this.pulo = 0
        this.estainvencivel = false
    }
    pula() {
        if (this.pulo < 2) { 
            this.velocidadeDoPulo = this.alturaDoPulo
            this.pulo ++
        }
    }

    aplicaGravidade() {
        this.posicaoy = this.posicaoy + this.velocidadeDoPulo
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.posicaoy > this.ybase) {
            this.posicaoy = this.ybase
            this.pulo = 0
        }
    }

    invencivel() {
        this.estainvencivel = true
        setTimeout(() => {
            this.estainvencivel = false
        }, 1000)
    }

    colisao(inimigo) {
        if(this.estainvencivel) {
            return false
        }
        noFill()
        const precisaoT = 0.7
        const precisaoP = 1
        // rect(this.posicaox * precisaoP, this.posicaoy * precisaoP, this.largura * precisaoT, this.altura * precisaoT)
        // rect(inimigo.posicaox * precisaoP, inimigo.posicaoy * precisaoP, inimigo.largura * precisaoT, inimigo.altura * precisaoT)
        const colide = collideRectRect(
            this.posicaox * precisaoP, 
            this.posicaoy * precisaoP, 
            this.largura * precisaoT,
            this.altura * precisaoT,
            inimigo.posicaox * precisaoP,
            inimigo.posicaoy * precisaoP,
            inimigo.largura * precisaoT,
            inimigo.altura * precisaoT,
        )

        return colide
    }
}