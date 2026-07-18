# Cloudflare Deploy Commands (Docker-based)

This project uses Docker to build and deploy to Cloudflare Workers, avoiding known compatibility issues with OpenNext and Wrangler on Windows.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- A Cloudflare API token with `Workers Scripts: Edit` permission

## Setup

### 1. Cloudflare API Token

Already set in `.env` as `CLOUDFLARE_API_TOKEN`. Docker Compose picks it up automatically.

To create or update the token:
1. Go to [Cloudflare Dashboard → API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token** → Use the **Edit Cloudflare Workers** template
3. Select your account and zone, then create the token
4. Update `CLOUDFLARE_API_TOKEN` in `.env` with the new value

### 2. Set SMTP Secrets

These must be set as Cloudflare Worker secrets (not in wrangler.toml).

**Via CLI (one-time):**
```bash
docker compose run --rm cf-build pnpm exec wrangler secret put SMTP_USER
# When prompted, enter: deepintaj@gmail.com

docker compose run --rm cf-build pnpm exec wrangler secret put SMTP_PASSWORD
# When prompted, enter: bswu jtzq wclo wlxa
```

**Via Cloudflare Dashboard (UI):**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **deepintaj**
2. Click **Settings** tab → scroll to **Variables and Secrets**
3. Under **Secrets**, click **Add secret** and add each one:
   - `SMTP_USER` → `deepintaj@gmail.com`
   - `SMTP_PASSWORD` → `bswu jtzq wclo wlxa`
4. Click **Save and deploy**
5. Redeploy the worker for changes to take effect

### 3. Verify Secrets Are Set

**Via CLI:**
```bash
docker compose run --rm cf-build pnpm exec wrangler secret list
```
Shows all secret names (values are hidden).

**Via Cloudflare Dashboard:**
1. Go to **Workers & Pages** → **deepintaj** → **Settings** → **Variables and Secrets**
2. Under **Secrets**, you'll see `SMTP_USER` and `SMTP_PASSWORD` listed

## Build

```bash
docker compose run --rm cf-build
```

## Deploy

```bash
docker compose run --rm cf-deploy
```

The `CLOUDFLARE_API_TOKEN` is loaded from `.env` automatically.

## Quick Reference

| Action | Command |
|--------|---------|
| Build only | `docker compose run --rm cf-build` |
| Build + deploy | `docker compose run --rm cf-deploy` |
| Set SMTP secret | `docker compose run --rm cf-build pnpm exec wrangler secret put <KEY>` |
| List secrets | `docker compose run --rm cf-build pnpm exec wrangler secret list` |
| View logs | `docker compose run --rm cf-build pnpm exec wrangler tail` |
| Rebuild Docker image (after dep changes) | `docker compose build --no-cache cf-deploy` |
