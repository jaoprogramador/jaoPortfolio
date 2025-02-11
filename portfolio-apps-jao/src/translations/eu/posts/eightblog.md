---
date: "2025-04-09T17:00:00.000Z"
title: SOLID Printzipioen Sarrera
tagline: Ikasi SOLID printzipioiak kode garbiagoa eta mantentze-lan errazagoa idazteko.
preview: >-
  SOLID printzipioek kode egituratuagoa, malguagoa eta mantentze-lan errazagoa idazten laguntzen duten arau multzo bat dira. Ikasi nola aplika ditzakezun zure garapenean.
image: >-
  https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
---
# Zer dira SOLID Printzipioak?
SOLID printzipioek Robert C. Martin-ek proposatutako software diseinuaren praktiketan onenak diren arauak dira. Haien helburua kodearen kalitatea, mantentze-lana eta eskalagarritasuna hobetzea da.

## Zergatik erabili SOLID printzipioak?
Kode garbiago eta antolatzaileagoa.
Berrerabiltzeko eta mantentzeko errazagoa.
Softwarearen eskalagarritasuna eta malgutasuna hobetzen ditu.
Osagaien arteko elkartzea murrizten du.
## SOLID Printzipioak
Erantzukizun Bakarraren Printzipioa (SRP)
Klase bakoitzak aldatu beharko duen arrazoi bakarra izan behar du, hau da, erantzukizun bakarra izan behar du.

```jsx
class Reporte {  
  PDFSortu() {  
    // PDF sortzeko logika  
  }  
}  
```
SRP betetzeko, erantzukizunak bereizten ditugu:

```jsx
class Reporte {  
  DatuakLortu() {  
    // Erreporteko datuak lortu  
  }  
}  

class PDFExportatzailea {  
  esportatu(reporte) {  
    // Datuak erabiliz PDF sortu  
  }  
}  
  ```
## 2. Ireki / Itxi Printzipioa (OCP)
Klaseek zabaltzeko irekita egon behar dute, baina aldatu ezin direnak.

```jsx
class EremuKalkulatzailea {  
  kalkulatu(formak) {  
    return forma.era();  
  }  
}  
```
Forma berriek bakarrik behar dute era() metodo bat inplementatzea EremuKalkulatzailea aldatu gabe.

## 3. Liskov Substituzio Printzipioa (LSP)
Deribatutako klaseek oinarrizko klaseak ordezkatu behar dituzte, espero den portaera aldatu gabe.

```jsx
class Hegazti {  
  heganJoan() {  
    return "Hegaka";  
  }  
}  

class Pingüino extends Hegazti {  
  heganJoan() {  
    throw new Error("Pingüinoek ezin dute hegan egin");  
  }  
}  
  ```
Kode honek LSP urratzen du, Pingüino Hegazti ordezkatu ezin delako. Konponbide hobea da konposizioa erabiltzea herentziaz ordez.

## 4. Interfazeen Segregazio Printzipioa (ISP)
Interfazek behar bakoitzera egokitu behar dira, orokorrak izan beharrean eta beharrezko ez diren metodoak inplementatzeko beharra ezarri behar izan gabe.

```jsx
class Langile {  
  lan egin() {}  
  jan() {}  
}  
```
Hori ordez, interfazetan zehatzago banatzen dugu:

```jsx
class ILangile {  
  lan egin() {}  
}  

class IJanari {  
  jan() {}  
}  
  ```
## 5. Menpekotasunen Inbertsio Printzipioa (DIP)
Maila altuko moduluek maila baxuko moduluekin ez dute zuzenean menpekotasunik izan behar, abstrakzioekin baizik.

```jsx
class MySQLDatuBasea {  
  konektatu() {  
    return "MySQL-ra konektatzen";  
  }  
}  

class Aplikazioa {  
  constructor() {  
    this.db = new MySQLDatuBasea();  
  }  
}  
```
Kode honek DIP urratzen du, Aplikazioa zuzenean MySQLDatuBasea-n menpekotasuna duelako. Hori ordez, abstrakzioa erabiliko dugu:

```jsx
class DatuBasea {  
  konektatu() {}  
}  

class MySQLDatuBasea extends DatuBasea {  
  konektatu() {  
    return "MySQL-ra konektatzen";  
  }  
}  

class Aplikazioa {  
  constructor(db) {  
    this.db = db;  
  }  
}  
  ```
## Ondorioa
SOLID printzipioek kode egituratuagoa, mantentze-lan errazagoa eta eskalagarriagoa idazten laguntzen dute. Hauek zuzenean aplikatuz, zure proiektuen kalitatea hobetuko duzu eta talde-laneko lankidetza errazagoa izango da.

