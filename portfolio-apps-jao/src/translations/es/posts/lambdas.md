---
date: "2025-09-18T17:00:00.000Z"
title: Java 8
tagline: Domina Lambda, Streams y las principales novedades de Java 8
preview: >-   
    Java 8 introdujo un conjunto de características que revolucionaron la forma en que escribimos código en Java. Esta guía cubre expresiones Lambda, API de Streams, interfaces funcionales, Optional, la nueva API de fecha y hora, y mucho más. Ideal para principiantes, entrevistas técnicas y para quienes migran desde Java 7.
image: >-
    /images/blogs/lambdas.jpg
---
# Guía Completa de Java 8

Java 8 marcó un antes y un después en el ecosistema Java. Sus características principales permiten escribir código más limpio, expresivo y conciso.  

## ✅ Características Clave de Java 8

- **Expresiones Lambda** – Sintaxis compacta para implementar interfaces funcionales.
- **API de Streams** – Procesamiento de colecciones de datos de forma declarativa.
- **Interfaces funcionales** – Contratos con un solo método abstracto, como `Predicate`, `Function`, `Consumer`.
- **Referencias de métodos** – Reutilización de métodos existentes de forma elegante.
- **Métodos predeterminados y estáticos en interfaces** – Mayor flexibilidad para evolucionar APIs.
- **Clase `Optional`** – Manejo seguro de valores nulos.
- **API de fecha y hora (`java.time`)** – Mejor control de fechas y zonas horarias.
- **Collectors y mejoras en Map** – Reducción de código repetitivo y más operaciones funcionales.

---

## 🚀 Ejemplos Prácticos

### 1. Ejemplo básico con Lambda
```java
Runnable r = () -> System.out.println("Hello, Lambda!");
new Thread(r).start();
```

### 2. Iterando una lista

```java
List<String> list = Arrays.asList("Java", "Spring", "Lambda");
list.forEach(item -> System.out.println(item));

```

### 3. Filtrando una lista con Streams

```java
List<String> list = Arrays.asList("Java", "JavaScript", "Python");
List<String> filteredList = list.stream()
    .filter(s -> s.startsWith("J"))
    .collect(Collectors.toList());
filteredList.forEach(System.out::println);

```
### 4. Ordenando con Lambda

```java
List<String> list = Arrays.asList("Java", "Lambda", "Kafka");
list.sort((s1, s2) -> s1.compareTo(s2));
list.forEach(System.out::println);

```
### 5. Interfaz Funcional Personalizada

```java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

public static void main(String[] args) {
    Calculator add = (a, b) -> a + b;
    Calculator multiply = (a, b) -> a * b;

    System.out.println("Addition: " + add.calculate(5, 3));
    System.out.println("Multiplication: " + multiply.calculate(5, 3));
}

```
### 6. Iteración de un Map

```java
Map<String, Integer> map = new HashMap<>();
map.put("Java", 8);
map.put("Spring", 5);
map.put("Lambda", 1);

map.forEach((key, value) -> System.out.println(key + ": " + value));

```
### 7. Crear hilos con Lambda

```java
new Thread(() -> System.out.println("Thread with Lambda")).start();

```
### 8. Uso de Comparator con Referencia de Método

```java
List<String> list = Arrays.asList("Java", "Lambda", "Kafka");
list.sort(Comparator.comparingInt(String::length));
list.forEach(System.out::println);

```
### 9. Uso de Optional

```java
Optional<String> optional = Optional.of("Java");
optional.ifPresent(s -> System.out.println("Value is present: " + s));

```
### 10. Predicados y Funciones Comunes

```java
Predicate<String> isEmpty = s -> s.isEmpty();
System.out.println(isEmpty.test(""));    // true
System.out.println(isEmpty.test("Java")); // false

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(2, 3)); // 5

Consumer<String> print = s -> System.out.println(s);
print.accept("Hello, World!");

Supplier<String> supplier = () -> "Java";
System.out.println(supplier.get()); // Java

```
### 11. Operadores y Transformaciones
```java
Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Lambda")); // 6

UnaryOperator<Integer> square = x -> x * x;
System.out.println(square.apply(5)); // 25

BinaryOperator<Integer> multiply = (a, b) -> a * b;
System.out.println(multiply.apply(2, 3)); // 6

```
### 12. Streams Avanzados
```java
List<String> list = Arrays.asList("java", "spring", "lambda");
List<String> upperList = list.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
upperList.forEach(System.out::println);

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
System.out.println("Sum: " + sum); // 15

```

📅 API de Fecha y Hora en Java 8


```java
LocalDate today = LocalDate.now();
LocalDate nextWeek = today.plusWeeks(1);
System.out.println("Hoy: " + today);
System.out.println("La próxima semana: " + nextWeek);

LocalDateTime now = LocalDateTime.now();
System.out.println("Fecha y hora actual: " + now);

```
🔑 Ventajas de Java 8

Código más conciso y legible.

Facilita la programación funcional.

Reduce el boilerplate.

Mayor facilidad para procesamiento en paralelo con parallelStream().

📌 Conclusión

Dominar las características de Java 8 es esencial para cualquier desarrollador moderno de Java. Sus expresiones Lambda, Streams y mejoras en APIs facilitan la escritura de código limpio, eficiente y fácil de mantener.

Explorar estas características y practicarlas en proyectos reales es la mejor forma de sacarles el máximo provecho.


