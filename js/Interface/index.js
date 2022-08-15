import {GameMain} from '../main.js'
import {Modal} from './Modal.js';
import {FalaNPC, side} from './FalaNPC.js';

var game = new GameMain();
var testTryNumber = 5;
var lifeNumber = 0;

$(document).ready(function() {
    Modal.show("#modal-tutorial");
    resetGame();
});

function resetGame() {
  game = new GameMain();
  lifeNumber = game.jogador.vidasDoJogador;
  
  updateMenuNumbers();
  configurarBotoes();
  // resetTests();
  resetSpeach()
  $(".gameplay").html("");
  $(".shouldSelectTool").css({ opacity: 0});
}

function updateMenuNumbers() {
  lifeNumber = game.jogador.vidasDoJogador;
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
  console.log(keycode);
  if(keycode == '97') {
    Modal.show("#modal-tutorial");
  }
});

function configurarBotoes() {
  $(".slot").click(function() {
    changeTool(this);
  });

  $("#atackButton").click(attackAction);
  $("#jogadas").click(checkGameplay);
}

function attackAction() {
  game.testarJogo(true);
  updateMenuNumbers();
  blink("#heart");
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
  
  $(elem).children('#tool').attr("src","reset-assets/tools/arma"+ newTool +".svg");
}

function checkGameplay() {
  Modal.show('#modal-gameplay');
}

// function test() {
//   let ataque = new Ataque(userPassword)

//   checkPassword(ataque, false);
//   lockButtons();
//   addGame();

//   if (ataque.conferirSeGanhou()) {
//     blink($("#monster"));
//     monsterNumber--;
//   } 
//   if (monsterNumber == 0) {
//     $('#testButton').unbind('click', test);
//     $('#testButton').css({ opacity: 0.1});
//   }
//   updateMenuNumbers();
// }

// function atack() {
//   var ataque = new Ataque(userPassword);

//   addGame();
//   lockButtons();
//   checkPassword(ataque, true);
//   // if (rightAnwsers != 4) {
//   //   lifeNumber--;
//   //   blink($("#heart"));

//   //   if (lifeNumber == 0) {
//   //     lostGame();
//   //  } else if (monsterNumber == 0) {
//   //     resetTests();
//   //   }
//   //   updateMenuNumbers();
//   // } else {
//   //   winGame();
//   // }
// }

// function lockButtons() {
//   $('#testButton').prop("disabled",true);
//   $('#testButton').css({ opacity: 0.1});
//   $(".shouldSelectTool").css({ opacity: 1});
// }

// function deslockutton(){
//   if (monsterNumber != 0) {
//     $('#testButton').prop("disabled",false);
//     $('#testButton').css({ opacity: 1});
//     $(".shouldSelectTool").css({ opacity: 0});
//   }
// }

// function checkPassword(novoAtaque, ehAtaque) {
//   novoAtaque.conferirAtaque(monstro.defesa);
//   if (ehAtaque) {
//     let fala = new FalaNPC(side.right);
//     fala.speakAttack(lifeNumber);
//   } else {
//     let fala = new FalaNPC(side.left);
//     fala.speakTest(novoAtaque.armasCorretasNaPosicaoCorreta, novoAtaque.armasCorretasNaPosicaoErrada);
//   }
// }


// // MIGRAR
// function winGame() {
//   Modal.fimJogoMostrarResultado(true);
//   resetGame();
// }

// // MIGRAR
// function lostGame() {
//   Modal.fimJogoMostrarResultado(false);
//   resetGame();
// }

// function resetGame() {
//   jogador = new Jogador(5);
//   monstro = new Monstro();
//   monstro.gerarDefesa();
//   jogo = new Jogo(monstro, jogador);
  
//   updateMenuNumbers();
//   resetTests();
//   resetSpeach()
//   $(".gameplay").html("");
//   $(".shouldSelectTool").css({ opacity: 0});
// }

// function resetTests() {
//   monsterNumber = 5;
//   $("#testButton").bind('click', test);
//   $('.testButton').css({ opacity: 1});
// }



// function addGame() {
//   $(".gameplay").append(`
//           <div class="row results">
//                 <div class="div-transparent"></div>
//                 <h4>Corretos: `+ jogo.armasCorretasNaPosicaoCorreta +` • Corretos na posição errada: `+ jogo.armasCorretasNaPosicaoErrada +` • Jogada:</h4>
//                 <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+ userPassword[0]+`.svg"></span>
//                 <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[1]+`.svg"></span>
//                 <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[2]+`.svg"></span>
//                 <span class="col-md-2 gameplay-slot"><img id="tool" src="reset-assets/tools/arma`+userPassword[3]+`.svg"></span>
//           </div>
//     `);
// }
