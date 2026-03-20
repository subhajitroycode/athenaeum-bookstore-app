# 📚 Athenaeum — A Literary Bookstore App

> *"A curated sanctuary for literary enthusiasts."*

Athenaeum is a full-stack bookstore web application built as a portfolio/demo project. It features a rich, elegantly designed UI with full authentication, a shopping cart, favourites, genre browsing, and an admin system (coming soon) — all without processing any real payments. (Yes, someone will always try the checkout button. I see you.)

---

## ✨ Features

- 🔍 **Book Search & Discovery** — Full-text search by title, author, or ISBN
- 🗂️ **Genre Browsing** — Explore books organized by curated literary genres
- 🛒 **Shopping Cart** — Add, remove, and update book quantities
- 💕 **Favourites** — Save books to your personal collection
- 🔐 **Authentication** — Email/password + Google & GitHub OAuth
- 👤 **Role-Based Access** — Separate user and admin profile pages
- 🌙 **Dark / Light Theme** — Persistent theme toggle using system preference detection
- 📄 **Pagination** — Responsive, adaptive items-per-page based on screen size
- 📱 **Fully Responsive** — It looks great on every screen
- 🧩 **Breadcrumb Navigation** — Contextual breadcrumbs for deep-linked pages

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework with App Router, Server Components & Server Actions |
| **React 19** | UI library with the latest concurrent features |
| **TypeScript** | Type safety across the entire codebase |
| **Tailwind CSS v4** | Utility-first styling with CSS variables and theming |
| **Lucide React** | Beautiful, consistent icon library |

### Fonts (Google Fonts)
| Font | Role |
|---|---|
| **Playfair Display** | Headings & display text — classic, editorial feel |
| **Cormorant Garamond** | Body text — elegant, literary serif |
| **DM Sans** | UI elements — clean, modern sans-serif |

### Backend & Database
| Technology | Purpose |
|---|---|
| **PostgreSQL (NeonDB)** | Serverless PostgreSQL database hosted on Neon |
| **Prisma v7** | Type-safe ORM with generated client & migrations |

### Authentication
| Technology | Purpose |
|---|---|
| **better-auth v1.4** | Modern, full-featured auth library |
| **Google OAuth** | Social login via Google |
| **GitHub OAuth** | Social login via GitHub |

### State Management
| Technology | Purpose |
|---|---|
| **Zustand v5** | Lightweight global state (cart, theme, book store) |

### Deployment & Tooling
| Technology | Purpose |
|---|---|
| **Vercel** | Hosting & deployment |
| **dotenv** | Environment variable management |
| **tsx** | TypeScript execution for scripts (e.g., seed) |
| **ESLint** | Code linting with Next.js & TypeScript rules |

---

## 🗂️ Project Structure

```
athenaeum/
├── app/
│   ├── (pages)/
│   │   ├── auth/          # Sign in / Sign up
│   │   ├── books/         # Book listing & detail pages
│   │   ├── genres/        # Genre browsing
│   │   ├── favourites/    # User favourites
│   │   ├── cart/          # Shopping cart
│   │   ├── checkout/      # Checkout page
│   │   ├── about/         # About page
│   │   ├── footer/        # Footer pages
│   │   └── (profile)/     # Admin(coming soon) & user profile pages
│   ├── actions/           # Next.js Server Actions
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── store/             # Zustand stores
│   └── utils/             # Utility functions
├── lib/
│   ├── auth.ts            # better-auth server config
│   ├── auth-client.ts     # better-auth client config
│   ├── db.ts              # Prisma client singleton
│   └── generated/prisma/  # Prisma generated types & client
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.ts            # Database seeder (55 classic books!)
│   └── migrations/        # SQL migration history
└── public/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20.9.0`
- [NeonDB](https://neon.com) account (or any PostgreSQL database)
- Google & GitHub OAuth credentials (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/subhajitroycode/athenaeum-bookstore-app.git
cd athenaeum-bookstore-app

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/athenaeum"

BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"
```

### Database Setup

```bash
# Run migrations
npx prisma migrate deploy

# Seed the database with 55 classic books
npx prisma db seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Database Schema

The app uses the following models:

- **Book** — Title, author, genre, ISBN, price, cover image, description
- **User** — Name, email, role (`user` | `admin`), emailVerified
- **Cart** + **CartItem** — Per-user cart with quantity tracking
- **Favourite** — Many-to-many between users and books
- **Session**, **Account**, **Verification** — Managed by better-auth

---

## 🎨 Design Philosophy

Athenaeum draws from classic editorial aesthetics — think bookshop meets literary magazine. The color palette uses warm browns and creams in light mode, shifting to deep, ink-like tones in dark mode. Typography is intentional: Playfair Display for grandeur, Cormorant Garamond for warmth, and DM Sans for precision.

Every transition, hover state, and animation was crafted to feel like turning a page — deliberate, unhurried, and a little indulgent.

---

## 🔑 Roles

| Role | Access |
|---|---|
| **Guest** | Browse books, genres, about page |
| **User** | + Favourites, cart, profile |
| **Admin** | + Admin dashboard (coming soon) |

To make a user an admin, update their `role` field in the database directly.

---

## 🧪 Demo Notes

- **No payments are processed.** Relax! The checkout page exists purely for the experience and aesthetic purpose.
- **Books are seeded** from a curated list of 55 classic and contemporary titles sourced via the Open Library Covers API.
- **OAuth** requires valid credentials — for local dev, email/password auth works out of the box.

---

## 📜 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 🙏 Acknowledgements

- [Open Library](https://openlibrary.org/) for the beautiful book cover images
- [better-auth](https://www.better-auth.com/) for making authentication actually pleasant to work with
- [Prisma](https://www.prisma.io/) for the best ORM experience in the JS ecosystem
- Every reader who's ever bought more books than they'll ever finish (you know who you are)

---

## 📬 Contact

Built with care by **Subhajit Roy**

- 🐦 [X (Previously Twitter)](https://x.com/subhajitroycode)
- 💼 [LinkedIn](https://linkedin.com/in/subhajitroycode)
- 📸 [Instagram](https://instagram.com/subhajitroycode)
- 🐙 [GitHub](https://github.com/subhajitroycode)

---

> **P.S.** — There's a hidden Easter egg somewhere in this project. If you stumble across it, congratulations — you've got the curiosity of a true developer (and probably too much free time, but I respect it). 🥚