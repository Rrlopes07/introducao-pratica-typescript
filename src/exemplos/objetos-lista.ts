const pessoa = {
    nome: 'Mariana',
    idade: 25,
    profissao:'desenvolvedora'
}

pessoa.idade = 26;

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol,
    Pintor
}

const andre: Pessoa = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Pintor
}

const paula: Pessoa = {
    nome: 'Paula',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

interface Pessoa {
    nome: string;
    idade: number;
    profissao?: Profissao;
}

interface Estudante extends Pessoa {
    materias: string[];
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['HTML', 'CSS', 'JavaScript']
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 24,
    materias: ['Matematica', 'CSS', 'JavaScript']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(monica.materias);