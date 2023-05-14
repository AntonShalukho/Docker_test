FROM node

WORKDIR ./src

COPY ./package.json .

RUN npm install

COPY . .

ENV PORT 4200

EXPOSE $PORT

VOLUME ["./src/data"]

CMD ["node", "./src/index.js"]