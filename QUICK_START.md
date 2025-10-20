# Quick Start Guide

Get Tchat Messenger running in 5 minutes!

## Prerequisites Check

Before starting, verify:
- [ ] Windows 10/11 (or macOS/Linux)
- [ ] 4GB+ RAM available
- [ ] 500MB free disk space
- [ ] Active internet connection

## Installation Steps

### 1️⃣ Install Node.js (if not installed)

```powershell
# Check if Node.js is already installed
node --version

# If you see "command not found", install Node.js:
# 1. Visit https://nodejs.org/
# 2. Download LTS version
# 3. Run installer
# 4. Restart PowerShell
```

### 2️⃣ Install Dependencies

```powershell
# Navigate to project
cd C:\Users\Bend\Workspace\ton_messenger_nft_wallet

# Install packages (takes 2-3 minutes)
npm install
```

### 3️⃣ Configure Environment

```powershell
# Copy environment template
Copy-Item .env.example .env.local

# Edit .env.local and set:
# - NEXTAUTH_SECRET (generate with command below)
```

Generate secret:
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4️⃣ Start the App

```powershell
# Option 1: Use startup script
.\start.ps1

# Option 2: Manual start
npm run dev
```

### 5️⃣ Open Browser

Navigate to: **http://localhost:3000**

## First Time Setup

1. **Connect Wallet**
   - Click "Connect Wallet" button
   - Open Tonkeeper/Tonhub app
   - Scan QR code
   - Approve connection

2. **Explore Features**
   - 💬 Chat - Try the messaging interface
   - 👛 Wallet - View your balance
   - 🖼️ NFTs - See your collection
   - 🌐 DNS - Search TON domains
   - ✓ Verify - World ID verification
   - 📧 Email - Rent temporary emails

## Common Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear cache and reinstall
Remove-Item -Recurse node_modules
npm install
```

## Troubleshooting

### Port 3000 in use?
```powershell
$env:PORT=3001; npm run dev
```

### Installation fails?
```powershell
npm cache clean --force
npm install
```

### Page won't load?
- Check terminal for errors
- Verify Node.js version: `node --version` (should be 18+)
- Try restarting the server

## Project Structure

```
ton_messenger_nft_wallet/
├── app/              # Pages and routes
├── components/       # React components
├── lib/              # Utilities
├── hooks/            # Custom hooks
├── types/            # TypeScript types
└── public/           # Static files
```

## Key Features

| Feature | Description | Page |
|---------|-------------|------|
| 💬 Chat | Real-time messaging | /chat |
| 👛 Wallet | TON balance & send | /wallet |
| 🖼️ NFTs | Collection viewer | /nft |
| 🌐 DNS | Domain management | /dns |
| ✓ Verify | World ID | /verify |
| 📧 Email | Temp email rental | /email |
| ⚙️ Settings | Preferences | /settings |

## Optional Configuration

For full functionality, add to `.env.local`:

```env
# World ID (for verification)
NEXT_PUBLIC_WORLD_APP_ID=your_app_id

# TON API (for NFT data)
NEXT_PUBLIC_TON_API_KEY=your_api_key

# Tmarket (for email rental)
TMARKET_API_KEY=your_api_key
```

## Need Help?

- 📖 [Full Documentation](./README.md)
- 🔧 [Installation Guide](./INSTALL.md)
- 📊 [Project Status](./PROJECT_STATUS.md)
- 🛠️ [Setup Guide](./SETUP.md)

## Next Steps

1. ✅ Get the app running
2. 🔗 Connect your TON wallet
3. 🎨 Customize the UI
4. 🔌 Connect backend services
5. 🚀 Deploy to production

---

**Ready to build something amazing!** 🚀

For questions: Check the documentation or open an issue on GitHub.
