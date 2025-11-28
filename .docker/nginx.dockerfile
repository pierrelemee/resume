FROM nginx:alpine

# Update & install core packages
RUN apk update
RUN apk add bash git wget vim curl procps linux-headers

# Tool to debug php-fpm connection
# ex SCRIPT_NAME=/api/grid/1 SCRIPT_FILENAME=/app/public/index.php REQUEST_METHOD=GET DOCUMENT_ROOT=/app/public cgi-fcgi -bind -connect api:9000
RUN apk add fcgi-dev

# Files
RUN echo "alias ll='ls -l'" > /root/.bashrc
RUN echo "alias la='ls -la'" >> /root/.bashrc
RUN echo "PS1='\[\033[01;35m\]\h \[\033[01;34m\]\w $\[\033[00m\] '" >> /root/.bashrc
RUN echo "export LANG='fr_FR.UTF8'" >> /root/.bashrc

ADD nginx/ssl/* /etc/nginx/certs/
ADD nginx/templates/*.template /etc/nginx/templates/

WORKDIR /app
