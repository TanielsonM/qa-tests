# QA Tests Repository - Greenn Platform

Repositório centralizado para testes de qualidade de software, organizando diferentes tipos de testes em uma estrutura modular e escalável para os produtos Greenn (checkout/pagamentos, Bluee, etc.).

## 📁 Estrutura do Repositório

```
qa-tests/
├── docs/                      # Documentação do projeto
│   
├── e2e/                       # Testes End-to-End
│   ├── checkout/             # Testes de checkout e pagamentos
│   │   ├── tests/            # Casos de teste
│   │   └── fixtures/         # Dados de teste

├── api/                       # Testes de API
│   
├── performance/               # Testes de Performance
│   
└── .github/workflows/         # CI/CD Workflows
    ├── e2e.yml               # Workflow E2E
    ├── api.yml               # Workflow API
    └── performance.yml       # Workflow Performance
```

## 🚀 Início Rápido

### Configuração do Ambiente

Consulte o [Guia de Ambiente](./docs/guia-ambiente.md) para configuração completa.

### Testes E2E - Checkout

```bash
# Navegar para o projeto
cd e2e/checkout

# Instalar dependências
npm install

# Instalar browsers do Playwright
npx playwright install --with-deps chromium

# Executar testes
npm test
```

#### Comandos úteis

```bash
# Executar todos os testes
npm test

# Executar com UI interativa
npm run test:ui

# Executar em modo headed (com browser visível)
npm run test:headed

# Executar em modo debug
npm run test:debug

# Ver relatório dos testes
npm run test:report
```

## 📚 Documentação

Consulte a pasta `/docs` para mais informações:



## 🔄 CI/CD


Este repositório é para uso interno da equipe de QA.

