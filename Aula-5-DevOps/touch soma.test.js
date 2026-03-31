const soma = require('./soma');

test('deve somar 2 + 3 e retornar 5', () => {
  expect(soma(2, 3)).toBe(5);
});