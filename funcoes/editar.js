function EditarMissao() {
    if (missoes.length === 0) { 
        console.log('Nenhuma missão cadastrada no gerenciador.');
        console.log('\nPresione Enter para voltar ao menu...');
        rl.question('', () => menu());
    } else {
        console.log('\n=== MISSÕES REGISTRADAS ===');
        missoes.forEach((missao, index) => { 
            console.log(
                `${index + 1}. Missão: ${missao.nome} | Destino: ${missao.destino} | Prioridade: ${missao.prioridade} | Tripulantes: ${missao.tripulantes}`
            );
        });

        rl.question('\nDigite o número da missão que você deseja editar: ', (num) => {
            const index = parseInt(num, 10) - 1;
            if (index < 0 || index >= missoes.length) { 
                console.log('Número inválido');
                console.log('\nPresione Enter para voltar ao menu');
                rl.question('', () => menu());
            } else { 
                rl.question('Digite o nome da missão: ', (nome) => {
                    nomeAtual = nome
                    rl.question('Digite o destino da missão (ex: Marte, Júpiter, Saturno, etc.): ', (destino) => {
                        destinoAtual = destino
                        rl.question('Digite a prioridade da missão de 1 a 5: ', (prioridade) => {
                            const prioridadeParsed = parseInt(prioridade);
                            if (isNaN(prioridadeParsed) || prioridadeParsed < 1 || prioridadeParsed > 5) {
                                console.log('Prioridade inválida! Por favor, digite um número entre 1 e 5.');
                                EditarMissao(); 
                            } else {
                                prioridadeAtual = prioridadeParsed;

                                
                                tripulantesAtuais = []
                            
                                function editarTripulantes() {
                                    rl.question("Adicionar um tripulante: ", (tripulante) => {
                                        tripulantesAtuais.push(tripulante)
                                        console.log(tripulantesAtuais)
                                        rl.question("Deseja adicionar outro tripulante? (s/n): ", (res) => {
                                            if (res.toLowerCase() === 's') {
                                                editarTripulantes();
                                            } else {
                                                missoes[index].nome = nomeAtual;
                                                missoes[index].destino = destinoAtual;
                                                missoes[index].prioridade = prioridadeAtual;
                                                missoes[index].tripulantes = [tripulantesAtuais]

                                                console.log('Missão editada com sucesso!');
                                                menu()
                                            }
                                        });
                                    });
                                }
                                editarTripulantes()
                            }
                        });
                    });
                });
            }
        });
    }
}

module.exports = EditarMissao