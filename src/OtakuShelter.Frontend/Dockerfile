FROM node:11.10.0-alpine as build
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend/src/OtakuShelter.Frontend
RUN npm install
ENTRYPOINT [ "npm", "run", "build" ] 

FROM nginx:1.15.10-alpine as runtime
RUN ls /otakushelter/frontend/src/OtakuShelter.Frontend
COPY --from=build /otakushelter/frontend/src/OtakuShelter.Frontend/build /usr/share/nginx/html