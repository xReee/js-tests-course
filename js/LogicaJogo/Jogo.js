export class Jogo {
    constructor(monstro, jogador) {
        this.monstro = monstro;
        this.vitoria = false;
        this.jogador = jogador;
    }

    testarDefesa(ataque, ehTeste) {
        if (this.monstro.defesa.length < 1) {
            this.monstro.gerarDefesa()
        }
        console.log(this.monstro.defesa);
        var defesa = this.monstro.defesa
        this.vitoria = ataque.conferirAtaque(defesa);

        if (ehTeste) {
            this.jogador.gastarTeste()
        } else if (!this.vitoria) {
            this.jogador.sofrerDano();
        }
    }

    verificarSeJogadorGanhou() {
        return this.vitoria;
    }

    verificarSeJogadorPerdeu() {
        return this.jogador.vidasDoJogador < 1;
    }
    
    verificarSeTerminou() {
        console.log(this.verificarSeJogadorPerdeu())
        console.log(this.vitoria)
        return this.verificarSeJogadorPerdeu() || this.verificarSeJogadorGanhou()
    }
}