import {ClassStrings} from '../Config/GameStrings.js';

export const side = {
    left: ClassStrings.bubleLeft,
    right: ClassStrings.bubleRight
}

export class FalaNPC { 
    constructor(mensagem, ladoBalao) {
        this.mensagem = mensagem;
        this.ladoBalao = ladoBalao
    }

    speak(mensagem, ladoBalao) { 
        $(ClassStrings.speach).html(this.mensagem);
        let ladoBalaoRemover = (this.ladoBalao == side.left) ? side.right : side.left
        $(ClassStrings.speach).removeClass(ladoBalaoRemover).addClass(this.ladoBalao)
    } 
}