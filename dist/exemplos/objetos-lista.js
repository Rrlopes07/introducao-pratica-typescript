"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 25,
    profissao: 'desenvolvedora'
};
pessoa.idade = 26;
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
    Profissao[Profissao["Pintor"] = 4] = "Pintor";
})(Profissao || (Profissao = {}));
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Pintor
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Desenvolvedora
};
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['HTML', 'CSS', 'JavaScript']
};
const monica = {
    nome: 'Monica',
    idade: 24,
    materias: ['Matematica', 'CSS', 'JavaScript']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materias);
