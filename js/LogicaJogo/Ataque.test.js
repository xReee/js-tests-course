import { Ataque } from './Ataque.js';


test('conferirAtaque quando tiver uma arma certa no canto errado', () => {
    var armas = [1, 2, 3, 4];
    var ataque = new Ataque(armas)
    var defesaDoMonstro = [1, 2, 4, 5] // 3 no canto errado

    ataque.conferirAtaque(defesaDoMonstro);

    expect(ataque.armasCorretasNaPosicaoErrada).toEqual(1);
});

test('dado: ArmasCertas, quando: conferirAtaque se ganhou', () => {
    var armas = [1, 2, 3, 4];
    var ataque = new Ataque(armas)
    var defesaDoMonstro = [1, 2, 3, 4];

    var resultado = ataque.conferirAtaque(defesaDoMonstro);

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
