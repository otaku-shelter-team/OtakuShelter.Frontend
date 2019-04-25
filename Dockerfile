FROM gradle:5.4.0-jdk11 as ktbuild
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend
USER root
RUN gradle --no-daemon clean build

FROM openjdk:11
VOLUME /tmp
COPY --from=ktbuild /otakushelter/frontend/production/otaku-shelter.jar /otakushelter/frontend/otaku-shelter.jar
WORKDIR /otakushelter/frontend
CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","otaku-shelter.jar","--server.port=4004"]