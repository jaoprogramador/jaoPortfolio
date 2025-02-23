---
date: "2025-04-09T17:00:00.000Z"
title: "OAuth with Spring Security: Authentication and Authorization in Java Applications"
tagline: "Learn how to integrate OAuth into your Java applications using Spring Security."
preview: >-
  OAuth is a widely used authorization standard that allows applications to access user resources without sharing their credentials. In this post, we explain how to configure OAuth with Spring Security in a Java application.
image: >-
  /images/blogs/moritz-ludtke-K4n6CW8so84-unsplash.jpg
---

# Introduction to OAuth with Spring Security

**OAuth** is an authorization protocol that allows applications to access user resources on another service (such as Google, GitHub, or LinkedIn) without sharing their credentials. **Spring Security** is a security framework for Java applications that makes it easy to integrate OAuth into your application.

## Why Use OAuth with Spring Security?

1. **Security**: No need to store user passwords.
2. **Easy Integration**: Spring Security provides native support for OAuth 2.0.
3. **Scalability**: You can integrate multiple OAuth providers (Google, GitHub, etc.).

---

## **Setting Up OAuth with Spring Security**

To configure OAuth in a Spring Boot application, follow these steps:

### 1. **Add Dependencies**
   - In your `pom.xml`, add the Spring Security and OAuth dependencies:

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

### 2. **Configure the OAuth Provider**
   - In your `application.yml` or `application.properties`, configure the credentials for your OAuth provider (e.g., Google):
     ```yaml
     spring:
       security:
         oauth2:
           client:
             registration:
               google:
                 client-id: TU_CLIENT_ID
                 client-secret: TU_CLIENT_SECRET
                 scope: email,profile
             provider:
               google:
                 authorization-uri: https://accounts.google.com/o/oauth2/auth
                 token-uri: https://oauth2.googleapis.com/token
                 user-info-uri: https://openidconnect.googleapis.com/v1/userinfo
     ```

### 3. **Configure Spring Security**
   - Create a configuration class for Spring Security:
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
                     .requestMatchers("/", "/public/**").permitAll() // Rutas públicas
                     .anyRequest().authenticated() // El resto requiere autenticación
                 )
                 .oauth2Login(oauth2 -> oauth2
                     .defaultSuccessUrl("/home", true) // Redirigir después del login
                 );
             return http.build();
         }
     }
     ```

---

## **Practical Example: Authentication with Google**

### 1. **Create an Application in Google**
   - Go to the [Google Developers Console](https://console.developers.google.com/).
   - Create a new project and enable the OAuth 2.0 API.
   - Configure the OAuth credentials (Client ID and Client Secret).
   - Add a **Redirect URI** (e.g., `http://localhost:8080/login/oauth2/code/google`).

### 2. **Implement the Controller**
   - Create a controller to handle authentication and the home page:
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
             return "index"; // Página de inicio pública
         }

         @GetMapping("/home")
         public String userHome(@AuthenticationPrincipal OAuth2User user, Model model) {
             model.addAttribute("name", user.getAttribute("name"));
             model.addAttribute("email", user.getAttribute("email"));
             return "home"; // Página de inicio del usuario autenticado
         }
     }
     ```

### 3. **Create the Views**
   - Create an `index.html` view for the public page:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Inicio</title>
     </head>
     <body>
         <h1>Bienvenido</h1>
         <a href="/oauth2/authorization/google">Iniciar sesión con Google</a>
     </body>
     </html>
     ```

   - Crea una vista `home.html` para la página del usuario autenticado:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Inicio</title>
     </head>
     <body>
         <h1>Bienvenido, <span th:text="${name}"></span></h1>
         <p>Correo electrónico: <span th:text="${email}"></span></p>
         <a href="/logout">Cerrar sesión</a>
     </body>
     </html>
     ```

---

## **Conclusion**

Spring Security makes it easy to integrate OAuth into Java applications, allowing you to authenticate users with external providers like Google, GitHub, or LinkedIn. With this example, you can start implementing OAuth in your Spring Boot application securely and efficiently.

---

---

### **References**
- [Spring Security OAuth Documentation](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)
- [OAuth 2.0 Guide with Spring Boot](https://spring.io/guides/tutorials/spring-boot-oauth2/)

---

I hope this template is helpful for your post about OAuth with Spring Security! 😊



