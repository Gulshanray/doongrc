# SP GRC और Handicrafts - Business Website

यह SP GRC और Handicrafts company की professional business website है। यह Glass Reinforced Concrete (GRC) products की showcase करती है।

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ 
- npm या yarn

### Installation

```bash
# 1. Repository clone करें
git clone [your-repo-url]
cd sp-grc-website

# 2. Dependencies install करें  
npm install

# 3. Development server start करें
npm run dev
```

Website खुल जाएगी: `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components  
│   │   └── lib/           # Utilities
├── server/                # Backend Express server
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage
├── shared/                # Shared types/schemas
└── DEPLOYMENT_GUIDE.md    # Complete deployment guide
```

## 🌟 Features

- **Homepage**: Hero section, featured products, testimonials
- **Products**: Complete catalog with category filtering
- **About**: Company story and mission
- **Gallery**: Project images with filtering
- **Contact**: Contact form and business information
- **Responsive Design**: Mobile-friendly interface
- **Fast Performance**: Optimized for speed

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript  
- **UI Components**: shadcn/ui, Radix UI
- **State Management**: TanStack Query
- **Forms**: React Hook Form + Zod validation
- **Build Tool**: Vite

## 📦 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run check    # TypeScript check
```

## 🚀 Production Deployment

### Render.com पर Deploy करना

1. **GitHub Repository बनाएं और code push करें**
2. **Render.com पर account बनाएं**
3. **Web Service create करें**
4. **Settings configure करें:**
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Node Version: 18+

**Complete deployment guide**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🎨 Design Features

- **Brand Colors**: Red (#DC2626) primary theme
- **Typography**: Clean, professional fonts
- **Layout**: Grid-based responsive design
- **Images**: High-quality product showcases
- **Icons**: Lucide React icon library

## 📱 Pages Overview

- **Home** (`/`): Complete business overview
- **About** (`/about`): Company information
- **Products** (`/products`): Product catalog
- **Gallery** (`/gallery`): Project showcase
- **Contact** (`/contact`): Contact information

## 🔧 Development

### Adding New Products
Products को `server/storage.ts` में `seedProducts` array में add करें।

### Customizing Styles  
Brand colors को `client/src/index.css` में modify करें।

### Adding New Pages
1. `client/src/pages/` में new component बनाएं
2. `client/src/App.tsx` में route add करें

## 📞 Support

Technical issues के लिए:
- GitHub Issues create करें
- Documentation check करें: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

**Made with ❤️ for SP GRC and Handicrafts**