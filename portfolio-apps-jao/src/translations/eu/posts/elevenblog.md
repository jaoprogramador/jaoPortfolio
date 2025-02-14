---
date: "2025-04-09T17:00:00.000Z"
title: Git Oinarriak Konfigurazioa eta Oinarrizko Komandoak
tagline: Ikasi Git konfiguratzeko eta bere oinarrizko komandoak menperatzen zure kodea modu eraginkorrean kudeatzeko.
preview: >-
    Git software garapenean gehien erabiltzen den tresnetako bat da bertsio-kontrolerako. Bere konfigurazioa eta oinarrizko komandoak ulertzeak proiektuak modu eraginkor eta lankidetzan kudeatzeko aukera emango dizu.
image: >-
    /images/blogs/steve-johnson-d07E-92ecY8-unsplash.jpg
---
# Zer da Git? 🛠️

## Git bertsio-kontrol banatuko sistema bat da, kodearen aldaketak jarraitzeko, beste garatzaileekin lankidetzan aritzeko eta aldaketen historia mantentzeko aukera ematen duena. Garatzaile ororentzat ezinbesteko tresna da.

## Zergatik erabili Git?

## ✅ Bertsio-kontrola: Fitxategien aldaketak erregistratzeko eta behar izanez gero atzera egiteko aukera ematen du.

## ✅ Lankidetza: Talde-lana errazten du urruneko biltegien bidez, hala nola GitHub, GitLab edo Bitbucket.

## ✅ Segurtasuna: Kodearen bertsio guztiak gordetzen dira, datuen osotasuna bermatuz.

## ✅ Eraginkortasuna: Akatsak minimizatzen ditu aldaketen eta garapen-adarren historia argi mantenduz.

## Instalazioa eta Hasierako Konfigurazioa

## Git erabili aurretik, instalatu eta behar bezala konfiguratu behar da.

## 🔹 Git instalatzea
Git bere webgune ofizialetik deskargatu eta instala dezakezu: git-scm.com

Instalatu ondoren, egiaztatu instalazioa honako komandoarekin:
```jsx
git --version
```

## 🔹 Oinarrizko Konfigurazioa

Git instalatu ondoren, garrantzitsua da zure izena eta helbide elektronikoa konfiguratzea, aldaketak erregistratzeko erabiliko dira.
```jsx
git config --global user.name "Zure Izena"  
git config --global user.email "zureemaila@example.com"
```
Konfigurazioa egiaztatzeko:
```jsx
git config --list
```
## Git-en Oinarrizko Komandoak 🎯

Hona hemen Git-ekin lan egiteko oinarrizko komando batzuk:

## 🔹 Biltegi bat hasieratzea

Proiektu bat Gitekin jarraitzeko:
```jsx
git init
```
Honek uneko karpetan Git biltegi bat sortuko du.

## 🔹 Biltegi bat klonatzea

Urruneko biltegi baten kopia lortu nahi baduzu:
```jsx
git clone BILTEGIAREN_URLA
```
Honek kodea zure ordenagailura deskargatuko du.

## 🔹 Aldaketak gehitu eta baieztatu

Fitxategiak aldatu ondoren, prestaketa-eremura gehitu eta aldaketak baieztatu behar dituzu:
```jsx
git add .
git commit -m "Aldaketaren deskribapen-mezua"
```
## 🔹 Biltegiaren egoera egiaztatu

Zein fitxategi aldatu diren ikusteko:
```jsx
git status
```
## 🔹 Aldaketen historia ikusi

Konpromisoen (commits) historia berrikusi nahi baduzu:
```jsx
git log
```
## 🔹 Aldaketak urruneko biltegira bidali

GitHub edo GitLab bezalako biltegi batekin lanean ari bazara, zure aldaketak igo ditzakezu:
```jsx
git push origin main
```
## 🔹 Urruneko biltegitik aldaketak jaso

Zure kodea urruneko biltegiaren azken aldaketekin eguneratzeko:
```jsx
git pull origin main
```
## 🔹 Adarrak sortu eta aldatu

Git-en adarrek ezaugarri berrietan lan egitea ahalbidetzen dute adar nagusia ukitu gabe:
```jsx
git branch adar-berria
git checkout adar-berria
```
Git 2.23 bertsioaz geroztik, honako hau erabil dezakezu:
```jsx
git switch adar-berria
```
## 🔹 Adarrak bateratu

Adar batean lan egiteari utzi eta adar nagusiarekin bateratu nahi baduzu:
```jsx
git checkout main
git merge adar-berria
```
## Ondorioa 🚀

Git software-proiektuen kudeaketa errazten duen tresna boteretsua da. Bere oinarrizko komandoak menperatzeak modu eraginkor eta seguruan lan egiten lagunduko dizu.

