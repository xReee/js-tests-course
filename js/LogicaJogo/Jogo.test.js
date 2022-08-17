import { Ataque } from './Ataque.js';
import { Jogador } from './Jogador.js';
import { Jogo } from './Jogo.js';
import { MonstroStub } from './Monstro.js';

// Vamos testar o caso da pessoa errar o ataque, se vai fazer o jogador perder vida

test('GIVEN ataque certo, WHEN testar defesa, THEN vitoria é true', () => {
    var armas = [1, 2, 3, 4];
    var monstro = new MonstroStub(); // sabemos que as armas são 1,2,3,4
    var jogador = new Jogador(4);
    var jogo = new Jogo(monstro, jogador)
    var ataque = new Ataque(armas)

    jogo.testarDefesa(ataque, true);

    expect(jogo.vitoria).toBeTruthy();
});

test('GIVEN dois ataques corretos, WHEN testar defesa, THEN vitoria é false', () => {
    var armas = [1, 2, 6, 5];
    var monstro = new MonstroStub(); // sabemos que as armas são 1,2,3,4
    var jogador = new Jogador(4);
    var jogo = new Jogo(monstro, jogador)
    var ataque = new Ataque(armas)

    jogo.testarDefesa(ataque, true);

    expect(jogo.vitoria).toBeFalsy();
});
