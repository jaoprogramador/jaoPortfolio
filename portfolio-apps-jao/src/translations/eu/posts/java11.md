---
date: "2025-09-30T17:00:00.000Z"
title: Java 11 
tagline: Domina las principales novedades y cambios de Java 11 (LTS)
preview: >-   
    Java 11, lanzado en 2018 como versión de soporte extendido (LTS), consolidó cambios importantes en el lenguaje y la plataforma. Introdujo el uso de `var` para variables locales, una nueva API de cliente HTTP más moderna, y eliminó módulos obsoletos como Java EE y CORBA. Esta guía resume las mejoras clave, con ejemplos prácticos para actualizar tu conocimiento.
image: >-
    /images/blogs/java11.jpg
---
# Guía Completa de Java 11 (2018 - LTS)

Java 11 fue una versión de **soporte a largo plazo (LTS)** muy esperada tras Java 8, con mejoras de productividad y cambios importantes en la plataforma.  

## ✅ Características Clave de Java 11

- **Palabra clave `var` para variables locales** – Código más limpio y conciso.
- **Nueva API de Cliente HTTP** – Soporte moderno para peticiones síncronas y asíncronas.
- **Eliminación de módulos Java EE y CORBA** – Limpieza y modernización del JDK.
- **Mejoras en el recolector de basura (GC)** – Incluyendo ZGC y mejoras en G1.
- **Ejecución directa de archivos `.java`** – Compilar y ejecutar en un solo paso.
- **Strings y colecciones más expresivos** – Nuevos métodos útiles en la API estándar.
- **Compatibilidad con Unicode 10** – Soporte actualizado para caracteres y scripts modernos.

---

## 🚀 Ejemplos Prácticos

### 1. Uso de `var` para variables locales

```java
var message = "Hola, Java 11!";
System.out.println(message); // infiere tipo String
```


## 2. Nueva API de Cliente HTTP

```java
var client = HttpClient.newHttpClient();
var request = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
    .build();

var response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());

```
## 3. Cliente HTTP Asíncrono con CompletableFuture
```java
var client = HttpClient.newHttpClient();
var request = HttpRequest.newBuilder()
    .uri(URI.create("https://jsonplaceholder.typicode.com/posts/1"))
    .build();

client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
    .thenApply(HttpResponse::body)
    .thenAccept(System.out::println);

```
## 4. Eliminación de módulos Java EE y CORBA

En Java 11, módulos como JAXB, JAX-WS, CORBA y JAF fueron eliminados del JDK.
Si aún los necesitas, deben añadirse como dependencias externas (ej. vía Maven o Gradle).

```xml
<!-- Ejemplo en Maven -->
<dependency>
  <groupId>javax.xml.bind</groupId>
  <artifactId>jaxb-api</artifactId>
  <version>2.3.1</version>
</dependency>

```
## 5. Nuevos métodos en String

```java
String text = "  ";
System.out.println(text.isBlank()); // true
System.out.println("Hola\nMundo".lines().count()); // 2
System.out.println("Java".repeat(3)); // JavaJavaJava

```

## 6. Ejecutar archivos .java directamente

Con Java 11 ya no necesitas compilar antes manualmente.
```java
java HelloWorld.java
```

## 🔑 Ventajas de Java 11

Sintaxis más limpia gracias a var.

Cliente HTTP moderno integrado en el JDK.

JDK más ligero tras eliminar módulos obsoletos.

Mejor soporte para microservicios y aplicaciones cloud-native.

## 📌 Conclusión

Java 11 marcó un paso clave hacia un ecosistema más moderno, con mejoras en productividad y simplificación del JDK.
Dominar estas novedades es esencial si vienes de Java 8 y quieres aprovechar las ventajas de una versión LTS ampliamente adoptada en entornos empresariales.
