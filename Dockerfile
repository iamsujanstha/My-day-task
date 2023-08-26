# Stage 1
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /my-todo
COPY package.json package-lock.json ./
RUN  npm install --production

# Stage 2
FROM node:16-alpine AS builder
WORKDIR /src
COPY --from=deps /my-todo/node_modules ./node_modules
COPY . .
RUN NODE_ENV=production npm run build

# Stage 3
FROM node:16-alpine AS runner
WORKDIR /src
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /my-todo/node_modules ./node_modules
COPY --from=builder /my-todo/package.json ./package.json
USER 1001
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]