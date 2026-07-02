import { ControleFinanceiro } from "./controleFinanceiro.js";


const sistema = new ControleFinanceiro();

// Evento ao clicar em "Calcular Saldo" (Salva a renda principal e recalcula tudo)
const btnCalcular = document.getElementById("btnCalcular");
btnCalcular?.addEventListener("click", () => {
    sistema.salvarRenda();
});

// Evento ao clicar em "➕ Adicionar Gasto"
const btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar?.addEventListener("click", () => {
    sistema.adicionarDespesa();
});

// Evento ao clicar em "Limpar Campos"
const btnLimpar = document.getElementById("btnLimpar");
btnLimpar?.addEventListener("click", () => {
    sistema.limparCampos();
});