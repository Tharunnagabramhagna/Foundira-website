# 🚀 GitHub Setup Guide - Foundira Project

## Step-by-Step Guide to Push Your Project to GitHub

---

## 📋 Prerequisites

Before starting, make sure you have:
- [ ] Git installed on your computer
- [ ] GitHub account created
- [ ] Project folder ready (`c:\Users\tarun\OneDrive\Desktop\foundira`)

---

## 🔧 Step 1: Check if Git is Installed

Open PowerShell and run:
```powershell
git --version
```

**Expected Output**: `git version 2.x.x`

**If not installed**:
1. Download from: https://git-scm.com/download/win
2. Install with default settings
3. Restart PowerShell

---

## 🌐 Step 2: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Click** the `+` icon (top right)
3. **Select** "New repository"
4. **Fill in details**:
   - **Repository name**: `foundira` or `foundira-lost-and-found`
   - **Description**: "Foundira - Smart Lost & Found Connect Platform"
   - **Visibility**: Choose Public or Private
   - **DO NOT** check "Initialize with README"
   - **DO NOT** add .gitignore or license yet
5. **Click** "Create repository"

---

## 📝 Step 3: Create .gitignore File

Create a file to ignore unnecessary files.

**File**: `c:\Users\tarun\OneDrive\Desktop\foundira\.gitignore`

**Content**:
```
# Dependencies
node_modules/
package-lock.json

# Environment variables
.env
.env.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
desktop.ini

# Logs
*.log
npm-debug.log*

# Build
dist/
build/

# Temporary files
*.tmp
*.temp

# User data (optional - comment out if you want to keep)
# localStorage data is stored in browser, not in files
```

---

## 📄 Step 4: Create README.md

Create a professional README for your project.

**File**: `c:\Users\tarun\OneDrive\Desktop\foundira\README.md`

**Content**:
```markdown
# 🔍 Foundira - Smart Lost & Found Connect

> Reconnecting People with What They Lost

A modern, intelligent lost and found platform built for students and communities to safely recover lost items and return found items to their rightful owners.

## ✨ Features

- 🔐 **Secure Authentication** - Login/Signup with session management
- 📝 **Post Lost/Found Items** - Easy item posting with images and details
- 🤖 **Smart Matching** - AI-powered matching algorithm
- 💬 **Real-time Chat** - Direct messaging between users
- 🔔 **Notifications** - Stay updated on matches and messages
- 👤 **Profile System** - User profiles with trust scores
- 📧 **Email Integration** - "It's Me" claim feature with Make.com
- 🌓 **Dark Mode** - Beautiful dark/light theme toggle
- 📱 **Responsive Design** - Works on all devices

## 🚀 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Mock API with localStorage (Demo)
- **Integrations**: Make.com webhooks, DiceBear avatars
- **Deployment**: Static hosting ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/foundira.git
cd foundira
```

2. Open `index.html` in a browser or use a local server:
```bash
npx http-server .
```

3. Navigate to `http://localhost:8080`

## 🎯 Usage

1. **Sign Up** - Create a new account
2. **Login** - Access your dashboard
3. **Post Items** - Report lost or found items
4. **Browse** - View community items
5. **Match** - Get smart match suggestions
6. **Chat** - Connect with other users
7. **Claim** - Use "It's Me" to claim found items

## 🔧 Configuration

### Make.com Webhook
Update the webhook URL in `src/frontend/pages/MyItems.jsx`:
```javascript
const response = await fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(emailData)
});
```

## 📸 Screenshots

(Add screenshots here)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

## 🙏 Acknowledgments

- Built for [Hackathon Name]
- Theme: Code for Connection
- Date: February 2026

---

Made with ❤️ for the community
```

---

## 🎯 Step 5: Initialize Git Repository

Open PowerShell in your project folder:

```powershell
cd c:\Users\tarun\OneDrive\Desktop\foundira
```

Initialize Git:
```powershell
git init
```

**Expected Output**: `Initialized empty Git repository in...`

---

## ➕ Step 6: Add Files to Git

Add all files:
```powershell
git add .
```

Check status:
```powershell
git status
```

**Expected Output**: List of files to be committed (in green)

---

## 💾 Step 7: Create First Commit

Commit your files:
```powershell
git commit -m "Initial commit: Foundira - Smart Lost & Found Platform"
```

**Expected Output**: Files committed with statistics

---

## 🔗 Step 8: Connect to GitHub

Add your GitHub repository as remote:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/foundira.git
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

Verify remote:
```powershell
git remote -v
```

**Expected Output**:
```
origin  https://github.com/YOUR_USERNAME/foundira.git (fetch)
origin  https://github.com/YOUR_USERNAME/foundira.git (push)
```

---

## 🚀 Step 9: Push to GitHub

Set default branch name:
```powershell
git branch -M main
```

Push your code:
```powershell
git push -u origin main
```

**First time?** You'll be prompted to login:
1. Enter your GitHub username
2. Enter your Personal Access Token (not password!)

**Don't have a token?**
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `repo` (full control)
4. Copy the token
5. Use it as password when pushing

---

## ✅ Step 10: Verify on GitHub

1. Go to your repository: `https://github.com/YOUR_USERNAME/foundira`
2. You should see all your files!
3. README.md will be displayed on the main page

---

## 🔄 Future Updates

When you make changes:

```powershell
# 1. Check what changed
git status

# 2. Add changed files
git add .

# 3. Commit changes
git commit -m "Description of changes"

# 4. Push to GitHub
git push
```

---

## 🎨 Optional: Add GitHub Pages Deployment

To host your app on GitHub Pages:

1. Go to repository Settings
2. Click "Pages" (left sidebar)
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at: `https://YOUR_USERNAME.github.io/foundira/`

---

## 📊 Project Structure

```
foundira/
├── index.html              # Main entry point
├── README.md              # Project documentation
├── .gitignore            # Git ignore rules
├── public/               # Static assets
│   └── images/          # Images
├── src/
│   ├── backend/
│   │   └── api/         # Mock API files
│   ├── frontend/
│   │   ├── components/  # React components
│   │   └── pages/       # Page components
│   ├── context/         # React context
│   └── utils/           # Utility functions
└── Documentation files (.md)
```

---

## 🐛 Troubleshooting

### Issue: "Git not recognized"
**Solution**: Install Git from https://git-scm.com/download/win

### Issue: "Permission denied"
**Solution**: Use Personal Access Token instead of password

### Issue: "Repository not found"
**Solution**: Check repository URL and your username

### Issue: "Failed to push"
**Solution**: Pull first with `git pull origin main --allow-unrelated-histories`

---

## 🎉 Success!

Your project is now on GitHub! 🚀

**Next Steps**:
1. ✅ Add screenshots to README
2. ✅ Add project description
3. ✅ Share repository link
4. ✅ Star your own repo! ⭐

---

## 📞 Need Help?

If you encounter any issues:
1. Check the error message
2. Google the error
3. Ask on Stack Overflow
4. Check GitHub documentation

---

**Congratulations on pushing your project to GitHub!** 🎊

Your code is now safely stored and ready to share! 🌟
