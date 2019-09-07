# Image de base
FROM debian:jessie

# Installation de curl avec apt-get
RUN apt-get update \
&& apt-get install -y curl \
&& rm -rf /var/lib/apt/lists/*

# Installation de Node.js à partir du site officiel
RUN curl -LO "https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-armv7l.tar.gz" \
&& tar -xzf node-v10.16.0-linux-armv7l.tar.gz -C /usr/local --strip-components=1 \
&& rm node-v10.16.0-linux-armv7l.tar.gz 

# Ajout du fichier de dépendances package.json
ADD package.json /app/

# Changement du repertoire courant
WORKDIR /app

# Installation des dépendances
RUN npm install

# Ajout des sources
ADD . /app/

# On expose le port 3000
EXPOSE 3000

# On partage un dossier de log
VOLUME /app/log

# On lance le serveur quand on démarre le conteneur
CMD node server.js
