FROM node:20-alpine

# Update & install core packages
RUN apk update
RUN apk upgrade

# Common packages
RUN apk add bash git wget vim curl procps linux-headers

# Aliases & env variables in .bashrc
RUN echo "alias ll='ls -l'" > /root/.bashrc
RUN echo "alias la='ls -la'" >> /root/.bashrc
RUN echo "PS1='\[\033[01;35m\]\h \[\033[01;34m\]\w $\[\033[00m\] '" >> /root/.bashrc
RUN echo "export LANG='fr_FR.UTF8'" >> /root/.bashrc

WORKDIR /app
