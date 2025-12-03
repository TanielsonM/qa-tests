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

