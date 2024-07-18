# desafio01-orange-branch
O OrangeX é baseado no X (Twitter), a ideia é simplificar um pouco a rede social e focar nas funcionalidades principais da plataforma.

Figma Base 
https://www.figma.com/file/DBJvE3MUU2IqZy441gy1ZH/Twitter-desktop-pages-(feed%2C-sigup%2C-login%2C-profile)-(Community)?type=design&node-id=0%3A1&mode=dev&t=X34GfkuLxUVkGwDA-1

<img width="1000" alt="image" src="https://github.com/gcmms/desafio01-orange-branch/assets/32177705/539cfc20-7252-425f-887e-6a1fbe2156e4">


Features : 
1) Criar conta
   
![image](https://github.com/gcmms/desafio01-orange-branch/assets/32177705/e7ab68bc-3fbf-4394-9564-0f3b37d218ef)

2) Login
   
![image](https://github.com/gcmms/desafio01-orange-branch/assets/32177705/3e1f5d28-16b5-4b36-aee0-325ba6423fe6)

3) Criar um feed onde é possivel publicar e ver uma publicação de TODOS da plataforma
  - Só texto 55 caracters
  - Texto (55 caracters) + Imagem (desejavel)
  - Possibilidade de comentar, curtir e repostar
   
![image](https://github.com/gcmms/desafio01-orange-branch/assets/32177705/366883cd-22ba-4767-be5b-fa186feb7d44)

4) Criar uma view para ver o "Seu perfil"
Ver tudo que você postou 

![image](https://github.com/gcmms/desafio01-orange-branch/assets/32177705/6db5631a-a634-48ca-a822-c31e499ecf89)

 
# A ideia é trabalhar algumas habilidades 
- Criar APIs
- Criar token JWT para login
- Modelar bancos de dados
- Armazenar imagens
- Criar front customizado seguindo as diretrizes que estão no figma
- Lidar com o front isolado do backend

# Funcionalidades implementadas até o momento
- [x] **Página de login**
- [x] **Página de cadastro com 3 opções: Apple, Google e e-mail**
- [x] **Formulário de cadastro ao se cadastrar com e-mail**


------------------------------

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
