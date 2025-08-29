---
date: "2025-08-29T17:00:00.000Z"
title: "Estrategias de Caché con Redis y Caffeine"
tagline: "Optimiza el rendimiento de tus aplicaciones con cachés en memoria y distribuidas"
preview: >-
  Descubre las diferencias entre Redis y Caffeine, cuándo usar cada uno, ejemplos prácticos, patrones de diseño y buenas prácticas para caching eficiente en sistemas modernos.
image: >-
  /images/blogs/redis-caffeine.jpg
---
# Estrategias de Caché con Redis y Caffeine: Cuándo, Cómo y Por Qué ⚡

En aplicaciones modernas, **el rendimiento lo es todo**. Si tu API consulta la base de datos en cada request, tarde o temprano tendrás problemas de latencia, escalabilidad y costos.  
Aquí es donde entran **las estrategias de caché**.

En este artículo aprenderás:

✅ **Qué son Redis y Caffeine**  
✅ **Cuándo usar uno u otro**  
✅ **Patrones y ejemplos prácticos**  
✅ **Pros y contras**  
✅ **Buenas prácticas**  

---

## ✅ ¿Por qué usar caché?

- **Reduce la latencia**: Las respuestas son mucho más rápidas.
- **Menos carga en la base de datos**: Alivia los cuellos de botella.
- **Mejor experiencia de usuario**: Tiempo de respuesta consistente.

---

## ✅ Opciones populares: Redis vs Caffeine

### **Redis**  
- Caché **distribuido** en memoria.
- Ideal para **escalabilidad horizontal**.
- Permite **persistencia opcional**.
- Compatible con estructuras complejas (listas, sets, pub/sub).

✅ **Casos de uso**:  
- Microservicios distribuidos.  
- Aplicaciones con múltiples instancias.  
- Datos compartidos entre servidores.  

---

### **Caffeine**  
- Caché **en memoria local** (dentro de la JVM).
- Basado en **ConcurrentHashMap + políticas LRU/W-TinyLFU**.
- Ultra rápido para **lecturas en la misma instancia**.

✅ **Casos de uso**:  
- Monolitos o microservicios con **bajo escalado horizontal**.
- Datos de alta frecuencia y bajo costo de regeneración.
- Evitar latencia de red.

---

## ✅ ¿Cuándo usar Redis y cuándo Caffeine?
```text
| Criterio               | Redis                                  | Caffeine                              |
|------------------------|---------------------------------------|--------------------------------------|
| **Escalabilidad**      | Alta (distribuido)                   | Limitada a una JVM                  |
| **Consistencia**       | Compartido entre instancias          | Solo local                          |
| **Latencia**           | Mayor (requiere red)                 | Bajísima (in-memory)                |
| **Persistencia**       | Opcional (RDB, AOF)                  | No                                  |
| **Complejidad**        | Requiere instalación/configuración    | Muy fácil (dependencia Maven)       |
```

**Regla práctica**:  
- Si tu aplicación **es distribuida** y necesitas **consistencia entre nodos**, usa **Redis**.  
- Si es **single-instance** y buscas **velocidad máxima**, usa **Caffeine**.

---

## ✅ Implementación en Spring Boot

### **Caffeine**
Dependencia Maven:
```xml
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

### **Configuración:**
```java
@Bean
public CacheManager cacheManager() {
    return new CaffeineCacheManager("usuarios");
}
```
### **Uso en un servicio:**
```java
@Cacheable("usuarios")
public Usuario obtenerUsuario(Long id) {
    return repository.findById(id).orElseThrow();
}
```

## **Redis**

### Dependencia Maven:
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```
## Configuración application.yml:
```yml
spring:
  redis:
    host: localhost
    port: 6379
```
### Bean:
```java
@Bean
public RedisCacheManager cacheManager(RedisConnectionFactory factory) {
    return RedisCacheManager.builder(factory).build();
}
```

### ✅ Estrategias y patrones de caching

Cache-aside: Carga desde DB cuando el cache no tiene el dato.

Write-through: Escribe en cache y DB al mismo tiempo.

Read-through: La aplicación siempre lee desde el cache.

TTL y Expiración: Define políticas de caducidad según el caso.

### ✅ Pros y contras
Redis

✔ Distribuido y escalable
✔ Compatible con microservicios
✖ Requiere infraestructura extra
✖ Latencia mayor que en memoria local

Caffeine

✔ Extremadamente rápido
✔ Fácil de implementar
✖ Solo para una JVM
✖ Sin persistencia

### ✅ Buenas prácticas

Define políticas de expiración claras.

Evita cachear datos altamente volátiles.

Monitorea tasa de aciertos (hit ratio).

Usa caching inteligente en endpoints críticos.

### ✅ Conclusión

No existe un único ganador:

Usa Caffeine para rendimiento ultra rápido en una sola instancia.

Usa Redis para sistemas distribuidos que necesitan consistencia.

¿Lo mejor? Combinarlos:

Caffeine para cache local.

Redis como capa distribuida.

🔥 Así logras velocidad y consistencia sin compromisos.
