FROM mysql:5.7

# needed for intialization
ENV MYSQL_ROOT_PASSWORD=root

COPY initdb.sql /docker-entrypoint-initdb.d/
