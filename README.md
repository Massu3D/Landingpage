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
