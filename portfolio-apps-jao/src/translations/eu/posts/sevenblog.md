---
date: "2025-04-09T17:00:00.000Z"
title: Zein Hooks erabiltzen dituzu React-en zure osagaiak kudeatzeko?
tagline: Ezagutu React-en gehien erabiltzen diren hooks eta nola hobetzen duten zure osagaien kudeaketa.
preview: >-
  React-en hooks-ek egoera eta osagaien bizitza-zikloa modu eraginkorragoan kudeatzen laguntzen dute.
  Artikulu honetan, gehien erabiltzen direnak aztertuko ditugu: useState, useEffect, useRef, useContext eta useMemo.
image: >-
  /images/blogs/nat-Z0vdRzr_iZM-unsplash.jpg
---
# Zer dira Hooks React-en?
Hooks-ek funtzioak dira, eta horiek aukera ematen diete funtzional osagaiei React-en egoera eta beste ezaugarri batzuk erabiltzeko, klase bat idatzi beharrik gabe. React 16.8 bertsioan sartu ziren, logika sinplifikatzen eta kodearen berrerabilpena hobetzen lagunduz.

## Zergatik erabili Hooks React-en?
Erabilera erraza: Egoera kudeatzeko klaseak beharrik gabe erabiltzeko aukera ematen dute.
Kode garbiagoa: Bizitza-zikloaren metodoen konplexutasuna ezabatzen dute.
Berrerabiltzea: Logika funtzio berrerabilgarrietan ateratzeko aukera ematen dute.
Errendimendu hobea: Renderizazio ez-beharrezkoak murrizten dituzte.
React-en Hook garrantzitsuenak
## useState
useState hook-a egoera kudeatzeko erabiltzen da funtzional osagaien barruan.

```jsx
import { useState } from "react";  

function Counter() {  
  const [counter, setCounter] = useState(0);  

  return (  
    <div>  
      <p>Counter: {counter}</p>  
      <button onClick={() => setCounter(counter + 1)}>Handitu</button>  
    </div>  
  );  
}  
```
## useEffect
useEffect side effects-ak kudeatzen ditu, API deiak edo DOM manipulazioa, adibidez.

```jsx
import { useState, useEffect } from "react";  

function UserData() {  
  const [user, setUser] = useState(null);  

  useEffect(() => {  
    fetch("https://api.example.com/user")  
      .then(response => response.json())  
      .then(data => setUser(data));  
  }, []);  

  return <div>{user ? <p>Name: {user.name}</p> : <p>Kargatzen...</p>}</div>;  
}  
  ```
## useRef
useRef DOM elementuetara sartzeko edo balio iraunkorrak gordetzeko erabiltzen da, berriro renderizatu gabe.

```jsx
import { useRef } from "react";  

function FocusedInput() {  
  const inputRef = useRef(null);  

  const focus = () => {  
    inputRef.current.focus();  
  };  

  return (  
    <div>  
      <input ref={inputRef} type="text" />  
      <button onClick={focus}>Sartu fokua</button>  
    </div>  
  );  
}  
```
## useContext
useContext hook-ak balioak lortzeko aukera ematen du, prop drilling-ik gabe.

```jsx
import { useContext } from "react";  
const ThemeContext = React.createContext("argia");  

function Component() {  
  const theme = useContext(ThemeContext);  
  return <p>Gaur egungo gaia {theme} da</p>;  
}  
  ```
## useMemo
useMemo hook-ak kalkulatutako balioak memorizatzen ditu, renderizazio bakoitzean kalkulu ez-beharrezkoak saihesteko.

```jsx
import { useState, useMemo } from "react";  

function HeavyCalculation({ number }) {  
  const result = useMemo(() => {  
    console.log("Kalkulatzen...");  
    return number * 2;  
  }, [number]);  

  return <p>Resultado: {result}</p>;  
}  
```
## Ondorioa
Hooks-ak React-en funtzional osagaien egoera eta efektoak kudeatzeko modua iraultzen ari dira. Garrantzitsuenak ezagutzea eta erabiltzea kode garbiagoa eta eraginkorragoa idazten lagunduko dizu.


