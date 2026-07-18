FROM node:22-slim

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency files first (Docker layer caching)
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install

# Copy and run the OpenNext patch script
COPY scripts scripts/
RUN node scripts/patch-opennext.js

# Copy the rest of the source code
COPY . .

# Default command: build for Cloudflare Workers
CMD ["pnpm", "run", "cf-build"]
