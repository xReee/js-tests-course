import { GameStrings } from "../Config/GameStrings.js";

export class Modal {
    static show(valorModal) {
        $(valorModal).modal('show');
    }

    static fimJogoMostrarResultado(ganhou) {
        var title = ""
        var subtitle = ""

        if (ganhou) {
            title = GameStrings.ModalWinTitle
            subtitle = GameStrings.ModalWinSubitle
            
        } else {
            title = GameStrings.ModalLostTitle
            subtitle = GameStrings.ModalLostSubitle
        }
        
        $(GameStrings.ModalTitle).html(title);
        $(GameStrings.ModalSubitle).html(subtitle);
        this.show(GameStrings.ModalGameOver);
    }
}