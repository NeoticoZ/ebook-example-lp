# E-book Landing Page

Uma landing page moderna e production-ready para captura de leads de e-book, construída com foco em performance, SEO e acessibilidade.

![Preview](https://ebook-example-lp.netlify.app/assets/og-image.jpg)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## ✨ Features

- **Design Premium** - Mockup 3D do livro, gradientes e animações suaves
- **Responsivo** - Otimizado para desktop, tablet e mobile
- **SEO Otimizado** - Meta tags, Open Graph, Twitter Cards e Schema.org
- **Acessível** - ARIA labels, skip links e suporte a screen readers
- **Performance** - CSS e JS modulares, preconnect para fontes
- **Anti-spam** - Campo honeypot no formulário

---

## 🚀 Quick Start

Clone o repositório:

```bash
git clone https://github.com/NeoticoZ/ebook-example-lp.git
```

Abra o `index.html` no navegador ou use um servidor local:

```bash
npx serve .
```

---

## 📁 Estrutura

```
ebook-lp/
├── index.html          # HTML principal (~560 linhas)
├── css/
│   └── styles.css      # Estilos com design tokens
├── js/
│   ├── config.js       # Configurações centralizadas
│   ├── utils.js        # Funções utilitárias  
│   ├── form.js         # Validação de formulário
│   ├── animations.js   # Counter e popup
│   └── app.js          # Entry point
└── assets/
    └── favicon.svg     # Favicon SVG temático
```

---

## 🎨 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| **HTML5** | Semântico e acessível |
| **Tailwind CSS v4** | Via CDN para prototipagem rápida |
| **CSS Custom Properties** | Design tokens para cores e transições |
| **Vanilla JavaScript** | ES Modules, sem dependências |
| **Lucide Icons** | Ícones SVG leves |
| **Canvas Confetti** | Animação de celebração |

---

## ♿ Acessibilidade

- Skip link para navegação por teclado
- Atributos ARIA em elementos interativos
- Suporte a `prefers-reduced-motion`
- Focus styles visíveis
- Estrutura semântica com `<main>`, `<section>`, `<footer>`
- `role="alert"` em mensagens de erro

---

## 📱 Seções

| Seção | Descrição |
|-------|-----------|
| **Hero** | Headline com mockup 3D do livro e formulário de captura |
| **Credibility Bar** | Logos de veículos de mídia (Forbes, Exame, etc) |
| **O que você vai descobrir** | 6 cards com benefícios do e-book |
| **Depoimentos** | Carousel de testimonials com avatares |
| **Sobre o Autor** | Bio e credenciais |
| **CTA Final** | Formulário simplificado de e-mail |
| **Exit Popup** | Popup com bônus para retenção |

---

## 🔧 Customização

### Cores

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --color-primary: #059669;
    --color-primary-hover: #047857;
    --color-accent: #fbbf24;
}
```

### Configurações

Edite `js/config.js` para alterar:

```javascript
export const CONFIG = {
    DOWNLOAD_TARGET: 15420,    // Número do contador
    URGENCY_DAYS: 3,           // Dias de urgência
    POPUP_DELAY_MOBILE: 45000  // Delay do popup (ms)
};
```

### URLs

Substitua as URLs placeholder em `index.html`:

- `https://ebook-example-lp.netlify.app/` → seu domínio
- Adicione `og-image.jpg` em `/assets/` para compartilhamento

---

## 📄 Licença

Este projeto é apenas um exemplo/template para fins educacionais.

---

Feito com 💚 por [NeoticoZ](https://github.com/NeoticoZ)
