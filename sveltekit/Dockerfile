FROM node:20

RUN apt update && apt-get install -y bash

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run build && node --env-file=.env.production build"]
