---
date: "2025-04-09T17:00:00.000Z"
title: "OAuth Spring Security-rekin"
tagline: "Ikasi OAuth nola integratu Java aplikazioetan Spring Security erabiliz."
preview: >-
  OAuth erabiltzaileen baliabideetarako sarbidea ematen duen autorizazio estandar bat da, haien kredentzialak partekatu gabe. Post honetan, OAuth konfiguratzen irakatsiko dizugu Spring Security erabiliz Java aplikazio batean.

image: >-
  https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
---

# OAuth-ri sarrera Spring Security-rekin

**OAuth** autorizazio protokolo bat da, eta aplikazioei beste zerbitzu bateko erabiltzaileen baliabideetara sartzea ahalbidetzen die (adibidez, Google, GitHub edo LinkedIn) haien kredentzialak partekatu gabe. **Spring Security** Java aplikazioetarako segurtasun framework bat da, eta OAuth integratzea errazten du.

## Zergatik erabili OAuth Spring Security-rekin?

1. **Segurtasuna**: Ez da beharrezkoa erabiltzaileen pasahitzak gordetzea.
2. **Integrazio erraza**: Spring Security-k OAuth 2.0-ren euskarri natiboa eskaintzen du.
3. **Eskalagarritasuna**: OAuth hornitzaile anitz integra ditzakezu (Google, GitHub, etab.).

---

## **OAuth konfiguratzea Spring Security-rekin**

OAuth Spring Boot aplikazio batean konfiguratzeko, jarraitu urrats hauek:

### 1. **Gehitu dependentziak**
   - Zure `pom.xml` fitxategian, gehitu Spring Security eta OAuth dependentziak:
     ```xml
     <dependency>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-security</artifactId>
     </dependency>
     <dependency>
         <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-starter-oauth2-client</artifactId>
     </dependency>
     ```

### 2. **Konfiguratu OAuth hornitzailea**
   - Zure `application.yml` edo `application.properties` fitxategian, konfiguratu zure OAuth hornitzailearen kredentzialak (adibidez, Google):
     ```yaml
     spring:
       security:
         oauth2:
           client:
             registration:
               google:
                 client-id: ZURE_CLIENT_ID
                 client-secret: ZURE_CLIENT_SECRET
                 scope: email,profile
             provider:
               google:
                 authorization-uri: https://accounts.google.com/o/oauth2/auth
                 token-uri: https://oauth2.googleapis.com/token
                 user-info-uri: https://openidconnect.googleapis.com/v1/userinfo
     ```

### 3. **Konfiguratu Spring Security**
   - Sortu konfigurazio klase bat Spring Security-rako:
     ```java
     import org.springframework.context.annotation.Bean;
     import org.springframework.context.annotation.Configuration;
     import org.springframework.security.config.annotation.web.builders.HttpSecurity;
     import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
     import org.springframework.security.web.SecurityFilterChain;

     @Configuration
     @EnableWebSecurity
     public class SecurityConfig {

         @Bean
         public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
             http
                 .authorizeHttpRequests(auth -> auth
                     .requestMatchers("/", "/public/**").permitAll() // Bide publikoak
                     .anyRequest().authenticated() // Gainontzeko bideak autentifikazioa behar dute
                 )
                 .oauth2Login(oauth2 -> oauth2
                     .defaultSuccessUrl("/home", true) // Saioa hasi ondoren birbideratu
                 );
             return http.build();
         }
     }
     ```

---

## **Adibide praktikoa: Autentifikazioa Google-rekin**

### 1. **Sortu aplikazio bat Google-n**
   - Joan [Google Developers Console](https://console.developers.google.com/)-ra.
   - Sortu proiektu berri bat eta gaitu OAuth 2.0 API-a.
   - Konfiguratu OAuth kredentzialak (Client ID eta Client Secret).
   - Gehitu **Redirect URI** bat (adibidez, `http://localhost:8080/login/oauth2/code/google`).

### 2. **Inplementatu kontroladorea**
   - Sortu kontroladore bat autentifikazioa eta hasiera orria kudeatzeko:
     ```java
     import org.springframework.security.core.annotation.AuthenticationPrincipal;
     import org.springframework.security.oauth2.core.user.OAuth2User;
     import org.springframework.stereotype.Controller;
     import org.springframework.ui.Model;
     import org.springframework.web.bind.annotation.GetMapping;

     @Controller
     public class HomeController {

         @GetMapping("/")
         public String home() {
             return "index"; // Hasiera orri publikoa
         }

         @GetMapping("/home")
         public String userHome(@AuthenticationPrincipal OAuth2User user, Model model) {
             model.addAttribute("name", user.getAttribute("name"));
             model.addAttribute("email", user.getAttribute("email"));
             return "home"; // Autentifikatutako erabiltzailearen hasiera orria
         }
     }
     ```

### 3. **Sortu ikuspegiak**
   - Sortu `index.html` ikuspegia orri publikorako:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Hasiera</title>
     </head>
     <body>
         <h1>Ongi etorri</h1>
         <a href="/oauth2/authorization/google">Hasi saioa Google-rekin</a>
     </body>
     </html>
     ```

   - Sortu `home.html` ikuspegia autentifikatutako erabiltzailearentzat:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Hasiera</title>
     </head>
     <body>
         <h1>Ongi etorri, <span th:text="${name}"></span></h1>
         <p>Posta elektronikoa: <span th:text="${email}"></span></p>
         <a href="/logout">Itxi saioa</a>
     </body>
     </html>
     ```

---

## **Ondorioa**

Spring Security-k OAuth integratzea errazten du Java aplikazioetan, eta Google, GitHub edo LinkedIn bezalako kanpoko hornitzaileekin erabiltzaileak autentifikatzea ahalbidetzen du. Adibide honekin, OAuth Spring Boot aplikazio batean modu seguruan eta eraginkorrean inplementatzen hasi zaitezke.

---

### **Erreferentziak**
- [Spring Security OAuth Dokumentazioa](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)
- [OAuth 2.0 Gida Spring Boot-ekin](https://spring.io/guides/tutorials/spring-boot-oauth2/)

---

Espero dut plantilla hau lagungarria izatea OAuth Spring Security-rekin buruzko zure postarentzat! 😊