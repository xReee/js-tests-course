export class Jogador {
    constructor(vidasDoJogador) {
        this.vidasDoJogador = vidasDoJogador;
        this.jogada = [0,1,2,3];
    }

    atualizarArma(novaArma, posicao) {
        this.jogada[posicao] = novaArma;
    }

    jogadaAtual() {
        return this.jogada;
    }
    
    foiDerrotado(ataque) {
        return this.vidasDoJogador;
    }

    sofrerDano() {
        this.vidasDoJogador -= 1;
    }

    reset(vidasDoJogador) {
        this.vidasDoJogador = vidasDoJogador;
    }
}