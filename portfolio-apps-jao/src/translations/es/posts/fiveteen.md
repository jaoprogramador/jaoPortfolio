---
date: "2025-08-26T17:00:00.000Z"
title: Arquitectura Hexagonal en Java Spring
tagline: Cómo aplicar la Arquitectura Hexagonal para mejorar tus proyectos Spring
preview: >-
  La Arquitectura Hexagonal, también conocida como Ports and Adapters, es un patrón que ayuda a diseñar aplicaciones desacopladas y fáciles de mantener. Aprende cómo implementarla en tus proyectos Java Spring y organiza tu código con una arquitectura de paquetes clara.
image: >-
 /images/blogs/moritz-ludtke-K4n6CW8so84-unsplash.jpg
---
# Arquitectura Hexagonal en Java Spring: Guía para construir aplicaciones mantenibles y escalables

La Arquitectura Hexagonal, o Ports and Adapters, es un patrón de diseño que busca desacoplar el núcleo de la aplicación de las dependencias externas como bases de datos, APIs o interfaces de usuario.

Este enfoque promueve la separación clara de responsabilidades, lo que facilita pruebas, mantenimiento y escalabilidad en aplicaciones Java Spring.

---

## Arquitectura de Paquetes recomendada

Organizar tu proyecto en paquetes bien definidos es clave para que la Arquitectura Hexagonal sea efectiva y fácil de mantener. Una estructura común es:
```text
com.tuempresa.tuapp
├── domain
│ ├── model # Entidades y objetos de dominio
│ ├── service # Lógica de negocio (casos de uso)
│ └── port
│ ├── in # Puertos de entrada (interfaces que exponen funcionalidades)
│ └── out # Puertos de salida (interfaces para dependencias externas)
├── adapter
│ ├── in # Adaptadores para puertos de entrada (por ejemplo, controladores REST)
│ └── out # Adaptadores para puertos de salida (por ejemplo, repositorios, clientes API)
└── config # Configuraciones de Spring, Beans, etc.
```

---

## ¿Qué va en cada paquete?

### 1. **domain**

Aquí reside el **corazón** de tu aplicación. El dominio contiene:

- **model:** Las entidades de negocio y objetos de valor, 100% independientes de frameworks o tecnología.
- **service:** Casos de uso y reglas de negocio. Aquí defines las operaciones que tu aplicación realiza.
- **port/in:** Interfaces que definen qué funcionalidades ofrece tu dominio hacia el exterior. Por ejemplo, interfaces de servicios.
- **port/out:** Interfaces que definen las dependencias externas que el dominio necesita, como repositorios o servicios externos. El dominio no sabe cómo se implementan, solo que existen.

---

### 2. **adapter**

Aquí implementas los **detalles técnicos** que interactúan con el dominio a través de los puertos.

- **adapter/in:** Adaptadores que consumen los puertos de entrada, típicamente controladores REST, listeners o interfaces de usuario.
- **adapter/out:** Implementaciones concretas de los puertos de salida, como repositorios que usan JPA, clientes HTTP, servicios externos, etc.

---

## Ejemplos prácticos: IN y OUT

### Puerto IN (entrada)

Interfaz que define un caso de uso que el dominio ofrece, por ejemplo:

```java
// domain/port/in/UserServicePort.java
public interface UserServicePort {
    void registerUser(User user);
    Optional<User> getUserById(Long id);
}

### Servicio en el dominio que implementa la lógica

// domain/service/UserService.java
public class UserService implements UserServicePort {

    private final UserRepositoryPort userRepository;

    public UserService(UserRepositoryPort userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void registerUser(User user) {
        // Validaciones, reglas de negocio, etc.
        userRepository.save(user);
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }
}
```
## Puerto OUT (salida)

### Interfaz que define cómo el dominio interactúa con recursos externos:
```java
// domain/port/out/UserRepositoryPort.java
public interface UserRepositoryPort {
    Optional<User> findById(Long id);
    void save(User user);
}
```
### Adaptador OUT (implementación concreta, e.g., JPA)
```java
// adapter/out/persistence/UserRepositoryAdapter.java
@Repository
public class UserRepositoryAdapter implements UserRepositoryPort {

    private final SpringDataUserRepository springDataUserRepository;

    public UserRepositoryAdapter(SpringDataUserRepository springDataUserRepository) {
        this.springDataUserRepository = springDataUserRepository;
    }

    @Override
    public Optional<User> findById(Long id) {
        return springDataUserRepository.findById(id);
    }

    @Override
    public void save(User user) {
        springDataUserRepository.save(user);
    }
}

```
### Adaptador IN (controlador REST)
```java
// adapter/in/web/UserController.java
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserServicePort userService;

    public UserController(UserServicePort userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<Void> register(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return userService.getUserById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
```
## Beneficios concretos de esta organización

- **Dominio puro:** Tu lógica está aislada de frameworks y tecnologías, facilitando tests unitarios puros.

- **Flexibilidad:** Cambia bases de datos, protocolos o interfaces sin tocar el dominio.

- **Separación** clara: Los paquetes y responsabilidades son explícitos, mejorando la mantenibilidad.

- **Escalabilidad:** Añade nuevos adaptadores o casos de uso sin afectar el núcleo.

## Buenas prácticas

Define puertos con interfaces claras y bien documentadas.

Evita que el dominio conozca implementaciones concretas.

Usa inyección de dependencias para conectar adaptadores con el dominio.

Aplica pruebas unitarias al dominio y pruebas de integración a los adaptadores.

Mantén el dominio libre de anotaciones específicas de frameworks.

## Conclusión

La Arquitectura Hexagonal en Java Spring es una forma robusta de diseñar aplicaciones desacopladas y mantenibles. La correcta organización en paquetes y la clara definición de puertos y adaptadores son fundamentales para aprovechar al máximo este patrón.

Dominar esta arquitectura te ayudará a construir aplicaciones escalables, flexibles y fáciles de probar