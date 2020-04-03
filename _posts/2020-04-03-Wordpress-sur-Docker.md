---
layout: post
title: Un environnement de developpement complet wordpress sur Docker
excerpt : Un environnement de developpement complet wordpress sur Docker
tags : [Docker,Wordpress]
---

Voici un Docker-compose simple et bien sympatique pour lancer une instance de Wordpress avec le MySql qui va bien et son PhpMyAdmin aux petits oignons

`
version: '3'

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
    ports:
      - '8080:80'
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
      - '8000:80'
    restart: always
    volumes: ['./:/var/www/html']
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

`

Pour lancer les containers :

`
docker-compose up -d
`

Pour les eteindres :

`
docker-compose down
`

Bien sur il vous faudra avoir Docker installé et lancé sur votre machine 