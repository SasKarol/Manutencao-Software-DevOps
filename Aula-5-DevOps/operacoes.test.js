const { soma, subtracao, multiplicacao, divisao } = require('./operacoes');

test('soma', () => {
  expect(soma(2, 3)).toBe(5);
});

test('multiplicação', () => {
  expect(multiplicacao(2, 3)).toBe(6);
});

test('divisão', () => {
  expect(divisao(6, 3)).toBe(2);
});

test('subtração de 5 - 3 deve ser 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});