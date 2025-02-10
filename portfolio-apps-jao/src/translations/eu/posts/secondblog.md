---
date: '2025-02-09T16:00:00.000Z'
title: Angular-en Sarrera
tagline: Angular-rekin aplikazio web dinamikoak eraikitzen.
preview: >-
  Angular aplikazio web sendoak eraikitzeko plataforma bat da. Bere
  arkitektura konposatuzko eta tresna indartsuekin, garatzaile modernoentzat
  egokia den framework bat da.
image: >-
  https://images.unsplash.com/photo-1656427868828-79a829b92b2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# Angular-ekin Hastea

**Angular** TypeScript-en oinarritutako open-source framework bat da web aplikazioak eraikitzeko, Google-k mantendua. Bere ekosistema sendoa eta tresna indartsuak aplikazio handiak garatzeko egokia bihurtzen dute.

## Angular-en Kontzeptu Nagusiak

Angular honako kontzeptu nagusietan oinarritzen da:

1. **Komponentak**: Angular aplikazio baten oinarrizko piezak.
2. **Moduluak**: Aplikazioa bloke koherenteetan antolatzeko modua.
3. **Zerbitzuak**: Datuak eta logika partekatua kudeatzeko erabiltzen dira.
4. **Diziplina**: HTML luzatzeko jokabide pertsonalizatuak.

### Zure Lehen Komponentea Sortzen

Angular-ko komponentak `@Component` dekoradorea erabiliz definitzen dira. Hona hemen Angular-komponente sinple baten adibidea:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `<h1>Kaixo, {{ name }}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class GreetingComponent {
  name = 'Angular';
}
