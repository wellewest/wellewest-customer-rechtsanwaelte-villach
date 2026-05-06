# Static Astro site served via Caddy
FROM node:22.13-bookworm-slim AS builder
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm build

FROM caddy:2.8-alpine AS runner
WORKDIR /srv
COPY --from=builder /app/dist /srv

# Caddyfile mit Basic Auth
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
