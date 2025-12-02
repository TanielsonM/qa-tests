# QA Tests Repository

Repositório centralizado para testes de qualidade de software, organizando diferentes tipos de testes em uma estrutura modular e escalável.

## 📁 Estrutura do Repositório

```
qa-tests/
├── docs/                      # Documentação do projeto
│   ├── arquitetura.md        # Arquitetura e estrutura
│   ├── guia-de-boas-praticas.md  # Boas práticas de testes
│   └── checklist.md          # Checklist de testes
├── e2e/                       # Testes End-to-End
│   └── new-checkout/         # Projeto new-checkout (Playwright)
├── api/                       # Testes de API
│   ├── postman/              # Coleções Postman
│   ├── bruno/                # Coleções Bruno
│   └── integration-tests/    # Testes de integração
├── performance/               # Testes de Performance
│   ├── artillery/            # Testes Artillery
│   ├── k6/                   # Testes k6
│   └── reports/              # Relatórios de performance
├── security/                  # Testes de Segurança
│   └── zap/                  # OWASP ZAP
└── .github/workflows/         # CI/CD Workflows
```

## 🚀 Início Rápido

### Projetos E2E

Cada projeto E2E possui sua própria configuração independente. Cada diretório dentro de `e2e/` representa um projeto de testes separado.

#### Exemplo: Projeto new-checkout

```bash
# Navegar para o projeto
cd e2e/new-checkout

# Instalar dependências
npm install

# Instalar browsers do Playwright
npx playwright install

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

### Criando um novo projeto E2E

Para adicionar um novo projeto de testes E2E:

1. Crie um novo diretório dentro de `e2e/` com o nome do projeto
2. Configure o framework de testes (Playwright, Cypress, etc.)
3. Cada projeto deve ter seu próprio `package.json` e configurações

## 📚 Documentação

Consulte a pasta `/docs` para mais informações:

- **[Arquitetura](./docs/arquitetura.md)** - Visão geral da arquitetura do projeto
- **[Guia de Boas Práticas](./docs/guia-de-boas-praticas.md)** - Práticas recomendadas para escrita de testes
- **[Checklist](./docs/checklist.md)** - Checklist para validação de testes

## 🔄 CI/CD

Os workflows do GitHub Actions estão configurados para:

- **E2E Tests** - Executa testes end-to-end automaticamente em PRs e pushes
- **API Tests** - Executa testes de API
- **Performance Tests** - Executa testes de performance (agendado e manual)

Os relatórios e resultados dos testes são disponibilizados como artifacts nos workflows.

## 📝 Contribuindo

1. Crie uma branch para suas alterações
2. Adicione ou atualize os testes conforme necessário
3. Certifique-se de que os testes estão passando
4. Abra um Pull Request

## 📄 Licença

Este repositório é para uso interno da equipe de QA.

