FROM node:19.9.0

# Set the working directory
WORKDIR /beapp

# Copy package.json and install dependencies
COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "serve"]