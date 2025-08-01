const adicionarMissaoAoGerenciador = require('./adicionar');
const ListarMissoesCadastradas = require('./listarMissoes');
const MarcarMissaoComoConcluida = require('./marcar');
const EditarMissao = require('./editar');
const FiltrarPorPrioridade = require('./filtrar');
const RankingDosDestinos = require('./ranking');
const ListarPorTripulante = require('./listarPorTripulante');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function menuF() {
    console.log('\n<<<<<<GERENCIADOR DE MISSÕES ESPACIAIS>>>>>');
    console.log('1. Adicionar missão ao gerenciador');
    console.log('2. Listar missões cadastradas');
    console.log('3. Editar informações das missões cadastradas');
    console.log('4. Marcar missão como concluída');
    console.log('5. Filtrar missão por prioridade');
    console.log('6. Ranking de Destinos');
    console.log('7. Listar por Tripulante');
    console.log('8. Sair do Gerenciador');
    console.log('\n' + '='.repeat(30));

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarMissaoAoGerenciador(rl)
                break
            case '2':
                ListarMissoesCadastradas(rl)
                break;
            case '3':
                EditarMissao(rl)
                break;
            case '4':
                MarcarMissaoComoConcluida(rl)
                break;
            case '5':
                FiltrarPorPrioridade(rl)
                break;
            case '6':
                RankingDosDestinos
                break;
            case '7':
                ListarPorTripulante
                break;
            case '8':
                console.log('Obrigado por usar o programa Gerenciador de Missões Espaciais. Até mais!!');
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                menuF();
        }
    });

}
menuF()

module.exports = menuF


