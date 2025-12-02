# QA Tests Repository

Repositório centralizado para testes de qualidade de software.

## Estrutura

```
qa-tests/
├── docs/                      # Documentação
├── e2e/                       # Testes End-to-End
│   ├── new-checkout/         # Projeto new-checkout (Playwright)
│   ├── playwright/           # Template/exemplo Playwright
│   └── cypress/              # Template/exemplo Cypress
├── api/                       # Testes de API
│   ├── postman/              # Coleções Postman
│   ├── bruno/                # Coleções Bruno
│   └── integration-tests/    # Testes de integração
├── performance/               # Testes de Performance
│   ├── artillery/            # Testes Artillery
│   ├── k6/                   # Testes k6
│   └── reports/              # Relatórios
├── security/                  # Testes de Segurança
│   └── zap/                  # OWASP ZAP
└── .github/workflows/         # CI/CD Workflows
```

## Início Rápido - Projetos E2E

Cada projeto E2E possui sua própria configuração. Exemplo com `new-checkout`:

### Instalação

```bash
cd e2e/new-checkout
npm install
npx playwright install
```

### Executar Testes

```bash
# Executar todos os testes
npm test

# Executar com UI
npm run test:ui

# Executar em modo headed
npm run test:headed

# Executar em modo debug
npm run test:debug
```

**Nota:** Para criar um novo projeto E2E, basta criar um novo diretório dentro de `e2e/` e configurá-lo com Playwright, Cypress ou outro framework de sua escolha.

## Documentação

Consulte a pasta `/docs` para:
- [Arquitetura](./docs/arquitetura.md)
- [Guia de Boas Práticas](./docs/guia-de-boas-praticas.md)
- [Checklist](./docs/checklist.md)

## CI/CD

Os workflows do GitHub Actions estão configurados para:
- Executar testes E2E em PRs e pushes
- Executar testes de API
- Executar testes de performance

