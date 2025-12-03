/**
 * Fixtures de dados para testes de pagamento
 */

export interface CartaoCredito {
  numero: string;
  nome: string;
  validade: string;
  cvv: string;
}

export const cartaoValido: CartaoCredito = {
  numero: '4111111111111111',
  nome: 'TESTE USUARIO',
  validade: '12/25',
  cvv: '123',
};

export const cartaoInvalido: CartaoCredito = {
  numero: '4111111111111112',
  nome: 'TESTE INVALIDO',
  validade: '12/25',
  cvv: '123',
};
