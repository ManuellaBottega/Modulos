function adicionarMissaoAoGerenciador(rl, missoes, menu) {
    rl.question('Digite o nome da missão: ', (nome) => {
        rl.question('Digite o destino da missão (ex: Marte, Júpiter, Saturno, etc.): ', (destino) => {
            rl.question('Digite a prioridade da missão de 1 a 5: ', (prioridade) => {
                const prioridadeParsed = parseInt(prioridade);
                if (isNaN(prioridadeParsed) || prioridadeParsed < 1 || prioridadeParsed > 5) {
                    console.log('Prioridade inválida! Por favor, digite um número entre 1 e 5.');
                    adicionarMissaoAoGerenciador(rl, missoes, menu);
                } else {
                    const tripulantes = [];
                    perguntarTripulantes(rl, nome, destino, prioridadeParsed, tripulantes, missoes, menu);
                }
            });
        });
    });
}

function perguntarTripulantes(rl, nome, destino, prioridade, tripulantes, missoes, menu) {
    rl.question("Adicionar um tripulante: ", (tripulante) => {
        tripulantes.push(tripulante);
        rl.question("Deseja adicionar outro tripulante? (s/n)", (res) => {
            if (res.toLowerCase() === 's') {
                perguntarTripulantes(rl, nome, destino, prioridade, tripulantes, missoes, menu);
            } else {
                const missao = {
                    nome: nome,
                    destino: destino,
                    prioridade: prioridade,
                    tripulantes: tripulantes,
                    concluida: false,
                };
                missoes.push(missao);
                console.log('Missão adicionada com sucesso!');
                menu(rl);
            }
        });
    });
}

module.exports = adicionarMissaoAoGerenciador;
