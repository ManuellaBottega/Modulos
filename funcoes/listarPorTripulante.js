function ListarPorTripulante(rl, missoes, menu) {
    if (missoes.length === 0) {
        console.log('Nenhuma missão registrada.');
        console.log('\nPressione Enter para retornar ao menu...');
        return rl.question('', () => menu())
    }

    rl.question('Deseja listar as missões de qual tripulante? ', (listarTripulantes) => {
        const termoLower = listarTripulantes.toLowerCase(); 
        let missoesDoTripulante = [];

        for (let i = 0; i < missoes.length; i++) {
            const missao = missoes[i];
            const tripulanteEncontrado = missao.tripulantes.some(t => t.toLowerCase().includes(termoLower));

            if (tripulanteEncontrado) {
                missoesDoTripulante.push(missao);
            }
        }

        if (missoesDoTripulante.length === 0) {
            console.log(`O tripulante "${listarTripulantes}" não está em nenhuma missão.`); 
            console.log('\nPressione Enter para retornar ao menu...');
            rl.question('', () => menu(rl));
        } else {
            console.log(`\n=== MISSÕES DO TRIPULANTE "${listarTripulantes.toUpperCase()}" ===`);
            missoesDoTripulante.forEach((missao, index) => {
                const status = missao.concluida ? 'Concluída' : 'Pendente';
                console.log(`${index + 1}. Nome: ${missao.nome} | Destino: ${missao.destino} | Prioridade: ${missao.prioridade} | Tripulantes: ${missao.tripulantes.join(', ')} | Status: ${status}`); // Added .join(', ')
            });
            console.log('\nPressione Enter para retornar ao menu...');
            rl.question('', () => menu(rl));
        }
    });
}

module.exports = ListarPorTripulante
