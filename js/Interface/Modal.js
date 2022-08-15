import { TagStrings, MessageString } from "../Config/GameStrings.js";

export class Modal {
    static show(valorModal) {
        $(valorModal).modal('show');
    }

    static fimJogoMostrarResultado(ganhou) {
        var title = ""
        var subtitle = ""

        title = ganhou ? MessageString.modalWinTitle : MessageString.modalLostTitle
        subtitle = ganhou ? MessageString.modalWinSubitle : MessageString.modalLostSubitle
          
        $(TagStrings.modalTitle).html(title);
        $(TagStrings.modalSubitle).html(subtitle);
        this.show(TagStrings.modalGameOver);
    }
}