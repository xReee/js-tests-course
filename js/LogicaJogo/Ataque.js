export class Ataque {
    constructor(armas) {
        this.armas = armas;
        this.armasCorretasNaPosicaoCorreta = 0;
        this.armasCorretasNaPosicaoErrada = 0;
      }

    conferirAtaque(defesaDoMonstro){
        count = 0;
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