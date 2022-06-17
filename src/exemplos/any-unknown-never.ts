let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'Tudo bem?';

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'Tudo bem?';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';

if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{
    throw (erro: Error, codigo: number) => {
        console.log(erro.message);
    }
}

jogaErro('Erro', 500);