FROM node:23-alpine3.20 AS builder

WORKDIR /app

# Copy package.json and install dependencies separately for better caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:23-alpine3.20 AS runner
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app/dist ./dist
COPY package.json package-lock.json ./
RUN npm install --omit=dev  # Only install production dependencies

# Set the environment and expose the port
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/main"]
