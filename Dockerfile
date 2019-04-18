FROM openjdk:11.0.3-jdk-stretch as ktbuild
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend
RUN sudo ./gradlew --no-daemon clean build

FROM openjdk:11.0.3-jre-stretch as ktrun
COPY --from=ktbuild /otakushelter/frontend/production/otaku-shelter.jar /otakushelter/frontend/otaku-shelter.jar
WORKDIR /otakushelter/frontend
CMD ["java","-jar","otaku-shelter.jar"]