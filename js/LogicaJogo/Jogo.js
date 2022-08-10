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
          
        self.vitoria = ataque.conferirAtaque(self.monstro.defesa);

        if (!this.vitoria) {
            this.jogador.vidasDoJogador -= 1
        }
    }
}