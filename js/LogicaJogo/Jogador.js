export class Jogador {
    constructor(vidasDoJogador) {
        this.vidasDoJogador = vidasDoJogador;
        this.numeroTestes = 5;
        this.jogada = [0,1,2,3];
    }

    atualizarArma(novaArma, posicao) {
        this.jogada[posicao] = novaArma;
    }

    jogadaAtual() {
        return this.jogada;
    }
    
    sofrerDano() {
        this.vidasDoJogador -= 1;
    }

    gastarTeste() {
        this.numeroTestes -= 1;
    }

    recomecarTestes() {
        this.numeroTestes = 5;
    }

    reset(vidasDoJogador) {
        this.vidasDoJogador = vidasDoJogador;
    }
}