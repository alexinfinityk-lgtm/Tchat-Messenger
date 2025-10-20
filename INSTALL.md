# Installation Guide for Tchat Messenger

This guide will help you install and run Tchat Messenger on your Windows system.

## Step 1: Install Node.js

Node.js is required to run this application.

### Download and Install

1. Visit https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended)
3. Run the installer (`.msi` file)
4. Follow the installation wizard:
   - Accept the license agreement
   - Keep the default installation path
   - **Important**: Make sure "Add to PATH" is checked
   - Click "Install"

### Verify Installation

Open PowerShell or Command Prompt and run:

```powershell
node --version
```

You should see something like `v20.x.x`

```powershell
npm --version
```

You should see something like `10.x.x`

If you see these version numbers, Node.js is installed correctly!

## Step 2: Install Project Dependencies

Navigate to the project folder in PowerShell:

```powershell
cd C:\Users\Bend\Workspace\ton_messenger_nft_wallet
```

Install all required packages:

```powershell
npm install
```

This will take a few minutes. You'll see a progress bar as packages are downloaded.

## Step 3: Configure Environment Variables

1. Copy the example environment file:

```powershell
Copy-Item .env.example .env.local
```

2. Open `.env.local` in a text editor (Notepad, VS Code, etc.)

3. Configure the basic settings (optional API keys can be added later):

```env
# Required
NEXT_PUBLIC_TON_NETWORK=testnet
NEXT_PUBLIC_MANIFEST_URL=http://localhost:3000/tonconnect-manifest.json
NEXTAUTH_SECRET=generate-a-random-secret-here
NEXTAUTH_URL=http://localhost:3000

# Optional - Add these if you have API keys
NEXT_PUBLIC_WORLD_APP_ID=your-app-id-here
NEXT_PUBLIC_TON_API_KEY=your-ton-api-key-here
```

To generate a secure `NEXTAUTH_SECRET`, run in PowerShell:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Copy the output and paste it as your `NEXTAUTH_SECRET`.

## Step 4: Start the Application

### Option A: Using the Startup Script (Recommended)

Run the PowerShell startup script:

```powershell
.\start.ps1
```

### Option B: Manual Start

```powershell
npm run dev
```

## Step 5: Access the Application

Once the server starts, you'll see:

```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in X.Xs
```

Open your web browser and navigate to:

```
http://localhost:3000
```

## Troubleshooting

### Problem: "node is not recognized"

**Solution**: 
- Node.js is not installed or not in PATH
- Restart PowerShell after installing Node.js
- Reinstall Node.js and ensure "Add to PATH" is checked

### Problem: "npm install" fails

**Solution**:
```powershell
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Problem: Port 3000 is already in use

**Solution**:
```powershell
# Use a different port
$env:PORT=3001; npm run dev
```

Or find and kill the process using port 3000:
```powershell
# Find the process
netstat -ano | findstr :3000

# Kill it (replace PID with the actual process ID)
taskkill /PID <PID> /F
```

### Problem: Module not found errors

**Solution**:
```powershell
# Delete node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

### Problem: TON Connect doesn't work

**Solution**:
- Make sure you have a TON wallet (Tonkeeper or Tonhub)
- Check that `tonconnect-manifest.json` is accessible
- Verify your wallet is on the same network (testnet/mainnet)

## Next Steps

After installation:

1. **Connect Your Wallet**
   - Click the "Connect Wallet" button in the header
   - Scan the QR code with your TON wallet app
   - Approve the connection

2. **Explore Features**
   - Navigate to different sections using the sidebar
   - Try the chat interface
   - View your NFT collection
   - Check out TON DNS

3. **Configure Optional Features**
   - Set up World ID for verification
   - Configure Tmarket for email rental
   - Add TON API key for enhanced NFT display

## Production Deployment

For production deployment, see the [README.md](./README.md) file for instructions on:
- Building for production
- Deploying to Vercel
- Configuring production environment variables
- Security best practices

## Getting Help

If you encounter issues:

1. Check the [README.md](./README.md) troubleshooting section
2. Review the console logs in your browser (F12)
3. Check the terminal output for errors
4. Verify all environment variables are set correctly

## System Requirements

- **OS**: Windows 10/11 (or macOS/Linux)
- **RAM**: 4GB minimum (8GB recommended)
- **Disk**: 500MB free space
- **Browser**: Chrome, Firefox, Edge, or Safari (latest version)
- **Internet**: Active internet connection

## Optional Tools

For a better development experience:

- **VS Code**: https://code.visualstudio.com/
- **Git**: https://git-scm.com/ (for version control)
- **Tonkeeper Wallet**: https://tonkeeper.com/

---

**Congratulations!** 🎉 You're now ready to use Tchat Messenger!
