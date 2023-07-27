FROM node:latest
WORKDIR /app
COPY package*.json ./

RUN npm install
RUN npm install -g ts-node
RUN npm i -g @types/node

COPY . .
EXPOSE 3000
# RUN npm run seed
CMD ["bash", "-c", "npx prisma generate && npm run seed && npm run dev"]