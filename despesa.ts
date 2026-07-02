export class Despesa {
    private nome: string;
    private valor: number;
    private categoria: string;

    constructor(nome: string, valor: number, categoria: string) {
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
    }

    getNome(): string { return this.nome; }
    getValor(): number { return this.valor; }
    getCategoria(): string { return this.categoria; }
}