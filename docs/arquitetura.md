# Arquitetura do Projeto de Testes QA

## Visão Geral

Este repositório contém a estrutura organizada para diferentes tipos de testes de qualidade de software.

## Estrutura de Diretórios

### `/e2e`
Testes end-to-end organizados por projeto:
- Cada projeto possui seu próprio diretório (ex: `new-checkout/`)
- Cada projeto pode usar diferentes frameworks (Playwright, Cypress, etc.)
- Estrutura modular permite múltiplos projetos E2E independentes

### `/api`
Testes de API e integração:
- **postman/**: Coleções e testes Postman
- **bruno/**: Coleções e testes Bruno
- **integration-tests/**: Testes de integração

### `/performance`
Testes de performance e carga:
- **artillery/**: Testes com Artillery
- **k6/**: Testes com k6
- **reports/**: Relatórios de performance

### `/security`
Testes de segurança:
- **zap/**: Testes com OWASP ZAP

### `/docs`
Documentação do projeto:
- **arquitetura.md**: Este arquivo
- **guia-de-boas-praticas.md**: Guia de boas práticas
- **checklist.md**: Checklist de testes

## Workflows CI/CD

Os workflows do GitHub Actions estão localizados em `.github/workflows/`:
- `e2e.yml`: Execução de testes E2E
- `api.yml`: Execução de testes de API
- `performance.yml`: Execução de testes de performance

