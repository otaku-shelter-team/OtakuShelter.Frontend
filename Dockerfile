FROM gradle:5.4.0-jdk8 as ktbuild
COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend
RUN ./gradlew --no-daemon clean build --stacktrace --debug --scan

FROM gradle:5.4.0-jre8 as ktrun
COPY --from=ktbuild /otakushelter/frontend/production/otaku-shelter.jar /otakushelter/frontend/otaku-shelter.jar
WORKDIR /otakushelter/frontend
CMD ["java","-jar","otaku-shelter.jar"]