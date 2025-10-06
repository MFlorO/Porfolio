# 1️⃣ Etapa de compilación
FROM node:20-alpine AS builder

WORKDIR /app

# Copiamos package.json primero para aprovechar la cache de Docker
COPY package*.json ./

# Instalamos dependencias (incluye devDependencies para poder compilar)
RUN npm install

# Copiamos el resto del código
COPY . .

# Generamos el Prisma Client
RUN npx prisma generate

# Compilamos TypeScript
RUN npm run build


# 2️⃣ Etapa final (solo lo necesario para producción)
FROM node:20-alpine AS production

WORKDIR /app

# Copiamos solo package.json y lock para instalar dependencias de prod
COPY package*.json ./

# Instalamos solo dependencias de producción
RUN npm install --omit=dev

# Copiamos el build generado y el prisma client de la etapa builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

# Variables de entorno
ENV NODE_ENV=production
ENV PORT=3001
EXPOSE $PORT

# Iniciar la app
CMD ["node", "dist/app.js"]
