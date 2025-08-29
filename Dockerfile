# Multi-stage Dockerfile for a Next.js app using pnpm and Prisma
# Stage base (initial)
FROM node:20-alpine AS base
LABEL maintainer="Superkid <honguyentailoi05@gmail.com>"
WORKDIR /usr/src/app
ENV NEXT_TELEMETRY_DISABLED=1

# Stage dependencies to copy and install deps the best performance
FROM base AS deps
# Activate corepack to make pnpm available (corepack to manage node package)
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# Stage builder
FROM base AS builder
# Copy application code node modules from deps to container in builder
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY --from=deps /usr/src/app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY . .
# Ensure pnpm is available in this stage and build the Next.js app
RUN corepack enable && corepack prepare pnpm@latest --activate
# Skip DB calls at build-time (page guard checks this env var)
# Set this so pages that query the DB won't run during Docker image build.
ENV SKIP_PRERENDER=1
RUN pnpm build
# Generate Prisma client if schema exists; don't fail the build if Prisma isn't configured yet
RUN pnpm prisma generate || true

# Stage runner (final)
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
# Create variable environment production
ENV NODE_ENV=production
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
EXPOSE 3000
CMD ["pnpm", "start"]