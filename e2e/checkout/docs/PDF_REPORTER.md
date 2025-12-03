# PDF Reporter

Gerador de relatórios PDF modernos para testes Playwright com tema escuro.

## 📋 Descrição

Este custom reporter gera automaticamente relatórios PDF visualmente atraentes após cada execução de testes. Os relatórios incluem:

- **Cabeçalho**: Título e timestamp da execução
- **Resumo Visual**: Estatísticas com total, aprovados, falhados e pulados
- **Barra de Progresso**: Indicador visual colorido do status geral
- **Lista de Testes**: Cada cenário com status, duração e detalhes
- **Detalhes de Falhas**: Stack trace completo para testes que falharam
- **Rodapé**: Informações de geração e paginação

## 🎨 Design

O relatório utiliza um **tema escuro moderno** com:

- Fundo escuro (#1a1a1a)
- Cores vibrantes para status:
  - ✅ Verde (#4ade80) para testes aprovados
  - ❌ Vermelho (#f87171) para testes falhados
  - ⚠️ Amarelo (#fbbf24) para testes pulados
- Tipografia limpa e legível
- Layout organizado com seções bem definidas

## 🚀 Uso

O reporter está configurado automaticamente no `playwright.config.ts`. Basta executar seus testes normalmente:

```bash
npm test
```

Após a execução, o PDF será gerado automaticamente em:

```
test-reports/test-report-YYYY-MM-DD_HH-MM-SS.pdf
```

## 📊 Informações Incluídas

Cada teste no relatório mostra:

- ✓ Nome do cenário
- ✓ Suite/grupo do teste
- ✓ Status (PASSED, FAILED, SKIPPED, TIMEOUT)
- ✓ Duração da execução
- ✓ Mensagem de erro (se falhou)

## 🔧 Configuração

O reporter já está configurado em `playwright.config.ts`:

```typescript
reporter: [
  ['html'],
  ['./reporters/pdf-reporter.ts']
]
```

Você pode usar tanto o relatório HTML quanto o PDF simultaneamente.

## 📁 Estrutura de Arquivos

```
reporters/
├── pdf-reporter.ts    # Custom reporter principal
├── pdf-utils.ts       # Funções utilitárias para geração do PDF
└── types.ts           # Definições de tipos TypeScript
```

## 💡 Exemplos

### Executar testes e gerar PDF

```bash
npm test
```

### Ver relatório HTML (Playwright padrão)

```bash
npm run test:report
```

### Executar em modo debug

```bash
npm run test:debug
```

## 🐛 Troubleshooting

### PDF não está sendo gerado

1. Verifique se as dependências estão instaladas:
   ```bash
   npm install
   ```

2. Certifique-se de que o diretório `test-reports/` tem permissões de escrita

### Erros de TypeScript

Se houver erros de tipos, execute:
```bash
npm install --save-dev @types/pdfkit
```

## 📝 Notas

- Os PDFs são salvos localmente e **não** são versionados no Git (incluídos no `.gitignore`)
- Cada execução gera um novo PDF com timestamp único
- O reporter funciona em paralelo com outros reporters (como HTML)
