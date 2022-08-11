
export class Modal {
    static show(valorModal) {
        $(valorModal).modal('show');
    }

    static fimJogoMostrarResultado(ganhou) {
        var title = ""
        var subtitle = ""

        if (ganhou) {
            title = "Parabéns!!!";
            subtitle = "Você acertou todas as armas e derrotou o monstro!!!";
        } else {
            title = "Você perdeu!!";
            subtitle = "Tente novamente, você consegue!!";
        }
        
        $("#modal-title").html(title);
        $("#modal-subtitle").html(subtitle);
        this.show("#modal-gameover")
    }
}