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
│   ├── new-checkout/         # Projeto new-checkout (Playwright)
│   └── greenn-adm/           # Projeto greenn-adm
└── README.md                  # Este arquivo
```

## 🚀 Início Rápido

### Projetos E2E

Cada projeto E2E possui sua própria configuração independente. Cada diretório dentro de `e2e/` representa um projeto de testes separado.

**Projetos disponíveis:**
- `new-checkout` - Testes E2E com Playwright
- `greenn-adm` - Projeto em configuração

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

Os workflows do GitHub Actions podem ser configurados na pasta `.github/workflows/` para execução automática dos testes em PRs e pushes.

*Nota: Os workflows podem ser adicionados conforme necessário para cada projeto.*

## 📝 Contribuindo

1. Crie uma branch para suas alterações
2. Adicione ou atualize os testes conforme necessário
3. Certifique-se de que os testes estão passando
4. Abra um Pull Request

## 📄 Licença

Este repositório é para uso interno da equipe de QA.

