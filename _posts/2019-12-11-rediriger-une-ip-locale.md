---
layout: post
title: Rediriger une ip locale vers un nom de domaine
excerpt : Avec toutes ces machines sur notre reseau local, quel enfer de se souvenir de toutes les ip !
tags : [Linux , Debian]
---

Avec toutes ces machines sur notre reseau local, quel enfer de se souvenir de toutes les ip !
On aimerait bien y acceder facilement avec un nom de domaine cool genre *serveur.local* !

*Disclaimer :  Cette procédure fonctionne sur une machine linux ET une livebox 3*

Dans le cas où l'adresse locale de la machine à convertir est 192.168.0.15

Se connecter en ssh ou en direct à la machine et editer le fichier /etc/host 

`
nano /etc/host
`

et inserer :

```bash

    192.168.0.15    serveur

```

Enregistrer le fichier et redémarer la machine.

Et voilà !! la machine est maintenant disponible à l'adresse serveur.local