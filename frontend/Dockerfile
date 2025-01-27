FROM node:19.9.0

# Set the working directory
WORKDIR /feapp

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["yarn", "serve"]
