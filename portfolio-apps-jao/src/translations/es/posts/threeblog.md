---
date: "2025-04-09T17:00:00.000Z"
title: Introducción a MongoDB
tagline: MongoDB – La base de datos NoSQL más popular.
preview: >-
  MongoDB es una base de datos NoSQL orientada a documentos que ofrece flexibilidad y
  escalabilidad para aplicaciones modernas. Almacena datos en documentos similares a JSON
  con esquemas opcionales.
image: >-
  https://images.unsplash.com/photo-1640017955477-75b58521007d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80
---

# Comenzando con MongoDB

**MongoDB** es una base de datos NoSQL que utiliza un modelo de datos flexible y sin esquemas, lo que la convierte en una opción popular para aplicaciones modernas y escalables. Los datos se almacenan en **colecciones** como **documentos** similares a JSON, lo que facilita trabajar con datos dinámicos.

## ¿Por qué elegir MongoDB?

1. **Flexibilidad**: Almacena datos estructurados, semi-estructurados o no estructurados.
2. **Escalabilidad**: Escalado horizontal mediante particionado (sharding).
3. **Alto rendimiento**: Consultas rápidas con índices.
4. **Ecosistema rico**: Controladores para múltiples lenguajes de programación.

### Configuración de MongoDB

Para comenzar a usar MongoDB, sigue estos pasos:

1. Instala MongoDB Community Edition desde el [sitio web oficial](https://www.mongodb.com/try/download/community).
2. Inicia el servidor MongoDB usando el comando `mongod`.
3. Usa la shell de MongoDB (`mongosh`) o cualquier cliente como Compass para interactuar con la base de datos.

#### Ejemplo: Insertar un Documento

Aquí te mostramos cómo insertar un documento en una colección:

```javascript
db.users.insertOne({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  interests: ["coding", "reading", "gaming"]
});
