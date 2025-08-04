function ListarMissoesCadastradas(rl, missoes, menu) {
    if (missoes.length === 0) { 
        console.log('Nenhuma missão cadastrada no gerenciador.');
        console.log('\nPressione Enter para retornar ao menu...');
        return rl.question('', () => menu(rl));
    }

    console.log('\n=== MISSOES CADASTRADAS ===');
    missoes.forEach((missao, index) => {
            const status = missao.concluida ? 'Concluída' : 'Pendente';
            console.log(`${index + 1}. Nome: ${missao.nome} | Destino: ${missao.destino} | Prioridade: ${missao.prioridade} | Tripulantes: ${missao.tripulantes} | Status: ${status}`) 
    });

    console.log('\nPressione Enter para retornar ao menu...');
    rl.question('', () => menu(rl));


}

module.exports = ListarMissoesCadastradas
