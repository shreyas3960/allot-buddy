# Allot Buddy

A full-stack web application built with React, Tailwind CSS, and Express.

## Project Structure

```
client/   → React frontend (Vite + Tailwind CSS)
server/   → Express backend
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Getting Started

### Backend (Express)

```bash
cd server
npm install
npm start
```

The server starts at **http://localhost:5000**. Verify it works:

```bash
curl http://localhost:5000/api/test
# → {"status":"ok"}
```

### Frontend (React)

```bash
cd client
cp .env.example .env   # then fill in your Firebase config values
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**.

#### Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication → Sign-in method → Google**
3. Register a Web app and copy the config values
4. Paste them into `client/.env` (see `client/.env.example` for the keys)

### Building for Production

```bash
cd client
npm run build
```

The production bundle is output to `client/dist/`.

## Tech Stack

- **Frontend:** React 19 · Tailwind CSS 4 · Vite
- **Backend:** Node.js · Express 5
- **Authentication:** Google OAuth / Firebase Auth

## Deployment

### Frontend → Vercel

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Set the **Root Directory** to `client`
4. Set **Build Command** to `npm run build` and **Output Directory** to `dist`
5. Add environment variables (`VITE_FIREBASE_*` and `VITE_API_URL`)
6. Deploy

### Frontend → Netlify

1. Go to [netlify.com](https://netlify.com) and import the repository
2. Set **Base directory** to `client`
3. Set **Build command** to `npm run build` and **Publish directory** to `client/dist`
4. Add environment variables (`VITE_FIREBASE_*` and `VITE_API_URL`)
5. Deploy

> Set `VITE_API_URL` to your deployed backend URL (e.g. `https://allot-buddy-api.onrender.com`).

### Backend → Render

1. Go to [render.com](https://render.com) and create a new **Web Service**
2. Connect your GitHub repo
3. Set **Root Directory** to `server`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `npm start`
6. Render provides a `PORT` environment variable automatically — no manual config needed
7. Deploy

## License

MIT
