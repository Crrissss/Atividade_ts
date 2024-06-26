"use strict";
//1. Crie uma classe Contador, que encapsule um valor usado para
//contagem de itens ou eventos. A classe deve oferecer métodos que
//devem:
//a) Zerar;
//b) Incrementar;
//c) Retornar o valor do contador.
class Contador {
    constructor(valor) {
        this.valor = valor;
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    retonro() {
        return this.valor;
    }
}
const contador = new Contador(4);
contador.incrementar();
console.log(contador.retonro());
