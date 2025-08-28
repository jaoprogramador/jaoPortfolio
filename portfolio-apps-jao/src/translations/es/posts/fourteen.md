---
date: "2025-04-09T17:00:00.000Z"
title: "OAuth con Spring Security: Autenticación y Autorización en Aplicaciones Java"
tagline: "Aprende a integrar OAuth en tus aplicaciones Java usando Spring Security."
preview: >-
  OAuth es un estándar de autorización ampliamente utilizado para permitir que las aplicaciones accedan a recursos de usuarios sin compartir sus credenciales. En este post, te explicamos cómo configurar OAuth con Spring Security en una aplicación Java.
image: >-
  https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
---

# Introducción a OAuth con Spring Security

**OAuth** es un protocolo de autorización que permite a las aplicaciones acceder a recursos de un usuario en otro servicio (como Google, GitHub o LinkedIn) sin compartir sus credenciales. **Spring Security** es un framework de seguridad para aplicaciones Java que facilita la integración de OAuth en tu aplicación.

## ¿Por qué usar OAuth con Spring Security?

1. **Seguridad**: No es necesario almacenar contraseñas de usuarios.
2. **Integración sencilla**: Spring Security proporciona soporte nativo para OAuth 2.0.
3. **Escalabilidad**: Puedes integrar múltiples proveedores de OAuth (Google, GitHub, etc.).

---

## **Configuración de OAuth con Spring Security**

Para configurar OAuth en una aplicación Spring Boot, sigue estos pasos:

### 1. **Agregar Dependencias**
   - En tu archivo `pom.xml`, agrega las dependencias de Spring Security y OAuth:
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

### 2. **Configurar el Proveedor de OAuth**
   - En tu archivo `application.yml` o `application.properties`, configura las credenciales de tu proveedor de OAuth (por ejemplo, Google):
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

### 3. **Configurar Spring Security**
   - Crea una clase de configuración para Spring Security:
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

## **Ejemplo Práctico: Autenticación con Google**

### 1. **Crear una Aplicación en Google**
   - Ve a la [Consola de Desarrolladores de Google](https://console.developers.google.com/).
   - Crea un nuevo proyecto y habilita la API de OAuth 2.0.
   - Configura las credenciales de OAuth (Client ID y Client Secret).
   - Agrega una **Redirect URI** (por ejemplo, `http://localhost:8080/login/oauth2/code/google`).

### 2. **Implementar el Controlador**
   - Crea un controlador para manejar la autenticación y la página de inicio:
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

### 3. **Crear las Vistas**
   - Crea una vista `index.html` para la página pública:
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

## **Conclusión**

Spring Security facilita la integración de OAuth en aplicaciones Java, permitiéndote autenticar usuarios con proveedores externos como Google, GitHub o LinkedIn. Con este ejemplo, puedes comenzar a implementar OAuth en tu aplicación Spring Boot de manera segura y eficiente.

---

### **Referencias**
- [Documentación de Spring Security OAuth](https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html)
- [Guía de OAuth 2.0 con Spring Boot](https://spring.io/guides/tutorials/spring-boot-oauth2/)

---

¡Espero que esta plantilla te sea útil para tu publicación sobre OAuth con Spring Security! 😊




