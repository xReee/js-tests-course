export class Ataque {
    constructor(armas) {
        this.armas = armas;
        this.armasCorretasNaPosicaoCorreta = 0;
        this.armasCorretasNaPosicaoErrada = 0;
      }

    conferirAtaque(defesaDoMonstro) {
        var count = 0;
        for(armaDefensiva in defesaDoMonstro) {
            if (armaDefensiva == this.armas[count]) {
                this.acertouAtaque();
            } else if (armaDefensiva in this.armas) { 
                this.acertouArma();
            }

            count++;
        }
    }
    
    acertouAtaque(){
        this.armasCorretasNaPosicaoCorreta++;
    }
    
    acertouArma(){
        this.armasCorretasNaPosicaoErrada++;
    }

    conferirSeGanhou() {
        return this.armasCorretasNaPosicaoCorreta == 5;
    }
}