export class Jogador {
    constructor(vidasDoJogador) {
        this.vidasDoJogador = vidasDoJogador;
    }
    
    foiDerrotado(ataque) {
        return this.vidasDoJogador;
    }

    sofrerDano() {
        this.vidasDoJogador -= 1;
    }
}