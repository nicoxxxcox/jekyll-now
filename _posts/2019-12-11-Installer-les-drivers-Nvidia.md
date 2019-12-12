---
layout: post
title: Installer ou mettre à jours les drivers Nvidia sur Hackintosh
excerpt : un petit script bien sympatique qui nous facilite la vie lorsqu'il s'agit d'installer ou de mettre à jours les drivers Nvidia sur son hackintosh.
---

Voici un petit script bien sympatique qui nous facilite la vie lorsqu'il s'agit d'installer ou de mettre à jours les drivers Nvidia sur son hackintosh.

Sachant que Nvidia à [arrété le support de macOS à partir de Mojave](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#title-new-features), et oui ; cette procédure est valable pour macOS High Sierra (10.12) et inférieur.

C'est extra simple :
1. Ouvrir le terminal
2. Copier `bash <(curl -s https://raw.githubusercontent.com/Benjamin-Dobell/nvidia-update/master/nvidia-update.sh)`
3. Coller dans le terminal et faire entrer
4. Et voilà !!

[La source du script](https://github.com/Benjamin-Dobell/nvidia-update)