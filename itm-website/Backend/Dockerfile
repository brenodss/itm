FROM node:latest
WORKDIR /app
COPY package*.json ./

RUN npm i -g nodemon
RUN npm i -g ts-node
RUN npm i -g @types/node
RUN npm i

COPY . .
EXPOSE 3000

CMD ["bash", "-c", "npx prisma generate && npx prisma migrate deploy && npm run seed"]