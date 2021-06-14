FROM node:14-alpine

ARG PORT=8080
ENV PORT=$PORT
ENV NODE_ENV=production

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
