# SP GRC और Handicrafts - Complete Development & Deployment Guide

## 🚀 Local Development में कैसे चलाएं

### Requirements / आवश्यकताएं
- Node.js (18 या उससे ऊपर)
- npm या yarn package manager
- Git

### Step-by-Step Local Setup:

#### 1. **Project Download करें:**
```bash
# अगर आपके पास Git repository है तो:
git clone [your-repo-url]
cd sp-grc-website

# या फिर project files को manually download करें
```

#### 2. **Dependencies Install करें:**
```bash
npm install
```

#### 3. **Development Server Start करें:**
```bash
npm run dev
```

#### 4. **Browser में खोलें:**
```
http://localhost:5000
```

आपकी website अब locally चल रही है! 🎉

---

## 🛠️ Changes कैसे करें (How to Make Changes)

### Content Changes / Content में बदलाव:

#### 1. **Company Information बदलना:**
- File: `client/src/pages/about.tsx`
- Company name, address, contact details यहाँ change करें

#### 2. **Product Information बदलना:**
- File: `server/storage.ts` (sample products)
- File: `client/src/pages/products.tsx` (product listing)

#### 3. **Homepage Content बदलना:**
- File: `client/src/pages/home.tsx`
- Hero section, featured products, testimonials

#### 4. **Colors और Design बदलना:**
- File: `client/src/index.css`
- Brand colors: `--brand-red`, `--brand-dark` etc.

#### 5. **Navigation Menu बदलना:**
- File: `client/src/components/navigation.tsx`
- Menu items add/remove करें

### Development Workflow:

#### 1. **Changes करने के बाद:**
```bash
# Development server automatically restart हो जाएगा
# Browser में changes तुरंत दिखेंगे (Hot Reload)
```

#### 2. **नई Images Add करना:**
- Images को `attached_assets/` folder में रखें
- Code में import करें: `import imagePath from "@assets/image.png"`

#### 3. **New Pages Add करना:**
- `client/src/pages/` में नई file बनाएं
- `client/src/App.tsx` में route add करें

---

## 🌐 Render.com पर Deploy करना

### Step 1: GitHub Repository बनाएं

#### 1. **GitHub पर Repository बनाएं:**
- [github.com](https://github.com) पर जाएं
- "New repository" button पर click करें
- Repository name दें (जैसे: `sp-grc-website`)
- Public या Private select करें
- "Create repository" पर click करें

#### 2. **Local Code को GitHub पर Push करें:**
```bash
git init
git add .
git commit -m "Initial SP GRC website commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sp-grc-website.git
git push -u origin main
```

### Step 2: Render Account Setup

#### 1. **Render Account बनाएं:**
- [render.com](https://render.com) पर जाएं
- "Get Started for Free" पर click करें
- GitHub account से sign up करें

#### 2. **New Web Service बनाएं:**
- Dashboard में "New +" button पर click करें
- "Web Service" select करें

### Step 3: Repository Connect करें

#### 1. **GitHub Repository Select करें:**
- अपनी SP GRC repository select करें
- "Connect" पर click करें

#### 2. **Deployment Settings:**
```
Name: sp-grc-website
Environment: Node
Region: Singapore (fastest for India)
Branch: main
Build Command: npm install && npm run build
Start Command: npm start
```

#### 3. **Environment Variables (Optional):**
अगर database use कर रहे हैं तो:
```
DATABASE_URL=your_database_url
NODE_ENV=production
```

### Step 4: Deploy करें

#### 1. **Deploy Button पर Click करें:**
- सभी settings check करने के बाद "Create Web Service" पर click करें
- Build process automatically start हो जाएगा

#### 2. **Deployment Status Check करें:**
- Build logs में progress देख सकते हैं
- Successfully deploy होने पर आपको URL मिलेगा

---

## 🔄 Changes Deploy करना (Updating Live Website)

### जब भी आप कोई changes करते हैं:

#### 1. **Local में Test करें:**
```bash
npm run dev
# Changes check करें localhost:5000 पर
```

#### 2. **GitHub पर Push करें:**
```bash
git add .
git commit -m "Updated product information"
git push origin main
```

#### 3. **Automatic Deployment:**
- Render automatically detect करेगा कि नया code आया है
- Automatically rebuild और deploy हो जाएगा
- 2-5 minutes में live website update हो जाएगी

---

## 📁 Important Files Structure

```
sp-grc-website/
├── client/src/
│   ├── pages/          # सभी website pages
│   │   ├── home.tsx    # Homepage
│   │   ├── about.tsx   # About Us page
│   │   ├── products.tsx # Products page
│   │   └── contact.tsx # Contact page
│   ├── components/     # Reusable components
│   └── index.css      # Colors और styling
├── server/
│   ├── storage.ts     # Sample data
│   └── routes.ts      # API endpoints
└── package.json       # Dependencies
```

---

## 🛠️ Common Changes Guide

### 1. **Company Logo बदलना:**
```tsx
// File: client/src/components/navigation.tsx
// Line में logo text change करें:
<span className="text-xl font-bold brand-red">SP GRC</span>
```

### 2. **Contact Information बदलना:**
```tsx
// File: client/src/pages/contact.tsx
// Address, phone, email update करें
```

### 3. **Product Prices बदलना:**
```tsx
// File: client/src/pages/products.tsx
// grcJaliProducts array में prices update करें
```

### 4. **Colors बदलना:**
```css
/* File: client/src/index.css */
:root {
  --brand-red: 220 38% 54%;      /* Main red color */
  --brand-red-light: 220 38% 64%; /* Light red */
  --brand-dark: 220 39% 11%;     /* Dark color */
}
```

---

## 🔧 Troubleshooting / समस्या निवारण

### Local Development Issues:

#### 1. **"npm command not found":**
```bash
# Node.js install करें:
# https://nodejs.org से download करें
```

#### 2. **Port already in use:**
```bash
# अलग port use करें:
npm run dev -- --port 3000
```

#### 3. **Dependencies error:**
```bash
# Node modules को delete करके फिर install करें:
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues:

#### 1. **Build Failed:**
- Build logs check करें Render dashboard में
- Error message के अनुसार fix करें

#### 2. **Website not loading:**
- Build command और start command check करें
- Environment variables check करें

#### 3. **Changes not reflecting:**
- GitHub पर latest code push हुआ है या नहीं check करें
- Render में manual deploy trigger करें

---

## 📞 Support

अगर कोई problem आए तो:

1. **Error message को carefully पढ़ें**
2. **Browser console check करें** (F12 → Console)
3. **Build logs check करें** (Render dashboard में)

### Quick Commands Reference:

```bash
# Local development start करना
npm run dev

# Production build बनाना
npm run build

# Code को GitHub पर push करना
git add .
git commit -m "Your changes description"
git push origin main
```

---

**Note**: यह guide में सभी basic operations cover हैं। किसी specific feature के लिए code में comments भी देखें।