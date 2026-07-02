export class MetodoPotes {
    calcularEssenciais(renda: number): number { return renda * 0.55; }   // 55%
    calcularLazer(renda: number): number { return renda * 0.10; }       // 10%
    calcularEducacao(renda: number): number { return renda * 0.10; }    // 10%
    calcularInvestimentos(renda: number): number { return renda * 0.10; } // 10%
    calcularLongoPrazo(renda: number): number { return renda * 0.10; }   // 10%
    calcularDoacoes(renda: number): number { return renda * 0.05; }      // 5%
}