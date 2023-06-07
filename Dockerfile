FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 80

CMD serve -s build -l 80