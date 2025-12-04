# Muabbaz's Marriage Mission 💍

A fun, humorous website to help Muabbaz find his perfect match! Features a beautiful beige/off-white design, animated character, and social media sharing capabilities.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to your project folder**:
   ```bash
   cd /home/akik/code/muabbaz-fun
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Login to your Vercel account (or create one)
   - Set up and deploy: `Y`
   - Which scope: Select your account
   - Link to existing project: `N`
   - Project name: `muabbaz-fun` (or your choice)
   - Directory: `./` (current directory)
   - Override settings: `N`

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

6. **Update the URL in script.js**:
   - After deployment, Vercel will give you a URL (e.g., `https://muabbaz-fun.vercel.app`)
   - Open `script.js` and update line 147:
   ```javascript
   const pageUrl = 'https://your-actual-url.vercel.app';
   ```
   - Redeploy: `vercel --prod`

### Option 2: Deploy via GitHub + Vercel Dashboard

1. **Make the deployment script executable and run it**:
   ```bash
   cd /home/akik/code/muabbaz-fun
   chmod +x deploy-to-github.sh
   ./deploy-to-github.sh
   ```

   **OR manually run these commands**:
   ```bash
   cd /home/akik/code/muabbaz-fun
   git init
   git add .
   git commit -m "Initial commit: Muabbaz Marriage Mission"
   git branch -M main
   git remote add origin https://github.com/ahsanhabibakik/kanjud-marriage.git
   git push -u origin main
   ```

2. **Repository is already created**:
   - Repository: https://github.com/ahsanhabibakik/kanjud-marriage
   - Just push your code using the commands above

3. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import from GitHub: `ahsanhabibakik/kanjud-marriage`
   - Vercel will auto-detect settings
   - Click "Deploy"

4. **Update the URL**:
   - After deployment, update `script.js` line 147 with your Vercel URL
   - Push changes to GitHub:
     ```bash
     git add script.js
     git commit -m "Update website URL"
     git push
     ```
   - Vercel will auto-deploy the changes

### Option 3: Deploy via Vercel Dashboard (Direct Upload)

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign up or log in

2. **Create New Project**:
   - Click "Add New Project"
   - Choose "Upload folder"
   - Select the `muabbaz-fun` folder

3. **Deploy**:
   - Vercel will automatically deploy
   - Get your URL from the dashboard

4. **Update URL in script.js**:
   - Download the deployed project
   - Update line 147 in `script.js`
   - Re-upload or use Git for future updates

## 🌐 Custom Domain Setup

If you want to use `kanjudmuabbaz.com`:

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click "Domains"
   - Add `kanjudmuabbaz.com`

2. **Update DNS records** (at your domain registrar):
   - Add a CNAME record: `www` pointing to `cname.vercel-dns.com`
   - Add an A record: `@` pointing to `76.76.21.21`

3. **Wait for DNS propagation** (can take up to 48 hours)

## 📱 Social Media Sharing

The website includes:
- **Open Graph meta tags** for Facebook, LinkedIn, WhatsApp
- **Twitter Card support**
- **Share buttons** for WhatsApp, Facebook, Twitter, LinkedIn
- **Copy link** functionality

### Creating a Social Media Preview Image

The website references `og-image.png`. You can:

1. **Option A: Screenshot the `og-image.html` file**:
   - Open `og-image.html` in a browser
   - Take a screenshot (1200x630px)
   - Save as `og-image.png`
   - Upload to your project

2. **Option B: Use a design tool**:
   - Create a 1200x630px image in Canva, Figma, or Photoshop
   - Include the text: "Help Muabbaz Find Love! 💍"
   - Use beige/off-white background
   - Save as `og-image.png`

3. **Option C: Use an online tool**:
   - Visit https://www.opengraph.xyz/
   - Create your OG image
   - Download and save as `og-image.png`

## 🧪 Testing Social Media Sharing

After deployment, test your links:

- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: Share the link in a post preview

## 📁 Project Structure

```
muabbaz-fun/
├── index.html          # Main website
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── og-image.html       # Template for social media image
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## ✨ Features

- Animated character with click interactions
- Responsive design (mobile-friendly)
- Hope meter animation
- Testimonial cards
- Contact information with clickable links
- Social media share buttons
- Easter egg (Konami code: ↑↑↓↓←→←→)
- Scroll-to-bottom surprise message

## 🛠️ Local Development

To run locally:

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve

# Option 3: PHP
php -S localhost:8000
```

Then visit: http://localhost:8000

## 📞 Contact Information

The website includes links to:
- Phone: 01773-995858
- LinkedIn: linkedin.com/in/kanjudmuabbaz
- Facebook: facebook.com/kanjudmuabbaz
- Portfolio: kanjudmuabbaz.com

## 🎨 Color Scheme

- Background: Off-white/Beige gradient (#f5f5dc, #f0e6d2, #ebe1c9)
- Primary text: Dark gray (#3d3d3d)
- Accent: Saddle brown (#8b4513)
- Borders: Chocolate (#d2691e)

## 📝 License

This is a fun personal project. Feel free to use it as inspiration!

---

Made with ❤️ to help Muabbaz find his soulmate!
