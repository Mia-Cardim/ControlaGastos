export class CalculadoraImposto {
    static avaliarImposto(renda: number) {
        if (renda <= 2259.20) {
            return { aliquota: "Isento", imposto: 0, msg: "Você está isento do Imposto de Renda na fonte." };
        } else if (renda <= 2826.65) {
            const imposto = (renda * 0.075) - 169.44;
            return { aliquota: "7,5%", imposto: Math
                .max(0, imposto), msg: "Alíquota inicial. Retenção leve." };
        } else if (renda <= 3751.05) {
            const imposto = (renda * 0.15) - 381.44;
            return { aliquota: "15%", imposto: imposto, msg: "Alíquota intermediária." };
        } else if (renda <= 4664.68) {
            const imposto = (renda * 0.225) - 662.77;
            return { aliquota: "22,5%", imposto: imposto, msg: "Alíquota alta. Atenção ao planejamento anual." };
        } else {
            const imposto = (renda * 0.275) - 896.00;
            return { aliquota: "27,5%", imposto: imposto, msg: "Alíquota máxima atingida." };
        }
    }
}