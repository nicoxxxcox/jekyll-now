---
layout: post
title: Un environnement de developpement complet wordpress sur Docker
excerpt: Un environnement de developpement complet wordpress sur Docker
tags: [Docker, Wordpress]
---

Voici un Docker-compose simple et bien sympatique pour lancer une instance de Wordpress avec le MySql qui va bien et son PhpMyAdmin aux petits oignons.

Pour que nos containers se lancent dans notre dossier de travail il faut y créer le fichier docker-compose.yaml :

```yaml
version: "3"

services:
  # Database
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    networks:
      - wpsite
  # phpmyadmin
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    volumes:
      - ./uploads.ini:/usr/local/etc/php/conf.d/php-phpmyadmin.ini
    ports:
      - "8080:80"
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: password
    networks:
      - wpsite
  # Wordpress
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    volumes:
      - ./:/var/www/html
      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini

    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    networks:
      - wpsite
networks:
  wpsite:
volumes:
  db_data:
```

Puis créer le fichier upload.ini (augmente la taille max d'upload) :

```ini
file_uploads = On
memory_limit = 64M
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 600
```

Pour lancer les containers :

`docker-compose up -d`

Pour les eteindre :

`docker-compose down`

Bien sur il vous faudra avoir Docker installé et lancé sur votre machine
