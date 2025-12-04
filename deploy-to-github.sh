#!/bin/bash

# Deploy Muabbaz's Marriage Mission to GitHub
echo "🚀 Starting deployment to GitHub..."

# Initialize git repository
echo "📦 Initializing Git repository..."
git init

# Add all files
echo "📝 Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Muabbaz's Marriage Mission website

- Added complete website with responsive design
- Included social media sharing functionality
- Added contact information and testimonials
- Configured for Vercel deployment
- Ready to help Muabbaz find love! 💍"

# Rename branch to main
echo "🌿 Setting branch to main..."
git branch -M main

# Add remote origin
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/ahsanhabibakik/kanjud-marriage.git

# Push to GitHub
echo "⬆️ Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Successfully deployed to GitHub!"
echo "🌐 Repository: https://github.com/ahsanhabibakik/kanjud-marriage"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Click 'Add New Project'"
echo "3. Import from GitHub: ahsanhabibakik/kanjud-marriage"
echo "4. Click 'Deploy'"
echo "5. Update script.js with your Vercel URL"
echo ""
echo "💍 Good luck helping Muabbaz find love!"
