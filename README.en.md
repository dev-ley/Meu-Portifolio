
# My Portfolio — Wesley Rodrigues

Personal portfolio developed to showcase my background as a Full Stack Web Developer, technical skills, and software projects.

The project focuses on a modern, responsive, and accessible interface, providing a straightforward browsing experience on desktop and mobile devices.

## Application Preview

![Dashboard do Portifólio](public/images/fullstack-portifolio.jpeg)


## 🚀 Technologies

- **Next.js 16** — React framework for building the application.
- **React 19** — component-based user interface development.
- **TypeScript** — static typing for improved code safety and maintainability.
- **Redux Toolkit** — global application state management.
- **React Redux** — integration between Redux and React components.
- **CSS Modules** — component-scoped styling.
- **React Icons** — icons for the user interface.
- **ESLint** — static code analysis and code quality checks.
- **Tailwind CSS 4** — development dependency available in the project.

## ✨ Features

- Personal and professional introduction.
- Projects, About Me, Skills, and Contact sections.
- Portuguese and English language switching.
- Light and dark theme switching.
- Hero section with an automatically changing image slideshow.
- Responsive navigation for mobile devices.
- Back-to-top button.
- Links to contact information and professional profiles.
- Responsive layout for different screen sizes.

## 🛠️ Development approach

The application is organized into reusable components, separating page sections, styling, and state management logic.

Redux Toolkit centralizes shared application state, including the selected language and visual theme. React Redux allows components to access and update this state.

CSS Modules keep styles organized by component, while CSS variables support visual changes between light and dark themes.

The interface also adapts its navigation to smaller screens to provide a consistent experience across different devices.

## 📂 Main project structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   └── sections/
├── features/
│   ├── language/
│   └── theme/
├── store/
└── styles/
    └── components/
```

Additional files and components may be included as the project evolves.

## ⚙️ Getting started

### Prerequisites

- Node.js compatible with the project's Next.js version.
- npm.

### Installation

Clone the repository:

```bash
git clone REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd meu-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser at:

```text
http://localhost:3000
```

### Available commands

```bash
npm run build
npm run start
npm run lint
```

- `npm run build`: creates a production build.
- `npm run start`: starts the production server after the build.
- `npm run lint`: runs ESLint.

## 🌐 Live portfolio

Visit the published website:

**[My Portfolio](https://meu-portifolio-kappa-ten.vercel.app/)**

## 👨‍💻 Author

**Wesley Rodrigues**  
Full Stack Web Developer

- GitHub: [dev-ley](https://github.com/dev-ley)
- LinkedIn: [wr-dev](https://www.linkedin.com/in/wr-dev/)

---

Developed by Wesley Rodrigues.
