export class Ataque {
    constructor(armas) {
        this.armas = armas;
        this.armasCorretasNaPosicaoCorreta = 0;
        this.armasCorretasNaPosicaoErrada = 0;
    }

    conferirAtaque(defesaDoMonstro) {
        var count = 0;
        for (var armaDefensiva of defesaDoMonstro) {
            if (armaDefensiva == this.armas[count]) {
                this.acertouAtaque();
            } else if (this.armas.includes(armaDefensiva)) {
                this.acertouArma();
            }

            count++;
        }
        return this.conferirSeGanhou();
    }

    acertouAtaque() {
        this.armasCorretasNaPosicaoCorreta++;
    }

    acertouArma() {
        this.armasCorretasNaPosicaoErrada++;
    }

    conferirSeGanhou() {
        return this.armasCorretasNaPosicaoCorreta == 4;
    }
}

export class AtaqueSpy extends Ataque { 
    constructor(armas) {
        super(armas)
        this.chamouAcertouArma = 0
    }

    // sobrescrevendo a função da classe original
    acertouArma() {
        //contiua rodando para ter o que precisa ter na função principal
        super.acertouArma()
        //adiciona uma linha nova à função para adicionar um contador
        this.chamouAcertouArma++;
    }
}
