---
date: "2025-09-12T17:00:00.000Z"
title: "Construyendo Pipelines Robustos con Jenkins y Groovy"
tagline: "Automatiza tu ciclo de vida de desarrollo. De la Integración Continua (CI) a la Entrega Continua (CD)."
preview: >-
  Descubre cómo configurar Jenkins, la herramienta de automatización open source líder, para crear Pipelines como Código (Jenkinsfile) que compilen, prueben y desplieguen tus aplicaciones Spring Boot y Docker.
image: >-
  /images/blogs/jenkins-pipeline.jpg
---
# Pipelines Robustos con Jenkins y Groovy ⚙️

**Jenkins** es la herramienta de **Integración Continua (CI)** y **Entrega Continua (CD)** más popular del mundo, actuando como el **corazón de la automatización** de tu *software*.

Su versatilidad permite automatizar desde la compilación de código hasta el despliegue en producción.

En este artículo aprenderás:**

✅ **¿Qué es Jenkins y por qué sigue siendo relevante?**  
✅ **Conceptos clave: *Jobs* vs *Pipelines* y *Agents*.**  
✅ **Cómo implementar "Pipeline as Code" (Jenkinsfile en Groovy).**  
✅ **Pasos (Stages) esenciales para aplicaciones Spring Boot y Docker.**  
✅ **Buenas prácticas para *builds* rápidos y reproducibles.**  

---

## ✅ ¿Qué es Jenkins?

Jenkins es un **servidor de automatización** de código abierto basado en Java. Su objetivo principal es monitorear ejecuciones repetitivas de tareas (como construir software, ejecutar pruebas y desplegarlo) y notificar los resultados.

### **Ventajas Clave**
- **Extensible:** Más de 1800 *plugins* para todo tipo de herramientas (Git, Maven, SonarQube, Docker, Kubernetes).
- **Control Total:** Permite una personalización profunda de los *pipelines* usando código (Groovy).
- **Comunidad:** Es la herramienta de CI con la base de usuarios más grande y activa.

---

## ✅ De Jobs a Pipeline as Code (Jenkinsfile)

### **Jobs (Estilo Clásico)**
Configuración manual a través de la interfaz web (UI). Es simple para tareas únicas pero difícil de mantener, versionar y replicar.

### **Pipelines (Declarativo/Scripted)**
Define todo el proceso de CI/CD en un archivo llamado **`Jenkinsfile`**, escrito en lenguaje Groovy, que se almacena en el repositorio de código (`git`).

* **Pipeline as Code:** Mantiene el proceso de *build* bajo **control de versiones** junto con el código de la aplicación.
* **Reproducibilidad:** Asegura que el *pipeline* sea idéntico en todos los entornos.

## ✅ Estructura de un Jenkinsfile (Declarativo)

Un `Jenkinsfile` se estructura en **Stages** (fases lógicas) que se ejecutan secuencialmente.

```groovy
// Jenkinsfile (Declarativo)
pipeline {
    // Define dónde se ejecutará el pipeline (e.g., un agente Docker)
    agent { docker { image 'maven:3.8.7-openjdk-17' } } 

    // Variables globales (opcional)
    environment {
        DOCKER_IMAGE = "my-app-repo/users-api:latest"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Obtiene el código del repositorio
                git url: '[https://github.com/my-repo/users-api.git](https://github.com/my-repo/users-api.git)', branch: 'main'
            }
        }
        stage('Build & Test') {
            steps {
                // Compila y ejecuta pruebas unitarias
                sh 'mvn clean install'
            }
        }
        stage('Docker Build') {
            steps {
                // Construye la imagen Docker
                sh "docker build -t ${DOCKER_IMAGE} ."
                // Sube la imagen a un Registry (e.g., Docker Hub, AWS ECR)
                sh "docker push ${DOCKER_IMAGE}"
            }
        }
        stage('Deploy to DEV') {
            steps {
                // Despliega en Kubernetes (ejecutando comandos kubectl)
                sh 'kubectl apply -f k8s/deployment-dev.yml'
            }
        }
    }
}