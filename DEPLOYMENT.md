# Deployment Guide

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Clickers Agency Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/clickers-agency.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Other
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### Step 3: Environment Variables (Optional)
If you add a database later, set these in Vercel dashboard:
- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to "production"

## 📁 Project Structure
```
├── client/          # React frontend
├── server/          # Express.js backend  
├── shared/          # Shared types/schemas
├── dist/            # Build output
├── vercel.json      # Vercel configuration
└── package.json     # Dependencies & scripts
```

## ✅ Ready for Deployment
- ✅ Vercel configuration (`vercel.json`)
- ✅ Build scripts (`vercel-build`)
- ✅ Environment files ignored
- ✅ README documentation
- ✅ All dependencies installed

Your site will be live at: `https://your-project-name.vercel.app`
