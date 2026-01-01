const somaHorasExtras = (salario, valorHorasExtras) => salario + valorHorasExtras;

const calculaDescontos = (salario, descontos) => salario - descontos;

const multiplicaDepoisDobra = (valor1, valor2) => {
    return valor1 * valor2 * 2
};

export {
  somaHorasExtras,
  calculaDescontos,
  multiplicaDepoisDobra,
};
