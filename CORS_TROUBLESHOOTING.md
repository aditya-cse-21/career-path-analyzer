# CORS Troubleshooting Guide

## Quick Fix Checklist

### 1. Verify Environment Variables are Set

**Backend (Vercel/Railway/Render):**
- Check that `ALLOWED_ORIGINS` is set
- Value should be: `https://your-frontend-url.vercel.app` (no trailing slash)
- For multiple URLs: `https://url1.com,https://url2.com` (comma-separated, no spaces)

**Frontend (Vercel):**
- Check that `VITE_API_URL` is set
- Value should be: `https://your-backend-url.vercel.app` (no trailing slash)

### 2. Verify URLs Match Exactly

- Check for typos in URLs
- Ensure `https://` vs `http://` matches
- No trailing slashes
- Check if your frontend URL changed after redeploy

### 3. Redeploy After Setting Variables

- Environment variables require a redeploy to take effect
- Redeploy both frontend and backend after setting variables

## Common Issues

### Issue: "Redirect is not allowed for a preflight request"

**Cause:** Backend URL might be redirecting (e.g., HTTP to HTTPS)

**Solution:**
1. Ensure backend URL uses `https://` (not `http://`)
2. Check if backend URL is correct and not redirecting
3. Verify the backend is actually deployed and running

### Issue: "CORS policy: No 'Access-Control-Allow-Origin' header"

**Cause:** `ALLOWED_ORIGINS` not set or incorrect

**Solution:**
1. Go to backend deployment platform
2. Set `ALLOWED_ORIGINS` = your exact frontend URL
3. Redeploy backend
4. Check backend logs for "Allowed CORS origins" message

### Issue: Double slash in URL (`//api/roadmap`)

**Cause:** `VITE_API_URL` has trailing slash

**Solution:**
1. Remove trailing slash from `VITE_API_URL`
2. Should be: `https://api.example.com` (not `https://api.example.com/`)
3. Redeploy frontend

## Testing Steps

1. **Check Backend Logs:**
   - Look for "Allowed CORS origins: [...]" message
   - This confirms environment variable is being read

2. **Test Backend Directly:**
   - Open: `https://your-backend-url.vercel.app/`
   - Should see: `{"message":"Career Path Analyzer API is running!"}`

3. **Check Browser Console:**
   - Open DevTools → Network tab
   - Look at the failed request
   - Check the exact error message
   - Check Request Headers → Origin
   - Check Response Headers → Access-Control-Allow-Origin

4. **Verify Environment Variables:**
   - In Vercel: Settings → Environment Variables
   - Ensure variables are set for correct environment (Production/Preview)
   - Check spelling and values

## Temporary Testing Solution

If you need to test quickly, you can temporarily allow all origins (NOT for production):

In `backend/server.js`, change:
```javascript
const allowedOrigins = ['*'];
```

**⚠️ WARNING:** Only use this for testing. Remove before production!

## Still Not Working?

1. Clear browser cache
2. Try incognito/private window
3. Check if both deployments are actually live
4. Verify the exact URLs in browser address bar match environment variables
5. Check backend deployment logs for errors

