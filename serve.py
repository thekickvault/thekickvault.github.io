#!/usr/bin/env python3
"""
Simple script to serve the MkDocs site locally for development.
Run with: python serve.py
"""

import subprocess
import sys
import os

def main():
    print("🚀 Starting The Kick Vault development server...")
    print("📖 MkDocs will serve your site at: http://127.0.0.1:8000")
    print("🔄 Auto-reload is enabled - changes will be reflected immediately")
    print("⏹️  Press Ctrl+C to stop the server")
    print("-" * 50)
    
    try:
        # Check if mkdocs is installed
        subprocess.run([sys.executable, "-m", "mkdocs", "--version"], 
                      check=True, capture_output=True)
    except subprocess.CalledProcessError:
        print("❌ MkDocs not found. Installing dependencies...")
        subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"], 
                      check=True)
    
    # Start the development server
    subprocess.run([sys.executable, "-m", "mkdocs", "serve", "--dev-addr", "127.0.0.1:8000"])

if __name__ == "__main__":
    main()
