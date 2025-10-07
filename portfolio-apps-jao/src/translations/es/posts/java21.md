---
date: "2025-09-30T17:00:00.000Z"
title: Java 21 
tagline: Concurrencia simplificada, patrones en `switch` y registros más expresivos
preview: >-   
    Java 21, lanzado en 2023, es una versión de soporte a largo plazo (LTS) que marca un salto importante en productividad y simplicidad. Incluye hilos virtuales gracias al Proyecto Loom, coincidencia de patrones en `switch` y patrones de registro para destructuración más expresiva. Es la elección recomendada para proyectos modernos que buscan rendimiento, escalabilidad y un lenguaje más elegante.
image: >-
    /images/blogs/java21.jpg
---
# Guía Completa de Java 21

Java 21, publicado en septiembre de 2023, es la más reciente versión de soporte a largo plazo (LTS). Incorpora innovaciones muy esperadas que transforman la forma en que trabajamos con concurrencia y patrones, ofreciendo un lenguaje más moderno y potente.

## ✅ Características Clave de Java 21

- **Hilos Virtuales (Proyecto Loom)** – Concurrencia ligera y escalable con menor consumo de recursos.  
- **Coincidencia de patrones con `switch`** – Switch más expresivo y conciso, compatible con múltiples tipos.  
- **Patrones de registro (`record patterns`)** – Destructuración sencilla de registros para trabajar con sus componentes.  
- **Versión LTS** – Estabilidad y soporte extendido garantizado hasta la próxima década.  
- **Mayor productividad** – Simplificación de tareas comunes en aplicaciones concurrentes y de datos.  

---

## 🚀 Ejemplos Prácticos

### 1. Hilos Virtuales

```java
Runnable task = () -> System.out.println("Ejecutando en hilo virtual: " + Thread.currentThread());

try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    for (int i = 0; i < 5; i++) {
        executor.submit(task);
    }
}
```
## 2. Coincidencia de Patrones con switch
```java
static String format(Object obj) {
    return switch (obj) {
        case Integer i -> "Número: " + i;
        case String s  -> "Cadena: " + s.toLowerCase();
        case null      -> "Nulo";
        default        -> "Otro tipo";
    };
}
```
3. Patrones de Registro
```java
record Point(int x, int y) {}

static void printPoint(Object obj) {
    if (obj instanceof Point(int x, int y)) {
        System.out.println("Coordenadas: (" + x + ", " + y + ")");
    }
}

```
4. Combinación de Patrones en Switch
```java
record Rectangle(double width, double height) {}
record Circle(double radius) {}

static String area(Object shape) {
    return switch (shape) {
        case Rectangle(double w, double h) -> "Área rectángulo: " + (w * h);
        case Circle(double r) -> "Área círculo: " + (Math.PI * r * r);
        default -> "Forma desconocida";
    };
}

```
## 🔑 Ventajas de Java 21

Concurrencia escalable y más sencilla con hilos virtuales.

Expresividad y concisión con switch con patrones.

Mayor claridad en la manipulación de datos con patrones de registro.

Versión LTS moderna y estable, ideal para producción.

## 📌 Conclusión

Java 21 representa el futuro inmediato del ecosistema Java. Con soporte extendido y características que simplifican desde la concurrencia hasta la manipulación de datos, es la opción ideal para proyectos que buscan escalar y mantenerse alineados con las mejores prácticas actuales.

Adoptar Java 21 asegura un entorno moderno, expresivo y preparado para los retos de la próxima década.