import { TagStrings, MessageString } from "../Config/GameStrings.js";

export class Modal {
    static show(valorModal) {
        $(valorModal).modal('show');
    }

    static fimJogoMostrarResultado(ganhou) {
        var title = ""
        var subtitle = ""

        if (ganhou) {
            title = GameStrings.modalWinTitle
            subtitle = MessageString.modalWinSubitle
            
        } else {
            title = MessageString.modalLostTitle
            subtitle = MessageString.modalLostSubitle
        }
        
        $(TagStrings.modalTitle).html(title);
        $(TagStrings.modalSubitle).html(subtitle);
        this.show(TagStrings.modalGameOver);
    }
}