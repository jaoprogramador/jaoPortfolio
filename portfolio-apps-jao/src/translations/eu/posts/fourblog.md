
---

### **Euskera (EU)**

```yaml
---
date: "2025-03-09T17:00:00.000Z"
title: Spring Ekoizpenaren Sarrera
tagline: Ikasi Spring Framework eta bere ekosistemako osagai nagusiak.
preview: >-
  Spring aplikazio enpresa-mailakoak eraikitzeko framework indartsua da.
  Ikasi bere funtsezko ezaugarriak, hala nola Boot, MVC, Segurtasuna, Datuak eta integrazioak
  PostgreSQL eta MongoDB bezalako datu-baseekin.
image: >-
  https://images.unsplash.com/photo-1656188505561-19f1a1b6cda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80
---

# Spring Framework-ekin Hastea

**Spring Framework** Java aplikazioak eraikitzeko framework ezagunenetakoa da, dependentzietan kudeatzea, REST APIak sortzea eta aplikazioa segurua izatea ahalbidetzen duen ekosistema osoa eskaintzen du.

## Zergatik aukeratu Spring?

1. **Erabilerraztasuna**: Spring Boot-ek aplikazioaren konfigurazioa errazten du konfigurazio minimoarekin.
2. **Integrazio indartsua**: PostgreSQL, MongoDB eta beste hainbat datu-base onartzen ditu.
3. **Segurtasun lehenik**: Segurtasun aurreratuak, hala nola JWT, OAuth2 eta gehiago.
4. **Dokumentazio osoa**: Swagger bezalako tresnek API-ak erraz esploratzeko aukera ematen dute.
5. **Enpresa mailako aplikazioak**: Eskalagarria, segurua eta errendimendu handiko aplikazioetarako egokia.

---

## Spring Moduluen Orokorra

### Spring Boot
Spring Boot-ek kode errepikakorra murrizten du eta negozio-logikaren gainean zentratu ahal izateko konfigurazio lehenetsia eskaintzen du. Hona hemen REST kontroladore sinple baten adibidea:

```java
@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/users")
    public List<String> getAllUsers() {
        return List.of("Alice", "Bob", "Charlie");
    }
}
