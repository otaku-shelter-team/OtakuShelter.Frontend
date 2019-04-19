COPY . /otakushelter/frontend
WORKDIR /otakushelter/frontend
RUN ./gradlew --no-daemon clean build

COPY --from=ktbuild /otakushelter/frontend/production/otaku-shelter.jar /otakushelter/frontend/otaku-shelter.jar
WORKDIR /otakushelter/frontend
CMD ["java","-jar","otaku-shelter.jar"]