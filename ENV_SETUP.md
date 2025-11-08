# Client Environment Variables Setup

## File Location
The client environment file should be located at: `client/.env`

## Environment Variables

### VITE_API_URL
- **Description**: Base URL for the API endpoints
- **Default**: `/api` (uses Vite proxy in development)
- **Development**: `/api` (proxied to `http://localhost:5000`)
- **Production**: Full URL like `https://your-backend-api.vercel.app/api`

### Example `.env` file:

```env
# For local development (uses Vite proxy)
VITE_API_URL=/api

# For production (replace with your actual backend URL)
# VITE_API_URL=https://your-backend-api.vercel.app/api
```

## How It Works

1. **Development Mode**:
   - Uses `/api` which is proxied by Vite to `http://localhost:5000`
   - Configured in `vite.config.js`

2. **Production Mode**:
   - Uses the full URL to your backend API
   - Set `VITE_API_URL` to your deployed backend URL

## Accessing in Code

The environment variable is accessed in `client/src/api.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL || '/api';
```

The login page and all API calls automatically use this configuration.

## Important Notes

- ✅ Variables must be prefixed with `VITE_` to be accessible in client code
- ✅ Restart the dev server after changing `.env` file
- ✅ `.env` file is gitignored and should not be committed
- ✅ Use `.env.example` as a template for other developers

## Vercel Deployment

When deploying to Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `VITE_API_URL` with your backend URL
3. Set it for Production, Preview, and Development environments
4. Redeploy your application

Example:
```
VITE_API_URL=https://your-backend-api.vercel.app/api
```

