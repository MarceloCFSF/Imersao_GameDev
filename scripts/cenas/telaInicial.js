class TelaInicial {
    constructor(){

    }

    draw() {
        this._imagemDeFundo()
        this._texto()
        this._botao()
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto(){
        textFont(fonteTelaInicial)
        textSize(50)
        textAlign(CENTER)
        text('As Aventuras de', width / 2, height/3)
        textSize(150)
        text('Hipsta', width / 2, height/5 * 3)
    }

    _botao(){
        botao.y = height/7 * 5
        botao.draw()
    }
}