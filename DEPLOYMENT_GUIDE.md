# SP GRC वेबसाइट - Deployment Guide

## Local Development में कैसे चलाएं

### Requirements
- Node.js (18 या उससे ऊपर)
- npm या yarn

### Steps:

1. **Project clone करें:**
```bash
git clone [your-repo-url]
cd sp-grc-website
```

2. **Dependencies install करें:**
```bash
npm install
```

3. **Development server start करें:**
```bash
npm run dev
```

4. **Browser में खोलें:**
```
http://localhost:5000
```

## Render पर Deploy करना

### Step 1: GitHub Repository बनाएं

1. GitHub पर जाएं और नई repository बनाएं
2. अपने local code को push करें:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-github-repo-url]
git push -u origin main
```

### Step 2: Render Account Setup

1. [render.com](https://render.com) पर जाएं
2. GitHub account से sign up करें
3. "New +" button पर click करें
4. "Web Service" select करें

### Step 3: Repository Connect करें

1. अपनी GitHub repository select करें
2. निम्नलिखित settings भरें:

**Basic Settings:**
- **Name:** `sp-grc-website`
- **Region:** Singapore (भारत के लिए nearest)
- **Branch:** `main`
- **Root Directory:** (blank छोड़ें)

**Build & Deploy Settings:**
- **Runtime:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`

### Step 4: Environment Variables (Optional)

अगर आपको database या API keys की जरूरत है:
1. "Environment" tab में जाएं
2. Variables add करें:
```
NODE_ENV=production
PORT=10000
```

### Step 5: Deploy करें

1. "Create Web Service" button पर click करें
2. Render automatically build और deploy करेगा
3. 5-10 minutes में आपकी website live हो जाएगी

### Step 6: Custom Domain (Optional)

1. Render dashboard में जाएं
2. "Settings" → "Custom Domains" 
3. अपना domain add करें
4. DNS settings में CNAME record add करें

## Production Build Commands

### Manual Build (Local Testing):
```bash
# Frontend build करें
npm run build

# Production mode में run करें
npm start
```

### Package.json Scripts:
```json
{
  "scripts": {
    "dev": "npm run dev",
    "build": "vite build && tsc server/index.ts --outDir dist --target ES2020 --module ESNext --moduleResolution node",
    "start": "node dist/index.js",
    "preview": "vite preview"
  }
}
```

## Database Setup (अगर जरूरत हो)

### Local Development:
- Currently in-memory storage use हो रहा है
- कोई database setup की जरूरत नहीं

### Production Database (Future):
1. Neon Database या Railway PostgreSQL use करें
2. Environment variables में DATABASE_URL add करें
3. `server/storage.ts` में database connection setup करें

## Troubleshooting

### Common Issues:

1. **Build Failed:**
   - Node.js version check करें (18+ होना चाहिए)
   - `npm install` फिर से run करें

2. **Port Issues:**
   - Local development: Port 5000 use होता है
   - Production: Render automatically port assign करता है

3. **Images Not Loading:**
   - सभी images public folder में रखें
   - या external URLs use करें (जैसे अभी है)

## Cost Estimation

### Render Pricing:
- **Free Tier:** $0/month (limited resources)
- **Starter:** $7/month (recommended)
- **Pro:** $25/month (high traffic के लिए)

### Recommended Plan:
- Small business के लिए **Starter plan** sufficient है
- 512MB RAM, 0.1 CPU, automatic SSL included

## Post-Deployment Checklist

✅ Website properly load हो रही है  
✅ सभी pages working हैं  
✅ Forms submit हो रहे हैं  
✅ Images load हो रहे हैं  
✅ Mobile responsive है  
✅ SSL certificate active है  

## Support & Maintenance

### Regular Updates:
- Code changes GitHub पर push करें
- Render automatically re-deploy करेगा

### Monitoring:
- Render dashboard में logs check करें
- Performance metrics monitor करें

### Backup:
- GitHub repository आपका backup है
- Database backup (जब use करें) regularly लें

---

**Need Help?** 
- Render documentation: [docs.render.com](https://docs.render.com)
- GitHub issues create करें project में