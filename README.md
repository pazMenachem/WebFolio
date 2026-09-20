# Webfolio — Paz Menachem's portfolio site

Source for [pazmenachem.github.io/WebFolio](https://pazmenachem.github.io/WebFolio/): a React, Vite and TypeScript
single-page site presenting work history, projects and skills.

All the content lives in `src/consts/` and the components read from it, so changing the site means editing data
rather than markup.

---

## ✨ Features

- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop.
- 📅 **Interactive Timeline** – Displays your work experience in a visual format.
- 💼 **Project Showcase** – Highlights projects with descriptions and tech stacks.
- 🛠️ **Skills Display** – Clearly organized list of your technologies and proficiencies.
- 📬 **Contact Section** – Includes GitHub, LinkedIn, and other contact options.

---

## 🚀 Tech Stack

Built with modern web technologies:

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🔷 [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Requirements

- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A modern browser (for local testing)

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pazMenachem/WebFolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd WebFolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

---

## 🧪 Usage

- **Start development server**
  ```bash
  npm run dev
  ```

- **Build for production**
  ```bash
  npm run build
  ```

- **Preview production build**
  ```bash
  npm run preview
  ```

---

## 🌐 Deployment

GitHub Pages serves `main:/docs`, and `npm run build` writes straight into `docs/`
(`outDir` in `vite.config.ts`). So deploying is committing a fresh build on `main` — there is no
separate publish step, and `docs/` is checked in deliberately.

`public/404.html` is the single-page-app fallback: GitHub Pages has no route for `/WebFolio/projects`,
so that file rewrites the path into a query string and `index.html` turns it back into a route.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repo, submit issues, or create pull requests.  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
