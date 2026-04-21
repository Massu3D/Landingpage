# Massu Shop

Landing page moderna para a Massu Shop, focada em conversão via WhatsApp para encomendas de impressão 3D personalizada.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Funcionalidades

- Hero com CTA para WhatsApp
- Seção de benefícios
- Seção de serviços
- Galeria com imagens reais
- Processo de atendimento
- Depoimentos com suporte a foto
- Footer com links sociais
- Botão flutuante do WhatsApp

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Configurações editáveis

As principais informações da landing estão centralizadas em:

- `data/landing.ts`

Você pode alterar:

- número e mensagem do WhatsApp
- links do Instagram e TikTok
- textos das seções
- imagens da galeria
- depoimentos

## Estrutura

```text
app/
components/
  landing/
  shared/
data/
public/
types/
```

## Publicação no GitHub

Depois de criar o repositório no GitHub, rode:

```bash
git remote add origin <URL_DO_REPOSITORIO>
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Deploy automático com GitHub + Vercel

Este projeto já está pronto para deploy automático na Vercel.

### Fluxo recomendado

1. Suba este projeto para um repositório no GitHub
2. Acesse a Vercel e clique em `Add New Project`
3. Importe o repositório da Massu Shop
4. Confirme as configurações detectadas automaticamente para `Next.js`
5. Clique em `Deploy`

### Como o deploy automático funciona

- cada `push` em branches secundárias gera um `Preview Deployment`
- cada `push` ou merge na branch `main` gera um `Production Deployment`

### Links úteis

- Git deployments na Vercel:
  `https://vercel.com/docs/deployments/git`
- Importar projeto existente:
  `https://vercel.com/docs/getting-started-with-vercel/import`
- Next.js na Vercel:
  `https://vercel.com/docs/concepts/next.js/overview`

### Observações

- este projeto não depende de variáveis de ambiente obrigatórias no momento
- a branch de produção recomendada é `main`
- a conexão GitHub ↔ Vercel precisa ser feita na conta da Vercel

## GitHub Actions

O projeto inclui dois workflows:

- `.github/workflows/ci.yml`
  roda `npm run lint` e `npm run build`

### Deploy automático recomendado

Para este projeto, o fluxo recomendado é:

- GitHub Actions apenas para CI
- Vercel Git Integration para deploy automático

Assim você evita deploy duplicado, problemas de alias e inconsistências entre preview e produção.

### Como configurar a Vercel corretamente

1. Suba o projeto para o GitHub
2. Na Vercel, clique em `Add New Project`
3. Importe o repositório
4. Confirme `main` como Production Branch
5. Faça o deploy inicial

Depois disso:

- cada push em branches secundárias cria um Preview Deployment
- cada push/merge em `main` atualiza a produção automaticamente

### Observação

Se você já configurou um workflow de deploy manual por GitHub Actions, remova ou desative esse fluxo para não disputar com a integração nativa da Vercel.
