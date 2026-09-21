# Trackify - The Ultimate Job Application Tracker

![Trackify](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-7.9-2D3748?style=for-the-badge&logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql)

Trackify is a comprehensive job application tracking system designed to help you organize your job search, track interview stages, and land your dream job. It provides a visual kanban pipeline, smart analytics, and detailed contact tracking—all in one place.

## ✨ Features

- **Kanban Pipeline:** Intuitive drag-and-drop interface to move applications through various stages (Applied, Phone Screen, Interview, Technical, Offer, Rejected, Ghosted).
- **Analytics Dashboard:** Get insights into your response rate, weekly application trends, and identify your best-performing job sources.
- **Detailed Application Tracking:** Store comprehensive details for each application including salary ranges, job descriptions, URLs, and custom notes.
- **Contact Management:** Save recruiter and hiring manager details against every application so nothing slips through the cracks.
- **Dark Mode:** A fully integrated, persistent dark mode for comfortable late-night job hunting.
- **Secure Authentication:** Robust user authentication system supporting both Email/Password and Google OAuth.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL
- **Authentication:** [Better Auth](https://better-auth.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Drag and Drop:** [@dnd-kit](https://dndkit.com/)
- **Charts:** [Recharts](https://recharts.org/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/trackify.git
   cd trackify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add the necessary environment variables. Example:
   ```env
   # Database Configuration
   DATABASE_URL="postgresql://user:password@localhost:5432/trackify?schema=public"

   # Authentication
   BETTER_AUTH_SECRET="your-super-secret-key"
   BETTER_AUTH_URL="http://localhost:3000"

   # Google OAuth (Optional, for Google Sign-in)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Database Setup:**
   Generate Prisma client and push the schema to your database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Server:**
   ```bash
   npm run dev
   ```

6. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `src/app/` - Next.js app router pages and layouts.
  - `(auth)/` - Authentication pages (Sign-in, Sign-up).
  - `(dashboard)/` - Protected routes (Dashboard, Applications, Settings).
- `src/components/` - Reusable UI components.
  - `auth/` - Authentication forms.
  - `charts/` - Analytics charts (Recharts).
  - `dashboard/` - Dashboard specific components (Stat cards, tables).
  - `kanban/` - Drag-and-drop board components.
  - `modals/` - Application entry and interaction modals.
- `src/lib/` - Utility functions and shared libraries.
- `src/store/` - Zustand state management stores (`useApplicationStore`, `useThemeStore`).
- `src/types/` - TypeScript type definitions.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/trackify/issues).

## 📄 License

This project is licensed under the MIT License.
