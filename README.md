# 📚 E-book Landing Page

Landing page de alta conversão para captura de leads de e-book sobre educação financeira.

![Preview](https://ebook-example-lp.netlify.app/assets/og-image.jpg)

## ✨ Features

- 📱 **Responsivo** - Mobile-first design
- ♿ **Acessível** - WCAG 2.1 AA, skip-links, ARIA labels
- 🔍 **SEO Otimizado** - Open Graph, Twitter Cards, Schema.org
- 🎨 **Design Premium** - Animações suaves, livro 3D, gradientes
- 🛡️ **Seguro** - Honeypot anti-spam, validação robusta
- ⚡ **Performance** - CSS/JS modular, preconnect, defer scripts

## 🚀 Quick Start

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/ebook-lp.git

# Rodar localmente
npx http-server -p 3000

# Acessar
open http://localhost:3000
```

## 📁 Estrutura

```
ebook-lp/
├── index.html              # HTML principal (580 linhas)
├── css/
│   └── styles.css          # Estilos customizados (~300 linhas)
├── js/
│   ├── config.js           # Configurações centralizadas
│   ├── utils.js            # Funções utilitárias
│   ├── form.js             # Validação + honeypot
│   ├── animations.js       # Counter + exit popup
│   └── app.js              # Entry point
└── assets/
    └── favicon.svg         # Ícone SVG
```

## 🛠️ Tech Stack

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Semântico + ARIA |
| Tailwind CSS | Estilização via CDN |
| Vanilla JS | ES Modules |
| Lucide Icons | Ícones SVG |
| Canvas Confetti | Celebração no submit |

## 📝 Personalização

### Alterar domínio
Edite as URLs em `index.html`:
- `<link rel="canonical">`
- `<meta property="og:url">`
- `<meta property="twitter:url">`

### Alterar dados do contador
Edite `js/config.js`:
```javascript
DOWNLOAD_TARGET: 15420,  // Número final do contador
URGENCY_DAYS: 3,         // Dias até "expirar" a oferta
```

### Integrar backend
O formulário está em `js/form.js`. Substitua `simulateSubmission()` por uma chamada real:
```javascript
async simulateSubmission() {
  const formData = new FormData(this.form);
  await fetch('/api/leads', {
    method: 'POST',
    body: formData
  });
  this.showSuccess();
}
```

## 🌐 Deploy

### Netlify
```bash
# Arraste a pasta para netlify.com/drop
# Ou conecte o repositório GitHub
```

### Vercel
```bash
npx vercel --prod
```

## 📄 Licença

MIT © 2025
