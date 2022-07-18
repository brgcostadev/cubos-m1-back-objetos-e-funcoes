let questoesCorretas = 0

function corrigirProva(prova) {
    for (let questao of prova.questoes) {
        if (questao.resposta == questao.correta) {
            questoesCorretas++
        }
    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${questoesCorretas * 2}`)
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova)