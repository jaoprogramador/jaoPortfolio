
---

### **Euskera (EU)**  

```yaml
---
date: "2025-01-09T17:00:00.000Z"
title: AWS-en Sarrera
tagline: Ezagutu hodei-konputazioaren indarra Amazon Web Services-ekin.
preview: >-
  AWS plataforma eskalagarria, fidagarria eta errentagarria eskaintzen du.
  Oinarrizko kontzeptuak ikasi, hala nola MFA bidezko segurtasuna, AWS CLI erabilera,
  EC2 konputaziorako, S3 biltegiratzeko, RDS datu-baseetarako eta Lambda zerbitzurik gabeko funtzioetarako.
image: >-
  https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# AWS-ekin Hastea

Amazon Web Services (**AWS**) hodei-plataforma integrala da, 200 baino gehiago zerbitzu eskaintzen dituena, konputazioa, biltegiratzea, datu-baseak, ikaskuntza automatikoa eta gehiago barne. AWS enpresei modu seguru eta eraginkorrean eskalatzea ahalbidetzen die.

## Zergatik aukeratu AWS?

1. **Eskalagarritasuna**: Zure aplikazioak erraz handitu EC2 eta S3 bezalako baliabideekin.
2. **Azpiegitura Globala**: Zerbitzuak hainbat eskualde eta erabilgarritasun eremuetan ezarri.
3. **Segurtasuna**: Industriako segurtasun maila altua, MFA eta zifratzea barne.
4. **Ordaindu Erabiltzen Duana**: Erabiltzen duzunaren arabera bakarrik ordaindu.

---

## AWS-eko Oinarrizko Kontzeptuak

### Autentifikazio Anitzeko Faktorea (MFA)
Segurtasuna AWS-en lehentasun bat da. MFA-k zure kontuaren babes-maila gehigarria eskaintzen du.

- **MFA Konfiguratzeko**:
  1. Joan **IAM Kontsolara**.
  2. Aukeratu zure erabiltzailea eta klik egin "Segurtasun Kredentzialak".
  3. Gehitu MFA gailu bat (adibidez: Autentifikatzaile Aplikazioa edo hardware tokena).

Horrela, zure kredentzialak lapurtuak izan arren, baimenik gabeko sarbidea eragozten da.

---

### AWS Komando Lerroaren Interfazea (AWS CLI)
**AWS CLI**-k AWS zerbitzuak programatikoki kudeatzeko aukera ematen du. Hona hemen nola konfiguratu:

1. **CLI Instalatu**:
   - Deskargatu [webgune ofizialetik](https://aws.amazon.com/cli/).
2. **CLI Konfiguratu**:
   ```bash
   aws configure
