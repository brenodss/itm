FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["bash", "-c", "npx prisma generate && npx prisma migrate deploy --schema=./schema.prisma && npm run dev"]