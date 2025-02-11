---
date: "2025-04-09T17:00:00.000Z"
title: Introducción a los Principios SOLID
tagline: Aprende los principios SOLID para escribir código más limpio y mantenible.
preview: >-
    Los principios SOLID son un conjunto de reglas que ayudan a los desarrolladores a escribir
    código más estructurado, flexible y fácil de mantener. Descubre cómo aplicarlos en tu desarrollo.
image: >-
    https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80
---
# ¿Qué son los Principios SOLID?

Los principios SOLID son un conjunto de buenas prácticas de diseño de software propuestas por Robert C. Martin. Su objetivo es mejorar la calidad, mantenibilidad y escalabilidad del código.

## ¿Por qué usar los principios SOLID?

Código más limpio y organizado.

Facilita la reutilización y mantenimiento.

Mejora la escalabilidad y flexibilidad del software.

Reduce el acoplamiento entre componentes.

## Los Principios SOLID

1. Principio de Responsabilidad Única **(SRP - Single Responsibility Principle)**

Cada clase debe tener una única razón para cambiar, es decir, debe tener una sola responsabilidad.
```jsx
class Reporte {
  generarPDF() {
    // Lógica para generar PDF
  }
}
```
Para cumplir SRP, separamos las responsabilidades:
```jsx
class Reporte {
  obtenerDatos() {
    // Obtener datos del reporte
  }
}

class ExportadorPDF {
  exportar(reporte) {
    // Generar PDF con los datos
  }
}
```
## 2. Principio de Abierto/Cerrado **(OCP - Open/Closed Principle)**

Las clases deben estar abiertas para su extensión, pero cerradas para modificación.
```jsx
class CalculadoraArea {
  calcular(figura) {
    return figura.area();
  }
}
```
Cada nueva figura solo necesita implementar un método area() sin modificar CalculadoraArea.

## 3. Principio de Sustitución de Liskov **(LSP - Liskov Substitution Principle)**

Las clases derivadas deben poder sustituir a sus clases base sin alterar el comportamiento esperado.
```jsx
class Ave {
  volar() {
    return "Volando";
  }
}

class Pinguino extends Ave {
  volar() {
    throw new Error("Los pingüinos no pueden volar");
  }
}
```
Este código rompe LSP, porque Pinguino no puede reemplazar a Ave. Una mejor solución es usar composición en lugar de herencia.

## 4. Principio de Segregación de Interfaces **(ISP - Interface Segregation Principle)**

Las interfaces deben ser específicas para cada necesidad en lugar de ser genéricas y forzar la implementación de métodos innecesarios.
```jsx
class Trabajador {
  trabajar() {}
  comer() {}
}
```
En su lugar, dividimos en interfaces más específicas:
```jsx
class ITrabajador {
  trabajar() {}
}

class ICome {
  comer() {}
}
```
## 5. Principio de Inversión de Dependencias **(DIP - Dependency Inversion Principle)**

Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones.
```jsx
class MySQLDatabase {
  conectar() {
    return "Conectando a MySQL";
  }
}

class Aplicacion {
  constructor() {
    this.db = new MySQLDatabase();
  }
}
```
## Este código rompe DIP porque Aplicacion depende directamente de MySQLDatabase. En su lugar, usamos una abstracción:
```jsx
class Database {
  conectar() {}
}

class MySQLDatabase extends Database {
  conectar() {
    return "Conectando a MySQL";
  }
}

class Aplicacion {
  constructor(db) {
    this.db = db;
  }
}
```
## Conclusión

Los principios **SOLID** ayudan a escribir código más estructurado, mantenible y escalable. Aplicarlos correctamente mejorará la calidad de tus proyectos y facilitará la colaboración en equipo