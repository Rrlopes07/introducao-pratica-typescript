"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'Tudo bem?';
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor;
unknownValor = 3;
unknownValor = 'Tudo bem?';
unknownValor = true;
unknownValor = 'vai sim';
let stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw (erro, codigo) => {
        console.log(erro.message);
    };
}
jogaErro('Erro', 500);
