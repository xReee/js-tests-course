import {GameMain} from '../main.js'
import {Modal} from './Modal.js';
import {FalaNPC, side} from './FalaNPC.js';

var game = new GameMain();
var testTryNumber = 5;
var lifeNumber = 0;
var buttonLocked = false

$(document).ready(function() {
    Modal.show("#modal-tutorial");
    resetGame();
});

function resetGame() {
  game = new GameMain();
  testTryNumber = 5;
  lifeNumber = game.jogador.vidasDoJogador;
  buttonLocked = false;

  updateMenuNumbers();
  configurarBotoes();
  resetSpeach()
  $(".gameplay").html("");
  $(".shouldSelectTool").css({ opacity: 0});
  controlButton(true);
}

function updateMenuNumbers() {
  lifeNumber = game.jogador.vidasDoJogador;
  testTryNumber = game.jogador.numeroTestes;
  $(".monster-number").text(testTryNumber);
  $(".life-number").text(lifeNumber);
}

function resetSpeach() {
  let fala = new FalaNPC(side.left);
  fala.resetSpeach();
}

//exibir ajuda
$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '97') {
    Modal.show("#modal-tutorial");
  }
});

function configurarBotoes() {
  $(".slot").click(function() {
    changeTool(this);
  });

  $("#atackButton").click(attackAction);
  $("#testButton").click(testAction);
  $("#jogadas").click(checkGameplay);
}

function blink(elem) {
  $(elem).fadeTo('fast', 0.2).fadeTo('fast', 1.0);
}

function changeTool(elem) {
  blink(elem);
  var elementPosition = parseInt($(elem).attr("id").replace('n', '')) - 1;
  var actualAttack = game.jogador.jogadaAtual()
  var atackWithoutOldValue = actualAttack.filter(item => item !== elementPosition);
  var newTool = actualAttack[elementPosition]
  var shouldContinue = true;
  
  while (shouldContinue) {
    newTool++;
    if (newTool > 5) newTool = 0;
    if (!atackWithoutOldValue.includes(newTool)) {
      game.jogador.atualizarArma(newTool, elementPosition);
      shouldContinue = false;
    }
  }
  controlButton(true);
  $(elem).children('#tool').attr("src","reset-assets/elements/"+ newTool +".svg");
  $(".shouldSelectTool").css({ opacity: 0});
}

function checkGameplay() {
  Modal.show('#modal-gameplay');
}

function buttonAction(isTesting) {
  var buttonID = isTesting ? "#monster" : "#heart"
  addGame();
  $(".shouldSelectTool").css({ opacity: 1});
  game.testarJogo(isTesting);
  updateMenuNumbers();
  blink(buttonID);
  controlButton(false);
  if (!isTesting) {checkResults();}
  speakResults(!isTesting)
}

function attackAction() {
  buttonAction(false);
}

function testAction() {
  if (!buttonLocked) {
    buttonAction(true);
  }
}

function controlButton(shouldUnlock) {
  var unlockCondition = (testTryNumber > 0 && shouldUnlock);
  $('#testButton').prop("disabled", unlockCondition);
  $('#testButton').css({ opacity: unlockCondition ? 1 : 0.1});
  $(".shouldSelectTool").css({ opacity: unlockCondition});
  buttonLocked = !unlockCondition;
}

function checkResults() {
  if (game.jogo.verificarSeTerminou()) {
    var result = game.verificarResultadoFinal()
    Modal.fimJogoMostrarResultado(result);
    resetGame();
  }
}

function speakResults(isAttacking) {
  if (isAttacking) {
    let speak = new FalaNPC(side.right);
    speak.speakAttack(lifeNumber);
  } else {
    let speak = new FalaNPC(side.left);
    speak.speakTest(game.armasCorretasNaPosicaoCorreta, game.armasCorretasNaPosicaoErrada);
  }
}

function addGame() {
  var userGame = game.jogador.jogadaAtual();
  $(".gameplay").append(`
          <div class="row results">
                <div class="div-transparent"></div>
                <h4>Corretos: `+ game.armasCorretasNaPosicaoCorreta +` • Corretos na posição errada: `+ game.armasCorretasNaPosicaoErrada +` • Jogada:</h4>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/elements/`+ userGame[0]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/elements/`+userGame[1]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/elements/`+userGame[2]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/elements/`+userGame[3]+`.svg"></span>
          </div>
    `);
}