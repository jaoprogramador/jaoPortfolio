---
date: "2025-01-09T17:00:00.000Z"
title: Introducción a AWS
tagline: Descubre el poder de la computación en la nube con Amazon Web Services.
preview: >-
  AWS proporciona una plataforma en la nube escalable, confiable y rentable.
  Aprende lo básico, incluyendo seguridad con MFA, uso de AWS CLI, EC2 para computación,
  S3 para almacenamiento, RDS para bases de datos y Lambda para funciones sin servidor.
image: >-
  https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80
---

# Introducción a AWS

Amazon Web Services (**AWS**) es una plataforma en la nube integral que ofrece más de 200 servicios completamente funcionales para computación, almacenamiento, bases de datos, aprendizaje automático y más. AWS permite a las empresas escalar de manera eficiente y segura.

## ¿Por qué elegir AWS?

1. **Escalabilidad**: Expande tus aplicaciones fácilmente con recursos como EC2 y S3.
2. **Infraestructura Global**: Implementa servicios en múltiples regiones y zonas de disponibilidad.
3. **Seguridad**: Seguridad de primer nivel, incluyendo autenticación multifactor (MFA) y cifrado.
4. **Pago por Uso**: Solo pagas por los recursos que consumes.

---

## Conceptos Clave en AWS

### Autenticación Multifactor (MFA)
La seguridad es una prioridad en AWS. MFA añade una capa extra de protección a tu cuenta.

- **Configurar MFA**:
  1. Accede a la **Consola IAM**.
  2. Selecciona tu usuario y haz clic en "Credenciales de Seguridad".
  3. Agrega un dispositivo MFA (ejemplo: App Autenticadora o token de hardware).

Esto garantiza que, incluso si tus credenciales se ven comprometidas, se impida el acceso no autorizado.

---

### Interfaz de Línea de Comandos de AWS (AWS CLI)
La **AWS CLI** te permite administrar los servicios de AWS de forma programática. Aquí te explicamos cómo configurarla:

1. **Instalar la CLI**:
   - Descárgala desde el [sitio oficial](https://aws.amazon.com/cli/).
2. **Configurar la CLI**:
   ```bash
   aws configure
