# New Checkout - E2E Tests

Testes end-to-end para o projeto New Checkout utilizando Playwright.

## Instalação

```bash
npm install
npx playwright install
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
new-checkout/
├── tests/              # Casos de teste
├── playwright.config.ts # Configuração do Playwright
├── package.json        # Dependências
└── README.md          # Este arquivo
```

