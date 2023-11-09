FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} config-server-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/config-server-0.0.1-SNAPSHOT.jar"]