Playwright + TypeScript


Passo 01 - Limpar os produtos de STG - Tanielson + Lucas

Passo 02 - Criar a pasta Data - Tanielson
    1 - Arquivo para dados pessoais
    1 - Arquivo para dados cartão
    1 - Arquivos para dados do produto

Passo 03 - Criar os testes - ( Pagamentos ) - Tanielson + Lucas
Pix - Transaction + Subscription - Tanielson + Lucas 
Boleto - Transaction + Subscription - Tanielson + Lucas
Cartão - Transaction + Subscription - Tanielson + Lucas

Passo 04 - Criar os relatorios - Lucas




# Checkout E2E Tests

Testes end-to-end para checkout e pagamentos.

## Instalação

```bash
npm install
npx playwright install --with-deps chromium
```

## Executar Testes

```bash
# Executar todos os testes
npm test

# Executar com UI interativa
npm run test:ui

# Executar em modo headed (com browser visível)
npm run test:headed

# Executar em modo debug
npm run test:debug

# Ver relatório
npm run test:report
```

## Estrutura

```
checkout/
├── tests/              # Casos de teste
├── fixtures/           # Dados de teste
├── playwright.config.ts # Configuração do Playwright
├── package.json        # Dependências
└── README.md          # Este arquivo
```

## Helpers Compartilhados

Helpers reutilizáveis estão disponíveis em `e2e/shared/helpers/`.

