# Image de base
FROM postgres
ENV POSTGRES_USER docker 
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB docker

# Init db
COPY init.sql /docker-entrypoint-initdb.d/
