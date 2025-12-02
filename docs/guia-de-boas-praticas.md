# Guia de Boas Práticas

## Testes E2E (Playwright/Cypress)

### Organização
- Manter testes organizados por funcionalidade ou fluxo de usuário
- Usar nomenclatura descritiva para arquivos e casos de teste
- Separar page objects dos testes

### Boas Práticas
- Evitar testes dependentes uns dos outros
- Usar seletores estáveis e específicos
- Implementar retry logic quando apropriado
- Manter testes isolados e independentes

## Testes de API

### Organização
- Agrupar requisições por endpoint ou funcionalidade
- Documentar cada requisição com descrição clara
- Manter variáveis de ambiente organizadas

### Boas Práticas
- Validar status codes e response schemas
- Usar variáveis de ambiente para URLs e credenciais
- Implementar testes de contrato (Contract Testing)
- Validar tanto casos de sucesso quanto de erro

## Testes de Performance

### Organização
- Definir cenários de carga claramente
- Documentar métricas esperadas
- Manter relatórios organizados por data/versão

### Boas Práticas
- Testar em ambientes similares à produção
- Definir SLAs claros (tempo de resposta, throughput)
- Monitorar recursos do servidor durante testes
- Comparar resultados entre versões

## Testes de Segurança

### Boas Práticas
- Executar varreduras regularmente
- Revisar e tratar vulnerabilidades encontradas
- Manter ferramentas atualizadas
- Documentar vulnerabilidades e correções

## Geral

- **Versionamento**: Manter histórico claro de mudanças
- **Documentação**: Documentar cenários complexos
- **Manutenção**: Revisar e atualizar testes regularmente
- **Colaboração**: Code review para novos testes

