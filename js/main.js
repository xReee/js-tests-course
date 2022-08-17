import {Monstro} from './LogicaJogo/Monstro.js';
import {Jogo} from './LogicaJogo/Jogo.js';
import {Jogador} from './LogicaJogo/Jogador.js';
import {Ataque} from './LogicaJogo/Ataque.js';


export class GameMain {
  constructor() {
    this.monstro = new Monstro();
    this.jogador = new Jogador(3);
    this.jogo = new Jogo(this.monstro, this.jogador);
    this.armasCorretasNaPosicaoCorreta = 0;
    this.armasCorretasNaPosicaoErrada = 0;
  }

  testarJogo(ehTeste) {
    var jogadaAtual = this.jogador.jogadaAtual();
    var novoTeste = new Ataque(jogadaAtual);

    this.jogo.testarDefesa(novoTeste, ehTeste);
    
    if (!ehTeste) {
      this.jogador.recomecarTestes();
    }

    this.armasCorretasNaPosicaoCorreta = novoTeste.armasCorretasNaPosicaoCorreta;
    this.armasCorretasNaPosicaoErrada = novoTeste.armasCorretasNaPosicaoErrada;

  }

  verificarResultadoFinal() {
    var jogadorDerrotado = this.jogo.verificarSeJogadorPerdeu();
    var jogadorGanhou = this.jogo.verificarSeJogadorGanhou();
    
    return !jogadorDerrotado && jogadorGanhou
  }

}