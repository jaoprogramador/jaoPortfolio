---
date: "2025-09-05T17:00:00.000Z"
title: "Centralización de Logs con el Stack ELK"
tagline: "Unifica, analiza y visualiza los logs de tus microservicios. Convierte el texto simple en datos accionables."
preview: >-
  Descubre cómo implementar el famoso Stack ELK para recolectar logs de todos tus microservicios, parsearlos de forma estructurada con Logstash y visualizarlos en tiempo real con Kibana.
image: >-
  /images/blogs/elk-stack.jpg
---
# Logs Centralizados con el Stack ELK (Elasticsearch, Logstash, Kibana) 🔍

En un entorno de microservicios, **los logs dispersos son oscuridad**. Cuando un error cruza múltiples servicios, necesitas una vista centralizada.

El Stack **ELK** (Elasticsearch, Logstash, Kibana) es el **estándar de facto** para **centralización y análisis de logs** en entornos distribuidos.

En este artículo aprenderás:

✅ ¿Qué es el Stack ELK y el rol de cada componente?  
✅ ¿Cómo funciona el flujo de logs desde Spring Boot?  
✅ Cómo configurar Logstash para parsear logs estructurados.  
✅ Ejemplos de Dashboards en Kibana para el análisis de fallos.  
✅ Buenas prácticas para logs en JSON y el Agente Filebeat.  

---

## ✅ ¿Qué es el Stack ELK?

El Stack ELK es una colección de tres herramientas de código abierto diseñadas para ingerir, almacenar, analizar y visualizar datos, comúnmente logs.

### **Elasticsearch**
- **Motor de búsqueda y análisis** distribuido, basado en Apache Lucene.
- Almacena logs y datos como **documentos JSON**.
- Proporciona una API REST para búsqueda, *indexing* y análisis a escala.

### **Logstash**
- **Pipeline de ingesta de datos**.
- Recolecta datos de diversas fuentes, aplica **filtros y transformaciones** (parsear logs a JSON).
- Envía los datos transformados a Elasticsearch.

### **Kibana**
- **Herramienta de visualización y navegación**.
- Permite a los usuarios **consultar, crear *dashboards* y descubrir *patterns*** en los datos almacenados en Elasticsearch.

---

## ✅ El Flujo de Logs: De Spring Boot al Stack ELK

El flujo típico de logs desde una aplicación Spring Boot hacia ELK es:

1.  **Generación:** Spring Boot genera logs (se recomienda formato **JSON** usando Logback/Log4j).
2.  **Recolección (Filebeat):** El agente ligero **Filebeat** monitoriza los archivos de log locales (`app.log`) en cada microservicio.
3.  **Transporte:** Filebeat envía los logs al *pipeline* de Logstash.
4.  **Procesamiento (Logstash):** Logstash recibe el log, lo parsea, añade metadatos (servicio, entorno) y lo envía a Elasticsearch.
5.  **Almacenamiento (Elasticsearch):** Indexa los documentos para una búsqueda rápida.
6.  **Visualización (Kibana):** Los ingenieros analizan los datos en *dashboards* preconfigurados.

## ✅ Configuración de Logstash para Logs Estructurados

Para que los logs sean útiles, Logstash debe aplicar un filtro. Si tu aplicación usa JSON, es simple:

### Configuración de Logstash (logstash.conf)
```conf
input {
  # Recibe logs del Agente Filebeat
  beats {
    port => 5044
  }
}
filter {
  # Si el log ya está en formato JSON
  json {
    source => "message"
    remove_field => ["message"]
  }
}
output {
  # Envía al nodo de Elasticsearch
  elasticsearch {
    hosts => ["elasticsearch:9200"]
    index => "%{[@metadata][beat]}-%{[@metadata][version]}-%{+YYYY.MM.dd}"
  }
}