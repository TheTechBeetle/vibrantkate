# Build a local docker image for hosting the site
docker-build:
    docker build -t vibrant-kate .

# Run the site locally within Docker
docker-start: docker-build
    docker run -p 8080:80 vibrant-kate

# Run a web server, but mount the code directly so you can update and refresh without restarting.
docker-dev:
    docker run -p 8080:80 -v $(pwd)/docs:/usr/share/nginx/html nginx:alpine