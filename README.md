# 🎨 ReArt

**ReArt** is a modern web platform designed for **creating, reading, and sharing articles**.  
It provides users with a simple and intuitive interface for writing posts, exploring trending content, and interacting with other authors.

---

## ✨ Features

- ✍️ **Create and edit your own articles**
- 📚 **Browse and read articles** from different categories
- 💬 **Comment on articles** and join discussions
- 🔍 **Search** by title and description
- 👤 **User authentication and profile customization**

---

## 🏁 Project Launch

### Installation

```
npm install
```

### Development Mode - Starting the server + frontend project in dev mode
```
npm run start:dev 
```
or
```
npm run start:dev:vite
```

---

## Scripts

#### Frontend & Backend

- `npm run start` – Start the frontend project on **Webpack Dev Server**
- `npm run start:vite` – Start the frontend project on **Vite**
- `npm run start:dev` – Start the frontend project on **Webpack Dev Server** + backend
- `npm run start:dev:vite` – Start the frontend project on **Vite** + backend
- `npm run server` – Start the **backend server**

#### Build

- `npm run build:prod` – Build for **production**
- `npm run build:dev` – Build for **development** (not minified)

#### Linting

- `npm run lint` – Lint **TypeScript** and **SCSS** files
- `npm run lint:fix` – Fix **TypeScript** and **SCSS** files with linter

#### Testing

- `npm run test:unit` – Run **unit tests** with Jest
- `npm run test:ui` – Run **screenshot tests** with Loki
- `npm run test:ui:ok` – Approve new screenshots
- `npm run test:ui:ci` – Run screenshot tests in **CI**
- `npm run test:ui:report` – Generate **full report** for screenshot tests
- `npm run test:ui:json` – Generate **JSON report** for screenshot tests
- `npm run test:ui:html` – Generate **HTML report** for screenshot tests

#### Storybook

- `npm run storybook` – Start **Storybook**
- `npm run storybook:build` – Build **Storybook**

#### Other

- `npm run prepare` – Pre-commit hooks
- `npm run generate:slice` – Script to generate **FSD slices**

---

## 🧱 Architecture

The project is built following the **Feature-Sliced Design (FSD)** methodology — a modern and scalable approach to
structuring frontend applications.  
```
src/
├─ app/             # Main configs and initialization
├─ entities/        # Entities (Article, User, Profile, etc.)
├─ features/        # Feature modules (AddNewComment, ArticleRating, etc.)
├─ pages/           # Pages
├─ shared/          # Reusable components and libraries
├─ widgets/         # Ready-made UI compositions from features + entities (Navbar, Sidebar, etc.)
```

This helps keep the codebase clean, maintainable, and easy to extend as the project grows.

**Learn more:** [Feature-Sliced Design](https://feature-sliced.design/)

---

## 🌍 Internationalization

The project uses **next-intl** for managing translations and handling internationalization (i18n) in Next.js.  
This library provides a simple and efficient way to localize both server and client components while maintaining great
performance.

🗂️ All translation files are stored in the **`/public/locales`** directory, organized by locale (e.g., `en.json`, `ru.json`,
etc.).  
This structure allows easy addition of new languages and seamless switching between them.

**Documentation:** [next-intl](https://next-intl-docs.vercel.app/)

---

## Testing

This project uses **3 types of tests**:

1. **Unit tests with Jest** – `npm run test:unit`
2. **Component tests with React Testing Library** – `npm run test:unit`
3. **Screenshot testing with Loki** – `npm run test:ui`

---

## Linting

The project uses **ESLint** to check TypeScript code and **Stylelint** to check style files.

For strict control of the main architectural principles, a custom ESLint plugin, *[eslint-plugin-revol](https://www.npmjs.com/package/eslint-plugin-revol)*, is used. It contains 3 rules:

1. **path-checker** – forbids using absolute imports within the same module.
2. **layer-imports** – checks the correct usage of layers according to FSD principles  
   (for example, widgets cannot be used in features or entities).
3. **public-api-imports** – allows importing from other modules only through the public API. Supports auto-fix.

##### Running linters
- `npm run lint` – Lint **TypeScript** and **SCSS** files
- `npm run lint:fix` – Fix **TypeScript** and **SCSS** files with the linter


---

## Storybook

In this project, each component has its own story cases.  
Server requests are mocked using **storybook-addon-mock**.

The story cases file is created next to the component with the extension `.stories.tsx`.

You can run Storybook with the command:
- `npm run storybook`

More details about [Storybook](/docs/storybook.md)

---

## Project Configuration

For development, the project has 2 configs:
1. **Webpack** - `./config/build`
2. **Vite** - `vite.config.ts`

Both bundlers are adapted to the main features of the application.

All configuration files are stored in `/config`:
- `/config/babel` – Babel configuration
- `/config/build` – Webpack configuration
- `/config/jest` – Test environment configuration
- `/config/storybook` – Storybook configuration

The `scripts` folder contains various scripts for refactoring, simplifying code writing, generating reports, etc.

---

## ⚙️ CI Pipeline & Pre-Commit Hooks

The project includes a fully automated **CI/CD pipeline** configured via **GitHub Actions**.  
The configuration files are located in **`.github/workflows`**.

During the CI process, the following checks are performed:

- ✅ All types of tests
- 🧱 Project build and Storybook build
- 🔍 Code linting and formatting validation

To maintain consistent code quality, **pre-commit hooks** are configured with **Husky**.  
Before each commit, the following tasks are automatically executed:

- 🧩 ESLint and Stylelint checks

Configuration files are located in **`.husky`**.

---

## Working with Data

Data interaction is handled using **Redux Toolkit**.  
Reusable entities should be normalized with **EntityAdapter** whenever possible.

Server requests are sent using [RTK Query](/src/shared/api/rtkApi.ts).

To asynchronously load reducers (to avoid including them in the main bundle),  
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) is used.

---

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [AddNewComment](/src/features/AddNewComment)
- [articleEditForm](/src/features/articleEditForm)
- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationsList](/src/features/ArticleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LanguageSwitcher](/src/features/LanguageSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ProfileRating](/src/features/ProfileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [ScrollRecovery](/src/features/ScrollRecovery)

---
Made with ❤️ by the **Revol**