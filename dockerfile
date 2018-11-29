FROM node:8

WORKDIR /

COPY . /

EXPOSE 8080

RUN npm install
RUN npm run-script compile

CMD ["npm", "start"]