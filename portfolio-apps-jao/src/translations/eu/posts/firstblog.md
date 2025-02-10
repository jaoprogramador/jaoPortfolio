---
date: '2025-01-09T15:30:00.000Z'
title: React Garapena Aztertzen
tagline: React-ekin web aplikazio modernoen eraikuntzaren bidaia.
preview: >-
  React JavaScripteko liburutegi indartsua da erabiltzaile-interfazeak eraikitzeko. 
  Bere osagaietan oinarritutako arkitekturarekin, aplikazio dinamiko eta interaktiboak sortzea errazten du.
image: >-
  https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
---

# React-en Hastera

**React** erabiltzaile-interfazeak eraikitzeko JavaScript-eko liburutegi ezaguna da, Facebook-ek eta garatzaileen komunitate batek mantentzen dutena. 
Garatzaileei osagai berrerabilgarriak sortzeko eta aplikazio konplexuen egoera eraginkortasunez kudeatzeko aukera ematen die.

## React-eko Funtsezko Kontzeptuak

React hiru kontzeptu nagusitan oinarritzen da:

1. **Osagaiak**: React aplikazioaren eraikuntza-blokeak.
2. **JSX (JavaScript XML)**: JavaScript-en HTML-antzeko kodea idazteko sintaxi hedapena.
3. **Egoera eta Prop-ak**: Datuak kudeatzeko eta osagaien artean pasatzeko mekanismoak.

### Osagaiak Ulertzea

React-eko osagai bat klase edo funtzio bat izan daiteke. Adibidez, hona hemen funtziozko osagai sinple bat:

```jsx
function Greeting(props) {
  return <h1>Kaixo, {props.name}!</h1>;
}

export default Greeting;
