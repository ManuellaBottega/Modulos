function MarcarMissaoComoConcluida() {
    if (missoes.length === 0) {
      console.log('Nenhuma missão foi adicionada.');
      console.log('\nPressione Enter para voltar ao menu.');
      return rl.question('', () => menu());
    }

    console.log('\n=== Missões ===');
    missoes.forEach((missao, index) => {
      const status = missao.concluida ? 'Concluído' : 'Pendente';
      console.log(
        `${index + 1}. Missão: ${missao.nome} | Destino: ${missao.destino} | Prioridade: ${missao.prioridade} | Tripulantes: ${missao.tripulantes} | Status: ${status}`
    );
    });

    rl.question('\nDigite o número da missão que deseja marcar como concluída: ', (num) => {
      const index = parseInt(num, 10) - 1;

      if (index < 0 || index >= missoes.length) {
        console.log('Essa missão não existe!');
        console.log('\nPressione Enter para voltar ao menu...');
        return rl.question('', () => menu());
      } else {
        missoes[index].concluida = true;

        console.log('Status editado com sucesso!');
        console.log('\nPressione Enter para voltar ao menu...');
        rl.question('', () => menu());
      }
    });
}

module.exports = MarcarMissaoComoConcluida