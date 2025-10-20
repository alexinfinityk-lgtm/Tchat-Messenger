# Tchat Messenger Setup Guide

## Prerequisites

### Required Software

1. **Node.js (v18 or higher)**
   - Download from: https://nodejs.org/
   - Recommended: LTS version
   - Installation: Run the installer and follow the prompts
   - Verify installation: `node --version` and `npm --version`

2. **Git (Optional but recommended)**
   - Download from: https://git-scm.com/
   - For version control

## Installation Steps

### Step 1: Install Node.js
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Restart your terminal/PowerShell after installation
5. Verify: `node --version` should show v18.x.x or higher

### Step 2: Install Project Dependencies
```bash
# Navigate to project directory
cd C:\Users\Bend\Workspace\ton_messenger_nft_wallet

# Install dependencies (after project scaffolding)
npm install
```

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env.local`
2. Fill in the required API keys and configuration

### Step 4: Run Development Server
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Project Structure
```
ton_messenger_nft_wallet/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── chat/              # Chat pages
│   ├── wallet/            # Wallet pages
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # UI components
│   ├── chat/             # Chat components
│   ├── wallet/           # Wallet components
│   └── layout/           # Layout components
├── lib/                   # Utilities and helpers
│   ├── ton/              # TON blockchain utilities
│   ├── auth/             # Authentication utilities
│   └── api/              # API clients
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── styles/                # Global styles
```

## Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **TON Integration:** @tonconnect/ui-react
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Real-time:** Socket.io or Firebase

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# TON Network
NEXT_PUBLIC_TON_NETWORK=testnet
NEXT_PUBLIC_MANIFEST_URL=https://your-domain.com/tonconnect-manifest.json

# Authentication
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# World.org (World ID)
NEXT_PUBLIC_WORLD_APP_ID=your-world-app-id
WORLD_API_KEY=your-world-api-key

# Tmarket Email
TMARKET_API_KEY=your-tmarket-api-key
NEXT_PUBLIC_TMARKET_ENDPOINT=https://api.tmarket.com

# Firebase (if using for real-time)
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
```

## Next Steps
After installing Node.js, run the setup script to scaffold the application:
```bash
npm create next-app@latest . --typescript --tailwind --app --no-src-dir
```
