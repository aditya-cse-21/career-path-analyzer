# Deployment Guide

## Frontend (Vercel)

1. **Set Environment Variable:**
   - Go to your Vercel project settings
   - Navigate to "Environment Variables"
   - Add: `VITE_API_URL` = `https://career-path-analyzer-eight.vercel.app`
   - Make sure to set it for Production, Preview, and Development

2. **Redeploy** after setting the environment variable

## Backend (Vercel/Railway/Render)

The backend CORS is now configured to allow:
- `http://localhost:3000` (local development)
- `https://career-path-analyzer-ziir.vercel.app` (your frontend)
- Any `*.vercel.app` domain

## Important Notes

- The API URL is automatically cleaned to remove trailing slashes
- CORS is configured to allow your frontend domain
- Make sure both frontend and backend are deployed before testing

## Troubleshooting

If you still see CORS errors:
1. Check that `VITE_API_URL` is set correctly in Vercel
2. Ensure the backend URL doesn't have a trailing slash
3. Clear browser cache and try again
4. Check browser console for the exact error message

