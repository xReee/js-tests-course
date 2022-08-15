import {Monstro} from './LogicaJogo/Monstro.js';
import {Jogo} from './LogicaJogo/Jogo.js';
import {Jogador} from './LogicaJogo/Jogador.js';
import {Ataque} from './LogicaJogo/Ataque.js';


export class GameMain {
  constructor() {
    this.monstro = new Monstro();
    this.jogador = new Jogador(5);
    this.jogo = new Jogo(this.monstro, this.jogador);
  }

  testarJogo(ehAtaque) {
    // jogador pressiona botão de testar
    var jogadaAtual = this.jogador.jogadaAtual();
    var novoTeste = new Ataque(jogadaAtual);
    this.jogo.atacar(novoTeste);

    if (ehAtaque) {
      var resultado = this.jogo.vitoria;
    }
  }

}