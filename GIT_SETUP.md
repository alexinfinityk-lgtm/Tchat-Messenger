# Git Setup Guide

## Installing Git

Git is not currently installed on your system. Here's how to install it:

### Option 1: Download from Official Website (Recommended)

1. **Visit**: https://git-scm.com/download/win
2. **Download**: Click "64-bit Git for Windows Setup"
3. **Run**: The downloaded installer
4. **Installation**: Use default settings (just click "Next")
5. **Restart**: PowerShell after installation

### Option 2: Using Winget

```powershell
winget install Git.Git
```

Then restart PowerShell.

### Option 3: Using Chocolatey

```powershell
choco install git
```

---

## After Installing Git

### Step 1: Verify Installation

Open a **new** PowerShell window and run:

```powershell
git --version
```

You should see: `git version 2.x.x`

---

### Step 2: Configure Git

Set your name and email (required for commits):

```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

### Step 3: Initialize Repository

Navigate to the project directory:

```powershell
cd C:\Users\Bend\Workspace\ton_messenger_nft_wallet
```

Initialize Git:

```powershell
git init
```

---

### Step 4: Make Initial Commit

Add all files to staging:

```powershell
git add .
```

Create the first commit:

```powershell
git commit -m "Initial commit: Tchat Messenger with TON integration"
```

---

## Quick Start After Git Installation

Once Git is installed, run these commands:

```powershell
cd C:\Users\Bend\Workspace\ton_messenger_nft_wallet

# Initialize Git repository
git init

# Configure Git (first time only)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Complete Tchat Messenger application"

# Check status
git status
```

---

## Useful Git Commands

```powershell
# See repository status
git status

# See commit history
git log

# Create a new branch
git branch feature-name
git checkout feature-name
# Or in one command:
git checkout -b feature-name

# Switch back to main branch
git checkout main

# See changes
git diff

# Stage specific files
git add filename.tsx

# Unstage files
git restore --staged filename.tsx

# Discard changes
git restore filename.tsx
```

---

## What's Already Set Up

Your project already has:
- ✅ `.gitignore` file (excludes node_modules, .env, etc.)
- ✅ All source code files
- ✅ Documentation
- ✅ Configuration files

Ready for Git initialization!

---

## Recommended First Commits

After `git init`, I recommend this commit structure:

```powershell
# Initial project setup
git add .
git commit -m "Initial commit: Project structure and configuration"

# Document the project
git add README.md SETUP.md INSTALL.md
git commit -m "docs: Add comprehensive documentation"

# Add the application
git add app/ components/ lib/ hooks/ types/
git commit -m "feat: Complete Tchat Messenger with TON integration"
```

Or do it all at once:

```powershell
git add .
git commit -m "🎉 Initial commit: Complete Tchat Messenger

- TON Connect 2.0 integration
- Dark mode UI with Apple design guidelines  
- Real-time messaging interface
- NFT wallet viewer
- TON DNS management
- World ID verification
- Temporary email rental
- Comprehensive documentation
- 54 files, 3500+ lines of code"
```

---

## Why Use Git?

Benefits for your project:

1. **Version Control** - Track all changes
2. **Undo Mistakes** - Revert to any previous state
3. **Branching** - Work on features separately
4. **Collaboration** - Share code easily
5. **Backup** - Push to GitHub/GitLab
6. **Deployment** - Connect to Vercel/Netlify

---

## Next Steps After Git Init

1. **Create GitHub Repository**
   - Visit: https://github.com/new
   - Create new repository
   - Don't initialize with README (we have one)

2. **Connect to GitHub**
   ```powershell
   git remote add origin https://github.com/yourusername/tchat-messenger.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Visit: https://vercel.com/
   - Import from GitHub
   - Auto-deploy on every push

---

## .gitignore File

Already configured to ignore:

```
node_modules/
.next/
.env*.local
.vercel/
*.log
.DS_Store
```

Safe to commit everything else!

---

## Common Issues

### "git: command not found"
- Git is not installed or not in PATH
- Restart PowerShell after installation
- Try opening a new terminal window

### Permission Denied
- Run PowerShell as Administrator
- Or use: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Large Files Warning
- Don't commit node_modules (already in .gitignore)
- Don't commit .env files (already in .gitignore)

---

## Quick Reference Card

```powershell
# Initialize
git init

# Stage all changes
git add .

# Commit
git commit -m "message"

# See status
git status

# See history
git log --oneline

# Create branch
git checkout -b feature-name

# Switch branch
git checkout main

# Merge branch
git merge feature-name

# Push to remote
git push origin main
```

---

## Ready to Start!

Once Git is installed:

1. Run `git init` in the project folder
2. Configure your name and email
3. Make your first commit
4. Start version controlling your code!

---

**Download Git**: https://git-scm.com/download/win

After installation, come back here and run `git init`!
