## Overview

Brief explanation of: RECIPEASY

Recipeasy is a platform meant to make recipe sharing a lot more convenient for everyone.
It was developed due to the fact that a lot of recipe hosting websites are either managed by one single person or a handful of individuals, and if you wanted to share your recipes you'd have to make your own website or blog.
With a single platform like Recipeasy, instead of having to dig through countless pages, you have a single place to go to for finding what you want to make.

---

## Current Scope

### Status

> The repository is currently focused on moving from The meal DB to our own supabase database

---

## Architecture

## Tech Stack

| Category | Technologies            |
| -------- | ----------------------- |
| Core     | React, TypeScript, Vite |
| UI       | Ant Design              |
| State    | Valtio                  |
| Testing  | Vitest                  |
| Tooling  | ESLint, Prettier        |

> See package.json for exact versions.

---

## Getting Started

### Prerequisites

* Node.js 22+
* npm

### Installation

bash
npm install


### Run Locally

bash
npm run dev


---

## Available Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| npm run dev    | Start development server |
| npm run build  | Create production build  |
| npm run lint   | Run ESLint               |

---

## Development Standards

* ESLint + Prettier
* Conventional Commits

Example commit:

feat: added profile page

---

## Project Structure

text
src/
├── assets/
├── components/
    ├── card.video/
    ├── cards.meal/    
    ├── recipe.info/
    └── statistics
├── context/
├── firebase/
├── pages/
    ├── home/
    ├── login-signup/
    ├── profile/
    └── recipes/
├── routes/
├── services/
├── store/
    └── slices/
├── types/
├── App.css
├── App.tsx
├── index.css
└── main.tsx


---

## Documentation

Additional documentation can be found under:

text
docs/


---

## Ownership

*Team:* RECIPEASY

*Maintainers:*

* Daniel Felipe Rivas
* Rosa María Carvajal Cuellar