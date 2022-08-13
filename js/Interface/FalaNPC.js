import {ClassStrings, MessageString} from '../Config/GameStrings.js';

export const side = {
    left: ClassStrings.bubleLeft,
    right: ClassStrings.bubleRight
}

export class FalaNPC { 
    constructor(ladoBalao) {
        this.ladoBalao = ladoBalao
    }

    resetSpeach() {
        this.speak("Hmm.. melhor testar primeiro!");
      }

    speakAttack(lifeNumber) {
        let mensagem = "Hehe! Você errou, perdeu 1 ponto de vida! Agora você só tem mais " + (lifeNumber - 1) + " de vida!"
        this.speak(mensagem);
    }

    speakTest(rightAnwsers, rightColorWrongPositions) {
        let rightAnwsersLb = rightAnwsers > 1 ? MessageString.rightAnwsersPlural : MessageString.rightAnwsers
        let rightColorWrongPositionsLb = rightColorWrongPositions > 1 ? MessageString.rightColorWrongPositionsPlural : MessageString.rightColorWrongPositions
        let mensagem = "<b>Resultado do teste</b>: você acertou " +
          rightAnwsers + rightAnwsersLb + "! Tirando isso, " +
          rightColorWrongPositions + rightColorWrongPositionsLb;

        this.speak(mensagem);
    }

    speak(mensagem) { 
        $(ClassStrings.speach).html(mensagem);
        let ladoBalaoRemover = (this.ladoBalao == side.left) ? side.right : side.left
        $(ClassStrings.speach).removeClass(ladoBalaoRemover).addClass(this.ladoBalao)
    } 
}