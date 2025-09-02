# Multi-stage Dockerfile for Next.js + pnpm + Prisma

# Base image
FROM node:20-alpine AS base
LABEL maintainer="Superkid <honguyentailoi05@gmail.com>"
WORKDIR /usr/src/app
ENV NEXT_TELEMETRY_DISABLED=1
RUN corepack enable

# -------------------------------
# Stage 1: Install dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN corepack prepare pnpm@latest --activate \
  && pnpm install --frozen-lockfile

# -------------------------------
# Stage 2: Build app
FROM base AS builder
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY --from=deps /usr/src/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY . .

# Bỏ qua query DB khi build
ENV SKIP_PRERENDER=1

# Build Next.js + Prisma
RUN corepack prepare pnpm@latest --activate \
  && pnpm build \
  && pnpm prisma generate || true

# -------------------------------
# Stage 3: Runner (final)
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy only runtime files
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /usr/src/app/prisma ./prisma

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

EXPOSE 3000
CMD ["pnpm", "start"]
