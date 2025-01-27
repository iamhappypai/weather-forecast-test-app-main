FROM node:19.9.0

WORKDIR /beapp

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "serve"]