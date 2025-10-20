# Tchat Messenger 💬

A modern, decentralized messaging platform built on TON blockchain with integrated NFT wallet, World ID verification, and temporary email rental.

## 🌟 Features

- **🔐 TON Connect 2.0** - Seamless wallet connection and authentication
- **💬 Real-time Messaging** - Secure peer-to-peer communication
- **👛 NFT Wallet** - View and manage your TON NFT collection
- **🌐 TON DNS** - Human-readable blockchain addresses
- **✓ World ID Verification** - Proof of personhood for enhanced security
- **📧 Temporary Email** - Disposable email addresses via Tmarket
- **🌙 Dark Mode** - Beautiful dark UI following Apple design guidelines

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**
- TON wallet (Tonkeeper, Tonhub, etc.)

### Installation

1. **Install Node.js** (if not already installed)
   ```bash
   # Download from https://nodejs.org/
   # After installation, verify:
   node --version
   npm --version
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local with your API keys
   ```

4. **Start Development Server**
   ```bash
   # Using the startup script (recommended)
   .\start.ps1
   
   # Or manually
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🔧 Configuration

### Required Environment Variables

Create a `.env.local` file with the following:

```env
# TON Network
NEXT_PUBLIC_TON_NETWORK=testnet
NEXT_PUBLIC_MANIFEST_URL=http://localhost:3000/tonconnect-manifest.json

# NextAuth
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# World.org (Optional)
NEXT_PUBLIC_WORLD_APP_ID=app_staging_xxx
WORLD_API_KEY=your-world-api-key
NEXT_PUBLIC_WORLD_ACTION=verify_human

# Tmarket Email (Optional)
TMARKET_API_KEY=your-tmarket-api-key

# TON API (Optional, for NFTs)
NEXT_PUBLIC_TON_API_KEY=your-ton-api-key
```

### Obtaining API Keys

1. **World ID (World.org)**
   - Visit https://developer.worldcoin.org/
   - Create an app to get your App ID
   - Use for human verification feature

2. **TON API**
   - Visit https://tonconsole.com/
   - Sign up for API access
   - Use for NFT and transaction data

3. **Tmarket**
   - Contact Tmarket for API access
   - Configure temporary email rental

## 📁 Project Structure

```
ton_messenger_nft_wallet/
├── app/                    # Next.js 14 App Router
│   ├── chat/              # Messaging interface
│   ├── wallet/            # Wallet management
│   ├── nft/               # NFT collection viewer
│   ├── dns/               # TON DNS management
│   ├── verify/            # World ID verification
│   ├── email/             # Temporary email rental
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Layout components (Sidebar, Header)
│   ├── chat/             # Chat components
│   ├── wallet/           # Wallet components
│   ├── nft/              # NFT components
│   ├── ui/               # Reusable UI components
│   └── providers/        # Context providers
├── lib/                   # Utilities and helpers
│   ├── ton/              # TON blockchain utilities
│   └── api/              # API clients
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🎨 UI/UX Design

The application follows **Apple's Human Interface Guidelines** for dark mode:

- **Color Scheme**: Deep blacks with vibrant accent colors
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent padding and margins
- **Interactions**: Smooth transitions and hover states
- **Accessibility**: High contrast ratios and readable text

### Color Palette

- **Background**: `#000000` (Pure black)
- **Surface**: `#1C1C1E` (Elevated black)
- **TON Blue**: `#0088CC`
- **Accent Colors**: Green, Orange, Red, Purple

## 🔗 Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Blockchain**: TON Connect 2.0
- **Authentication**: NextAuth.js
- **Verification**: World ID (Worldcoin)
- **State Management**: React Hooks + Zustand (optional)

## 📱 Features Overview

### 1. Messaging
- Real-time peer-to-peer chat
- Message history
- User presence indicators
- Encrypted communications

### 2. Wallet
- View TON balance
- Send transactions
- Transaction history
- Address management

### 3. NFT Collection
- Browse your NFTs
- View NFT details
- Collection statistics
- NFT metadata display

### 4. TON DNS
- Search and register domains
- Domain management
- Resolve addresses to names
- Transfer domains

### 5. World ID Verification
- Proof of personhood
- Enhanced security
- Verified badge
- Bot prevention

### 6. Temporary Email
- Rent disposable emails
- Receive messages
- Auto-expiring addresses
- Privacy protection

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Adding New Features

1. Create component in `components/`
2. Add page in `app/` directory
3. Define types in `types/index.ts`
4. Add utilities in `lib/`
5. Create custom hooks in `hooks/`

## 🔒 Security Best Practices

- Never commit `.env.local` or API keys
- Use environment variables for sensitive data
- Validate all user inputs
- Implement proper error handling
- Use HTTPS in production
- Regular security audits

## 🚢 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables for Production

Set all required environment variables in your hosting platform:
- Update `NEXT_PUBLIC_MANIFEST_URL` to your production domain
- Set `NEXTAUTH_URL` to production URL
- Configure all API keys securely

## 📚 Resources

- [TON Documentation](https://docs.ton.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [Next.js Docs](https://nextjs.org/docs)
- [World ID Docs](https://docs.world.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Troubleshooting

### Common Issues

**Node.js not found**
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

**Dependencies fail to install**
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

**TON Connect not working**
- Verify `tonconnect-manifest.json` is accessible
- Check wallet compatibility
- Ensure correct network (mainnet/testnet)

**World ID verification fails**
- Confirm App ID is correct
- Check World App is installed on mobile device
- Verify action name matches configuration

## 💡 Tips

- Use testnet for development
- Test with multiple wallets
- Monitor console for errors
- Check network requests in DevTools
- Keep dependencies updated

## 📞 Support

For questions and support:
- Open an issue on GitHub
- Check documentation at https://docs.ton.org/
- Join TON Community channels

---

Built with ❤️ using TON blockchain technology
