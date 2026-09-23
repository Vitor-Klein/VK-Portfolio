# VK Portfolio

Portfólio pessoal de Vitor Klein — reconstruído do zero em Next.js 16 (App
Router) com um design system próprio em "liquid glass": superfícies
translúcidas com desfoque, brilho especular e um único acento em amarelo
âmbar sobre um fundo quase preto.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/) (tokens definidos via `@theme` em `src/app/globals.css`)
- [motion](https://motion.dev/) para as animações de entrada
- [lucide-react](https://lucide.dev/) para ícones de interface

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
src/
  app/            # layout, página e estilos globais
  components/
    layout/       # navbar e footer
    sections/     # hero, sobre, projetos, trajetória, contato
    ui/           # primitivos do design system (glass panel, botão, chip...)
  data/
    content.ts    # fonte única de conteúdo (perfil, projetos, trajetória, contato)
```

Todo o texto do site vive em `src/data/content.ts` — para atualizar bio,
projetos, skills ou experiência profissional, edite apenas esse arquivo.

## Deploy

Otimizado para [Vercel](https://vercel.com/new).
