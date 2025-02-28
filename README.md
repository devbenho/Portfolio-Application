# Backend Engineer Portfolio

A full-stack landing website for a Software Backend Engineer built with Next.js and MongoDB Atlas.

## Features

- **About Me**: Professional background and expertise
- **Skills**: Technical skills and proficiencies
- **Projects**: Portfolio of backend engineering projects
- **Learning**: Technologies and skills currently being learned
- **Blog**: Technical blog with interactive features
- **Contact**: Form for service requests and hiring inquiries

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and API routes
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Framer Motion**: Animation library
- **React Hook Form**: Form validation
- **Zod**: Schema validation

### Backend
- **Next.js API Routes**: Backend API endpoints
- **MongoDB Atlas**: Cloud-based NoSQL database
- **MongoDB Node.js Driver**: Database connectivity

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── api/              # API routes
│   ├── blog/             # Blog pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # UI components (shadcn)
│   ├── about.tsx         # About section
│   ├── blog-preview.tsx  # Blog preview section
│   ├── contact.tsx       # Contact form
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── learning.tsx      # Learning section
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects section
│   └── skills.tsx        # Skills section
├── lib/                  # Utility functions
│   ├── db.ts             # MongoDB connection
│   └── utils.ts          # Helper functions
├── public/               # Static assets
├── .env.example          # Example environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 16.x or later
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/backend-engineer-portfolio.git
   cd backend-engineer-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   
4. Update the `.env.local` file with your MongoDB Atlas connection string.

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## MongoDB Atlas Setup

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up database access (username and password)
4. Set up network access (IP whitelist)
5. Get your connection string and add it to `.env.local`

## API Routes

The application provides the following API endpoints:

- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add a new skill
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Add a new project
- `GET /api/learning` - Get all learning items
- `POST /api/learning` - Add a new learning item
- `GET /api/blog` - Get all blog posts
- `POST /api/blog` - Create a new blog post
- `GET /api/blog/[id]` - Get a specific blog post
- `PUT /api/blog/[id]` - Update a blog post
- `DELETE /api/blog/[id]` - Delete a blog post
- `POST /api/blog/[id]/like` - Like a blog post
- `GET /api/blog/[id]/comment` - Get comments for a blog post
- `POST /api/blog/[id]/comment` - Add a comment to a blog post
- `POST /api/contact` - Submit a contact request

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## License

This project is licensed under the MIT License.