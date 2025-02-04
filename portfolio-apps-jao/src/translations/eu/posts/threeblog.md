
---

### **Euskera (EU)**

```yaml
---
date: "2025-04-09T17:00:00.000Z"
title: MongoDB-ri Sarrera
tagline: MongoDB – NoSQL datu-base ezagunena.
preview: >-
  MongoDB dokumentuetan oinarritutako NoSQL datu-base bat da, aplikazio modernoetarako
  malgutasuna eta eskalagarritasuna eskaintzen dituena. Datuak JSON antzeko dokumentuetan
  gordetzen dira, eskema aukerakoekin.
image: >-
  https://images.unsplash.com/photo-1640017955477-75b58521007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# MongoDB-rekin Hastea

**MongoDB** NoSQL datu-base bat da, eskemarik gabeko eta malgutasunezko datu-eredu bat erabiliz, aplikazio modernoak eta eskalagarriak sortzeko aukera ematen duena. Datuak **bildumetan** gordetzen dira, **dokumentu** JSON antzekoetan, eta datu dinamikoekin lan egitea errazten du.

## Zergatik aukeratu MongoDB?

1. **Malgutasuna**: Datu egituratuak, semi-egituratuak edo egituratu gabeak gorde ditzakezu.
2. **Eskalagarritasuna**: Partizionamendu (sharding) bidezko eskalaketa horizontal.
3. **Errendimendu altua**: Galderak azkar, indizeekin.
4. **Ekosistema aberatsa**: Programazio-lengoaia anitzetan gidatzaileak.

### MongoDB Konfiguratzea

MongoDB erabiltzen hasteko, jarraitu pauso hauek:

1. Instalatu MongoDB Community Edition [webgune ofizialetik](https://www.mongodb.com/try/download/community).
2. Abiatu MongoDB zerbitzaria `mongod` komandoa erabiliz.
3. Erabili MongoDB shell-a (`mongosh`) edo edozein bezero Compass bezala, datu-basearekin elkarreragiteko.

#### Adibidea: Dokumentu Bat Txertatzea

Hona hemen nola txertatu dokumentu bat bilduma batean:

```javascript
db.users.insertOne({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  interests: ["coding", "reading", "gaming"]
});
