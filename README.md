# Growbase 🌱

---

## PROJECT SETTINGS ⚙️

This project uses:

- **Vue 3**
- **TypeScript 6**
- **Vite 8**
- **Node.js 24.18.0**
- **Vue Router**
- **Pinia**
- **Vitest**
- **ESLint**
- **Oxlint**
- **Prettier**

### Installation

```bash
npm install
```

### Run development server

```bash
npm run dev
```

---

## CODE QUALITY

This project uses **Prettier**, **ESLint** and **Oxlint** to keep the code consistent and clean.

### Check formatting

```bash
npm run format:check
```

### Fix formatting

```bash
npm run format
```

### Check lint

```bash
npm run lint
```

### Fix lint

```bash
npm run lint:fix
```

### Type checking

```bash
npm run type-check
```

---

## TESTING

This project uses **Vitest**.

### Running tests

```bash
npm run test:unit
```

### Running tests once

```bash
npm run test:unit:run
```

---

## GIT HOOKS

This project uses **Husky** to run quality checks before every commit.

The `pre-commit` hook checks:

- Prettier formatting
- ESLint and Oxlint
- TypeScript
- Unit tests

If any check fails, the commit is aborted.

---

## COMMITS

This project follows **Conventional Commits** using **Commitizen** and **Commitlint**.

To create a commit:

```bash
npx cz
```

Commit messages are validated automatically by the `commit-msg` hook.

Example:

```text
feat: add crop management
```
