const menuF = require("./menu");

let missoes = [];
let nomeAtual
let destinoAtual
let prioridadeAtual
let tripulantesAtuais = []

function adicionarMissaoAoGerenciador(rl) {

    nomeAtual = '';
    destinoAtual = '';
    prioridadeAtual = 0;
    tripulantesAtuais = [];

    rl.question('Digite o nome da missão: ', (nome) => {
        nomeAtual = nome
        rl.question('Digite o destino da missão (ex: Marte, Júpiter, Saturno, etc.): ', (destino) => {
            destinoAtual = destino
            rl.question('Digite a prioridade da missão de 1 a 5: ', (prioridade) => {
                const prioridadeParsed = parseInt(prioridade);
                if (isNaN(prioridadeParsed) || prioridadeParsed < 1 || prioridadeParsed > 5) {
                    console.log('Prioridade inválida! Por favor, digite um número entre 1 e 5.');
                    adicionarMissaoAoGerenciador(rl); 
                } else {
                    prioridadeAtual = prioridadeParsed; 
                    perguntarTripulantes(rl); 
                }
            })
        })
    })
}

    function perguntarTripulantes(rl) {
            rl.question("Adicionar um tripulante: ", (tripulante) =>{
                tripulantesAtuais.push(tripulante)
                console.log(tripulantesAtuais)
                rl.question("deseja adicionar outro tripulante? (s/n)", (res) => {
                if(res.toLowerCase() ==!'s'){
                    const missao = { 
                        nome: nomeAtual,
                        destino: destinoAtual,
                        prioridade: prioridadeAtual,
                        tripulantes: tripulantesAtuais,
                        concluida: false,
                    }
                    missoes.push(missao)
                    console.log('Missão adicionada com sucesso!');
                    console.log(typeof(menuF))
                    menuF()
                } else {
                    perguntarTripulantes(rl)
                }
                
                }
            )
                } 
                
                )}

module.exports = adicionarMissaoAoGerenciador



