FROM node:10 as build
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend/src/OtakuShelter.Manga.Frontend
RUN npm install
ENTRYPOINT [ "npm", "run-script", "dev" ] 