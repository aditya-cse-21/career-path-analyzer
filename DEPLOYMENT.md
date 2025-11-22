# Deployment Guide

## Environment Variables Setup

### Frontend (Vercel/Netlify)

**Required Environment Variable:**
- `VITE_API_URL` = Your backend API URL
  - Example: `https://your-backend.vercel.app` or `https://your-backend.railway.app`
  - **Important:** Do NOT include trailing slash (e.g., use `https://api.example.com` not `https://api.example.com/`)

**How to set in Vercel:**
1. Go to your Vercel project → Settings → Environment Variables
2. Add new variable:
   - Name: `VITE_API_URL`
   - Value: Your backend deployment URL
   - Environment: Production, Preview, Development
3. Redeploy after adding the variable

### Backend (Vercel/Railway/Render)

**Required Environment Variable:**
- `ALLOWED_ORIGINS` = Comma-separated list of frontend URLs
  - Example: `https://your-frontend.vercel.app,https://your-frontend-preview.vercel.app`
  - For local development: `http://localhost:3000`
  - For production: Your frontend deployment URL(s)

**How to set:**
1. Go to your backend deployment platform settings
2. Add environment variable:
   - Name: `ALLOWED_ORIGINS`
   - Value: Your frontend URL(s), comma-separated
   - Example: `https://your-frontend.vercel.app,http://localhost:3000`
3. Redeploy after adding the variable

**Optional Environment Variable:**
- `PORT` = Server port (defaults to 5000 if not set)

## Local Development

Create `.env` files:

**Frontend `.env`:**
```
VITE_API_URL=http://localhost:5000
```

**Backend `.env`:**
```
ALLOWED_ORIGINS=http://localhost:3000
PORT=5000
```

## Important Notes

- The API URL is automatically cleaned to remove trailing slashes
- CORS is configured via `ALLOWED_ORIGINS` environment variable
- Make sure both frontend and backend are deployed before testing
- Always set environment variables before deploying

## Troubleshooting

If you see CORS errors:
1. Check that `VITE_API_URL` is set correctly in frontend (no trailing slash)
2. Check that `ALLOWED_ORIGINS` includes your frontend URL in backend
3. Ensure URLs match exactly (including https/http)
4. Clear browser cache and try again
5. Check browser console for the exact error message

