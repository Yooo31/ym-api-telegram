FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3999

CMD [ "node", "app.js" ]
