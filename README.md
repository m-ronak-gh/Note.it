# Note.it

A simple and elegant note-taking web application built with the MERN stack. This project demonstrates full-stack development using MongoDB, Express.js, React.js, and Node.js.
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [MERN Tech Stack](#mern-tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Acknowledgments](#acknowledgments)

## Overview

Note.it is my first MERN stack web application, inspired by tutorials from freeCodeCamp.org (Burak @Codesistency). 
It provides a clean and intuitive interface for creating, reading, updating, and deleting notes (CRUD operations). The application features rate limiting for API protection and a responsive design built with React and Tailwind CSS.

## Features

### Core Functionality
- **Create Notes**: Add new notes with title and content
- **View Notes**: Browse all notes in a clean, organized layout
- **Update Notes**: Edit existing notes seamlessly
- **Delete Notes**: Remove notes that are no longer needed
- **Sort Notes**: Automatically displays newest notes first

### Technical Features
- **Rate Limiting**: API protection using Upstash Redis
- **Responsive Design**: Mobile-friendly interface with DaisyUI components
- **Real-time Feedback**: Toast notifications for user actions
- **Error Handling**: Comprehensive error management and user feedback
- **Production Ready**: Optimized build and deployment configuration

## MERN-Tech-Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Lucide React** - Icon library
- **React Hot Toast** - Notification system
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Upstash Redis** - Rate limiting and caching
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Development server auto-restart
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project-Structure

```
Note.it/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js              # Database configuration
│   │   │   └── upstash.js         # Seting ratelimit here
│   │   ├── controllers/
│   │   │   └── notesController.js # API route handlers
│   │   ├── middleware/
│   │   │   └── rateLimiter.js     # Rate limiting middleware
│   │   ├── models/
│   │   │   └── Note.js            # MongoDB schema
│   │   ├── routes/
│   │   │   └── notesRoutes.js     # API routes
│   │   └── server.js              # Main backend server setup
│   └── package.json               # Backend dependencies
├── frontend/
│   ├── src/
│	│   ├── dist/                  # Production build output
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation component
│   │   │   ├── NoteCard.jsx       # Individual note display
│   │   │   ├── NotesNotFound.jsx  # Empty state component
│   │   │   └── RateLimitedUI.jsx  # Rate limit message
│   │   ├── lib/
│   │   │   │── axios.js           # API client configuration
│   │   │   └── utils.js           # Utilites function
│   │   ├── pages/
│   │   │   ├── HomePage.jsx       # Main notes listing
│   │   │   ├── CreatePage.jsx     # Note creation form
│   │   │   └── NoteDetailPage.jsx # Individual note view
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx               # React app entry point
│   └── package.json               # Frontend dependencies
├── .gitignore                     # Git ignore file
├── package.json                   # Root package.json to run scripts
└── README.md                      # README file for Information
```

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB (for database)
- Upstash Redis account (for rate limiting)

### Clone the Repository

```bash
git clone https://github.com/m-ronak-gh/Note.it.git
cd Note.it
```

### Environment Variables

Create a `.env` file in the backend directory:
```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Database
MONGODB_URI=mongodb://your_url_here
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### Full Stack Development

To install all the dependencies(frontend and backend)
```bash
npm run build
```

To run both frontend and backend simultaneously:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## Usage

1. **Start the Application**: Follow the installation steps above
2. **Create Notes**: Click the "+" button or navigate to `/create` to add new notes
3. **View Notes**: The home page displays all your notes with the newest first
4. **Edit Notes**: Click on any note to view details and edit
5. **Delete Notes**: Use the delete option on individual notes
6. **Navigation**: Use the navbar to navigate between pages

### Default URLs
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5001`

## API-Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

### Example API Usage

```javascript
// Create a new note
POST("/api/notes")
Content-Type: json

{
  "title": "My First Note",
  "content": "This is the content of my first note."
}
```

## Deployment

### Production Build
```bash
# Build frontend & backend
npm run build

# Backend will serve the built frontend files
npm run start
```

### Environment Setup
1. Set `NODE_ENV=production` in your environment
2. Configure your production MongoDB database
3. Set up Upstash Redis for rate limiting
4. Deploy to your preferred platform (Render, Heroku, Vercel, DigitalOcean, etc.)
## Acknowledgments

- **freeCodeCamp.org** - For excellent free tutorials like this :)
- **Burak @Codesistency** - For teaching this amazing MERN stack course.

---

 [Ronak Mishra](https://linktr.ee/ronak.m)

*This is my first MERN stack project - a journey of learning full-stack web development!*