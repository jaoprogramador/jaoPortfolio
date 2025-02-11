---
date: "2025-04-09T17:00:00.000Z"
title: Docker eta Edukieroen Sarrera
tagline: Deskubritu zer diren edukieroak, zergatik behar ditugun eta nola ezarri Linuxen.
preview: >-
    Edukieroek aplikazioak desplegatzean izan dugun eraldaketa ekarri dute, isolamendua eta portabilitatea eskainiz. Artikulu honetan, beren jatorria, abantailak eta Linuxen inplementazio praktikoa aztertzen ditugu.
image: >-
    https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---

# Zer dira Edukieroak?
Edukieroak ingurune arin eta eramangarriak dira, aplikazioak eta beren mendekotasunak kapsulatzen dituztenak, aplikazioek ingurune desberdinetan modu koherentean exekutatzen direla bermatuz.

## Zergatik asmatu genituen edukieroak?
Edukieroak baino lehen, aplikazioak zerbitzari fisikoetan edo makina birtualetan desplegatzen ziren, eta horrek konpabilitate arazoak, baliabide gehiegikeriak eta konplexutasun handiagoa ekartzen zituen. Edukieroek arazo hauek konpontzen dituzte, ingurune isolatu eta arinak eskainiz.

## Zergatik behar ditugu edukieroak?
Portabilitatea: Ingurune edo azpiegitura edozein dela ere exekutatzen dira.

Eficientzia: Makina birtualek baino baliabide gutxiago erabiltzen dute.

Eskalagarritasuna: Erraz kudeatzen dira aplikazioen hainbat instantzietan.

Azkartasuna: Segundo batzuetan abiarazten dira eta desplegu jarraituak errazten dituzte.

## Docker da edukiero bakarra?
Ez, Docker da ezagunena, baina alternatibak ere badaude, hala nola:

Podman: Docker-i antzekoa, baina daemonik gabe.

LXC (Linux Containers): Makina birtualekin gehiago antzekoa den edukieroak eskaintzen ditu.

CRI-O: Kubernetes-erako optimizatua.

rkt: Deskontsultatua, baina CoreOS-ek garatutako aukera bat izan zen.

## Edukieroen Abantailak eta Desabantailak
Abantailak:

Isolamendua eta segurtasuna.
Mikrozerbitzuen inplementazioa errazten dute.
Baliabideen erabilera eraginkorra.
Ingurune desberdinetan konpabilitatea.
Desabantailak:

Kudeaketan konplexitate handiagoa.
Segurtasun arazoak sor daitezke, ez badira behar bezala konfiguratzen.
Ez dituzten sistemek eduki dezakete natively edukieroak.
Zer da OCI eta nola aldatzen ari da edukieroak?
OCI (Open Container Initiative) estandar irekia da, edukieroek nola funtzionatu behar duten definitzen duena, plataforma eta tresna desberdinen artean konpabilitatea bermatzeko. OCI-ek ekosistema irekiagoa bultzatzen du, edukieroen teknologiak artean interoperabilitatea ahalbidetuz.

## Linuxen edukieroen inplementazioaren adibide sinplea
Docker erabiliz Linuxen edukiero sinple bat exekutatu dezakezu:

docker run -it ubuntu bash

Honek Ubuntu irudi bat deskargatzen du eta edukiero interaktibo batean exekutatzen du.

## Nola sortzen dira edukieroak Linuxen?
Linuxen, edukieroak teknologia bezala namespaces eta cgroups erabiliz sortzen dira:

Namespace berri bat sortzea:

unshare --mount --uts --ipc --net --pid --fork --user --map-root-user bash

Prozesu isolatu bat exekutatzea:

chroot /newroot /bin/bash

Komando hauek edukiero baten antzeko ingurune bat sortzen dute Docker-ik gabe.

## Ondorioa
Edukieroek aplikazioak garatzen, desplegatzen eta eskalatzerakoan izan dugun eraldaketa ekarri dute. Docker bezalako tresnak eta OCI bezalako estandar irekiekin, edukieroen etorkizunak aurrera jarraitzen du.



