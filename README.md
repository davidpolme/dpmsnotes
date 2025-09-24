# DPMS Notes

Aplicación web construida con **Next.js**, **TypeScript** y **Turbopack**, desplegada en **GitHub Pages**.

## 🚀 Getting Started

Instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📦 Build

Para generar la versión de producción (export estático):

```bash
npm run build
```

El resultado estará en la carpeta `out/`.  
Cuando se ejecuta en **GitHub Pages**, la aplicación utiliza:

- `basePath: '/dpmsnotes'`
- `assetPrefix: '/dpmsnotes/'`

## 📂 Estructura del proyecto

- `app/` → Contiene las páginas y layouts principales.
- `components/` → Componentes reutilizables.
- `styles/` → Archivos de estilos (SCSS / CSS Modules).
- `public/` → Archivos estáticos (imágenes, íconos, etc.).

## ✨ Tecnologías principales

- [Next.js](https://nextjs.org/) (con Turbopack)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sass](https://sass-lang.com/)

---

💡 Proyecto en constante evolución.
