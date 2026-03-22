FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your site into nginx's served directory
COPY docs/ /usr/share/nginx/html/

# Expose port 80 (optional, for clarity)
EXPOSE 80

# Nginx runs automatically via the base image's CMD