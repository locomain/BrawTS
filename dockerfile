FROM node:8

WORKDIR /

COPY . /

EXPOSE 8080

CMD ["npm", "start"]