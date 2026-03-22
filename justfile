docker-build:
    docker build -t vibrant-kate .

docker-start: docker-build
    docker run -p 8080:80 vibrant-kate