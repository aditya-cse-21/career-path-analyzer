# Deployment Guide

## Environment Variables Setup

### Frontend (Vercel/Netlify)

**Required Environment Variable:**
- `VITE_API_URL` = Your backend API URL
  - Example: `https://your-backend.vercel.app` or `https://your-backend.railway.app`
  - **Important:** Do NOT include trailing slash (e.g., use `https://api.example.com` not `https://api.example.com/`)
  - If not set, defaults to `http://localhost:5000` (for local development)

**How to set in Vercel:**
1. Go to your Vercel project → Settings → Environment Variables
2. Add new variable:
   - Name: `VITE_API_URL`
   - Value: Your backend deployment URL (e.g., `https://career-path-analyzer-backend.vercel.app`)
   - Environment: Production, Preview, Development
3. Redeploy after adding the variable

### Backend (Vercel/Railway/Render)

**No Environment Variables Required!**

The backend uses simple CORS configuration that allows all origins.

**Optional Environment Variable:**
- `PORT` = Server port (defaults to 5000 if not set)
  - Most hosting platforms (Vercel, Railway, Render) automatically set this
  - You typically don't need to set this manually

## Local Development

Create `.env` files (optional for local development):

**Frontend `.env`:**
```
VITE_API_URL=http://localhost:5000
```
(Optional - defaults to this if not set)

**Backend `.env`:**
```
PORT=5000
```
(Optional - defaults to 5000 if not set)

## Deployment Steps

1. **Deploy Backend First:**
   - Deploy your backend to Vercel/Railway/Render
   - Note the deployment URL (e.g., `https://your-backend.vercel.app`)

2. **Deploy Frontend:**
   - Set `VITE_API_URL` environment variable to your backend URL
   - Deploy frontend to Vercel/Netlify
   - The frontend will use the backend URL from the environment variable

## Important Notes

- CORS is configured to allow all origins (simple setup)
- Make sure both frontend and backend are deployed before testing
- Always set `VITE_API_URL` in frontend before deploying
- Backend doesn't need any CORS-related environment variables

## Example

If your backend is deployed at: `https://career-path-analyzer-backend.vercel.app`

Then in your frontend Vercel project, set:
```
VITE_API_URL=https://career-path-analyzer-backend.vercel.app
```

That's it! No other environment variables needed.

