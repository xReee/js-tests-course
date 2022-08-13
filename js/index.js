import {Monstro} from './LogicaJogo/Monstro.js';
import {Jogo} from './LogicaJogo/Jogo.js';
import {Jogador} from './LogicaJogo/Jogador.js';
import {Ataque} from './LogicaJogo/Ataque.js';
import {Modal} from './Interface/Modal.js';
import {FalaNPC, side} from './Interface/FalaNPC.js';


var userPassword = [0, 1, 2, 3];
var lifeNumber = 3;
var monsterNumber = 5;

var monstro = new Monstro();
var jogador = new Jogador(5);
var jogo = new Jogo(monstro, jogador);

var changeTool = function(elem) {
  deslockutton();
  var id = parseInt($(elem).attr("id").replace('n','')) - 1;
  var arrayWithoutOldValue = userPassword.filter(item => item !== id)
  var newPassword = userPassword[id]
  var shouldContinue = true;

  while (shouldContinue) {
    newPassword++;
    if (newPassword > 5) newPassword = 0;
    if (!arrayWithoutOldValue.includes(newPassword)) {
      userPassword[id] = newPassword;
      shouldContinue = false;
    }
  }
  userPassword[id] = newPassword 
  $(elem).children('#tool').attr("src","reset-assets/tools/arma"+ userPassword[id]+".svg");
  blink(elem);
}

function blink(elem) {
  $(elem).fadeTo('fast', 0.2).fadeTo('fast', 1.0);
}

function test() {
  let ataque = new Ataque(userPassword)

  checkPassword(ataque, false);
  lockButtons();
  addGame();

  if (ataque.conferirSeGanhou()) {
    blink($("#monster"));
    monsterNumber--;
  } 
  if (monsterNumber == 0) {
    $('#testButton').unbind('click', test);
    $('#testButton').css({ opacity: 0.1});
  }
  updateMenuNumbers();
}

function atack() {
  var ataque = new Ataque(userPassword);

  addGame();
  lockButtons();
  checkPassword(ataque, true);
  // if (rightAnwsers != 4) {
  //   lifeNumber--;
  //   blink($("#heart"));

  //   if (lifeNumber == 0) {
  //     lostGame();
  //  } else if (monsterNumber == 0) {
  //     resetTests();
  //   }
  //   updateMenuNumbers();
  // } else {
  //   winGame();
  // }
}

function lockButtons() {
  $('#testButton').prop("disabled",true);
  $('#testButton').css({ opacity: 0.1});
  $(".shouldSelectTool").css({ opacity: 1});
}

function deslockutton(){
  if (monsterNumber != 0) {
    $('#testButton').prop("disabled",false);
    $('#testButton').css({ opacity: 1});
    $(".shouldSelectTool").css({ opacity: 0});
  }
}

function checkPassword(novoAtaque, ehAtaque) {
  novoAtaque.conferirAtaque(monstro.defesa);
  if (ehAtaque) {
    let fala = new FalaNPC(side.right);
    fala.speakAttack(lifeNumber);
  } else {
    let fala = new FalaNPC(side.left);
    fala.speakTest(novoAtaque.armasCorretasNaPosicaoCorreta, novoAtaque.armasCorretasNaPosicaoErrada);
  }
}

function updateMenuNumbers() {
  $(".monster-number").text(monsterNumber);
  $(".life-number").text(lifeNumber);
}

function winGame() {
  Modal.fimJogoMostrarResultado(true);
  resetGame();
}

function lostGame() {
  Modal.fimJogoMostrarResultado(false);
  resetGame();
}

function resetGame() {
  jogador = new Jogador(5);
  monstro = new Monstro();
  monstro.gerarDefesa();
  jogo = new Jogo(monstro, jogador);
  
  updateMenuNumbers();
  resetTests();
  resetSpeach()
  $(".gameplay").html("");
  $(".shouldSelectTool").css({ opacity: 0});
}

function resetSpeach() {
  $(".speach").html("Hmm.. melhor testar primeiro!");
  $(".speach").addClass('bubble-bottom-left').removeClass('bubble-bottom-right');
}

function resetTests() {
  monsterNumber = 5;
  $("#testButton").bind('click', test);
  $('.testButton').css({ opacity: 1});
}

function checkGameplay() {
  Modal.show('#modal-gameplay');
}

function addGame() {
  $(".gameplay").append(`
          <div class="row results">
                <div class="div-transparent"></div>
                <h4>Corretos: `+ jogo.armasCorretasNaPosicaoCorreta +` • Corretos na posição errada: `+ jogo.armasCorretasNaPosicaoErrada +` • Jogada:</h4>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+ userPassword[0]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[1]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[2]+`.svg"></span>
                <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[3]+`.svg"></span>
          </div>
    `);
}

$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  console.log(keycode);
  if(keycode == '97') {
    Modal.show("#modal-tutorial");
  }
});

$(document).ready(function() {
  resetGame();
  configurarBotoes();
  Modal.show("#modal-tutorial");
});

function configurarBotoes() {
  $(".slot").click(function() {
    changeTool(this);
  });

  $("#atackButton").click(atack);
  $("#jogadas").click(checkGameplay);
}