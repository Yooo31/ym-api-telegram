FROM node:20.3

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["node", "app.js"]
