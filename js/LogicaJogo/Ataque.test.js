import { Ataque, AtaqueSpy } from './Ataque.js';


test('conferirAtaque quando tiver uma arma certa no canto errado', () => {
    var armas = [1, 2, 3, 4];
    var ataque = new Ataque(armas)
    var defesaDoMonstro = [1, 2, 4, 5] // 3 no canto errado

    ataque.conferirAtaque(defesaDoMonstro);

    expect(ataque.armasCorretasNaPosicaoErrada).toEqual(1);
});

test('GIVEN ataqueCorreto, WHEN conferir ataque, THEN o jogador ganhou', () => {
    // given
    var armas = [1, 2, 3, 4];
    var ataque = new Ataque(armas)
    var defesaDoMonstro = [1, 2, 3, 4];

    //when
    var resultado = ataque.conferirAtaque(defesaDoMonstro);

    //then
    expect(resultado).toBeTruthy();
});

describe('GIVEN ataqueCorreto', () => {
    var armas = [1, 2, 3, 4];
    var ataque = new Ataque(armas)
    var defesaDoMonstro = [1, 2, 3, 4];

    describe('WHEN conferir ataque', () => {
        var resultado = ataque.conferirAtaque(defesaDoMonstro);

        test('THEN o jogador ganhou', () => {
            expect(resultado).toBeTruthy();
        });
    });
});

test('GIVEN ataqueCorreto, WHEN conferir ataque, THEN acertou 4 armas e chamou acertouArmas', () => {
    // given
    var armas = [1, 2, 3, 4];
    var ataque = new AtaqueSpy(armas)
    var defesaDoMonstro = [4, 3, 2, 1];

    //when
    var resultado = ataque.conferirAtaque(defesaDoMonstro);

    //then
    expect(ataque.chamouAcertouArma).toEqual(4);
    expect(resultado).toBeFalsy();
    
});
