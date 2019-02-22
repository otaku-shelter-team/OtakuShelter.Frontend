FROM node:11.10.0-alpine as build
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend/src/OtakuShelter.Manga.Frontend
RUN npm install
ENTRYPOINT [ "npm", "run-script", "dev" ] 