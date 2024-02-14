FROM alpine:latest

WORKDIR /app

RUN apk --no-cache add openjdk11-jre-headless wget

RUN wget -qO- https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz | tar xvz && \
    rm -rf LICENSE.txt README.txt third_party_licenses

EXPOSE 8000

CMD ["java", "-Djava.library.path=./DynamoDBLocal_lib", "-jar", "DynamoDBLocal.jar", "-sharedDb"]
