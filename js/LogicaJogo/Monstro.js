export class Monstro {
  constructor() {
    this.defesa = [];
  }

  gerarDefesa = function () {
    var novaDefesa = [];
    for (var i = 0; i <= 3; i++) {
      var numero = Math.floor((Math.random() * 6));
      if (novaDefesa.includes(numero)) {
        i--;
      } else {
        novaDefesa[i] = numero;
      }
    }
    this.defesa = novaDefesa;
  }

  reset() {
    this.gerarDefesa();
  }
}