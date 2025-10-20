# Tchat Messenger Startup Script
# This script starts the development server

Write-Host "Starting Tchat Messenger..." -ForegroundColor Cyan

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Dependencies not found. Installing..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
}

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "Warning: .env.local not found. Creating from .env.example..." -ForegroundColor Yellow
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env.local"
        Write-Host "Please configure .env.local with your API keys" -ForegroundColor Yellow
    }
}

# Start the development server
Write-Host "Starting development server on http://localhost:3000" -ForegroundColor Green
npm run dev
