FROM node:latest

WORKDIR /coffee_project

EXPOSE 3000

COPY ./package.json /coffee_project/package.json

RUN npm install

COPY ./ /coffee_project/

CMD npm run start
