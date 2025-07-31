function FiltrarPorPrioridade() { 
    if (missoes.length === 0) {
        console.log('Nenhuma missão registrada.');
        console.log('\nPressione Enter para retornar ao menu...');
        return rl.question('', menu);
    }

    rl.question('Por qual nível de prioridade você deseja filtrar (1 a 5)? ', (filtroPrioridadeInput) => {

        const prioridadeDesejada = parseInt(filtroPrioridadeInput);

        if (isNaN(prioridadeDesejada) || prioridadeDesejada < 1 || prioridadeDesejada > 5) {
            console.log('Prioridade inválida! Por favor, digite um número entre 1 e 5.');
            return FiltrarPorPrioridade(); 
        }

        let missoesFiltradas = [];

        for (let i = 0; i < missoes.length; i++) {
            const missao = missoes[i];
            if (missao.prioridade === prioridadeDesejada) {
                missoesFiltradas.push(missao);
            }
        }

        if (missoesFiltradas.length === 0) {
            console.log(`Não existe nenhuma missão no nível "${prioridadeDesejada}".`);
            console.log('\nPressione Enter para retornar ao menu...');
            rl.question('', menu);
        } else {
            
            console.log(`\n=== MISSÕES DE NÍVEL DE PRIORIDADE "${prioridadeDesejada}" ===`);
            missoesFiltradas.forEach((missao, index) => {
                console.log(`${index + 1}. Nome: ${missao.nome} | Destino: ${missao.destino} | Tripulantes: ${missao.tripulantes.join(', ')} | Prioridade: ${missao.prioridade}`);
            });
            console.log('\nPressione Enter para retornar ao menu...');
            rl.question('', menu);
        }
    });
}

module.exports = FiltrarPorPrioridade