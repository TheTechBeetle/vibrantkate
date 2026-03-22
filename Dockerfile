# Lightweight webserver
FROM nginx:alpine

# Copies the static resources for hosting
COPY docs/ /usr/share/nginx/html/

# Documents the port that is opened within the container
EXPOSE 80
