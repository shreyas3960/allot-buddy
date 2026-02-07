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
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**.

### Building for Production

```bash
cd client
npm run build
```

The production bundle is output to `client/dist/`.

## Tech Stack

- **Frontend:** React 19 · Tailwind CSS 4 · Vite
- **Backend:** Node.js · Express 5
- **Authentication:** Google OAuth / Firebase Auth (planned)

## License

MIT
