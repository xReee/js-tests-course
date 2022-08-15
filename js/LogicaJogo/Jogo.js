export class Jogo {
    constructor(monstro, jogador) {
        this.monstro = monstro;
        this.vitoria = false;
        this.jogador = jogador;
    }

    atacar(ataque) {
        if (this.monstro.defesa == []) {
            this.monstro.gerarDefesa()
        }
        var defesa = this.monstro.defesa
        this.vitoria = ataque.conferirAtaque(defesa);

        if (!this.vitoria) {
            this.jogador.vidasDoJogador -= 1
        }
    }
}