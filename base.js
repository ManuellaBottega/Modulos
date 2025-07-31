const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const adicionarMissaoAoGerenciador = require('./funcoes/adicionar');
const ListarMissoesCadastradas = require('./funcoes/listarMissoes');
const MarcarMissaoComoConcluida = require('./funcoes/marcar');
const EditarMissao = require('./funcoes/editar');
const FiltrarPorPrioridade = require('./funcoes/filtrar');
const RankingDosDestinos = require('./funcoes/ranking');
const ListarPorTripulante = require('./funcoes/listarPorTripulante');
const menu = require('./funcoes/menu')

let missoes = [];
let nomeAtual
let destinoAtual
let prioridadeAtual
let tripulantesAtuais = []

menu();