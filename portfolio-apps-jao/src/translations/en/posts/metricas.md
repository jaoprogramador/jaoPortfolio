---
date: "2025-08-29T17:00:00.000Z"
title: "Monitoreo de Microservicios con Prometheus y Grafana"
tagline: "De la teoría a la práctica. Observa tu sistema en tiempo real con métricas claras y visualizaciones potentes"
preview: >-
  Descubre cómo implementar un sistema de observabilidad con Prometheus y Grafana en tus microservicios Spring Boot. Aprende qué métricas recolectar, cómo configurarlas y construir dashboards y alertas efectivas.
image: >-
  /images/blogs/prometheus-grafana.jpg
---
# Monitoreo de Microservicios con Prometheus y Grafana 📊

En arquitecturas distribuidas, **lo que no se mide no se mejora**.  
Prometheus y Grafana son el **estándar de facto** para **monitoreo de métricas y visualización** en entornos modernos con **Kubernetes** y **Spring Boot**.

En este artículo aprenderás:

✅ ¿Qué son Prometheus y Grafana y para qué sirven?  
✅ ¿Por qué las métricas son clave en microservicios?  
✅ Cómo integrarlos con Spring Boot  
✅ Ejemplos de métricas y dashboards  
✅ Buenas prácticas y alertas  

---

## ✅ ¿Qué son Prometheus y Grafana?

### **Prometheus**
- **Sistema de monitoreo y alertas** open source.
- Recolecta métricas mediante **pull** (scraping HTTP).
- Guarda datos en **serie temporal**.
- Usa **PromQL** para consultas y alertas.

### **Grafana**
- Herramienta de **visualización y análisis**.
- Crea **dashboards dinámicos** sobre Prometheus (y otras fuentes).
- Soporta **alertas** y notificaciones (Slack, email, PagerDuty).

---

## ✅ ¿Por qué necesitas métricas en microservicios?

- **Detección temprana** de fallos (errores, saturación).
- **Escalado proactivo** (HPA basado en métricas).
- **SLIs/SLOs/SLAs** claros (latencia, disponibilidad).
- **Optimización** de performance y costos.

**Tipos comunes de métricas (Golden Signals):**
- **Latencia** (request duration)
- **Tráfico** (requests por segundo)
- **Errores** (rate de errores HTTP 4xx/5xx)
- **Saturación** (uso de CPU, memoria, hilos)

---

## ✅ Integración con Spring Boot (Micrometer + Actuator)

Spring Boot integra **Micrometer**, un facade para sistemas de métricas (Prometheus, Datadog, etc.).

### Dependencias Maven
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
```

## Configuración en application.yml
```yml
management:
  endpoints:
    web:
      exposure:
        include: "health,metrics,prometheus"
  endpoint:
    prometheus:
      enabled: true
```

Esto habilita /actuator/prometheus con métricas listas para Prometheus.

## ✅ Ejemplo de métricas expuestas

# HELP http_server_requests_seconds  
# TYPE http_server_requests_seconds_summary
http_server_requests_seconds_count{method="GET",uri="/api/users",status="200",} 15.0
# HELP jvm_memory_used_bytes  
# TYPE jvm_memory_used_bytes gauge
jvm_memory_used_bytes{area="heap"} 1.234e+07


Incluye:

HTTP (latencia, count por endpoint)

JVM (memoria, GC, hilos)

Base de datos (con Hikari)

Custom (negocio con @Timed o MeterRegistry)

## ✅ Instalación de Prometheus y Grafana (Kubernetes)
### Prometheus (Deployment y ConfigMap básico)
```yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    global:
      scrape_interval: 15s
    scrape_configs:
      - job_name: 'spring-apps'
        metrics_path: '/actuator/prometheus'
        kubernetes_sd_configs:
          - role: pod
        relabel_configs:
          - source_labels: [__meta_kubernetes_pod_label_app]
            regex: (.+)
            target_label: app
```
```yml
Deployment:
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prometheus
spec:
  replicas: 1
  selector:
    matchLabels: { app: prometheus }
  template:
    metadata:
      labels: { app: prometheus }
    spec:
      containers:
        - name: prometheus
          image: prom/prometheus:v2.46.0
          ports: [{ containerPort: 9090 }]
          volumeMounts:
            - name: config
              mountPath: /etc/prometheus
      volumes:
        - name: config
          configMap:
            name: prometheus-config
```
## Grafana

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grafana
spec:
  replicas: 1
  selector:
    matchLabels: { app: grafana }
  template:
    metadata:
      labels: { app: grafana }
    spec:
      containers:
        - name: grafana
          image: grafana/grafana:10.0.0
          ports: [{ containerPort: 3000 }]
```
## ✅ Dashboards recomendados en Grafana

Spring Boot Statistics (oficial).

JVM (Micrometer).

HTTP Server Requests (por endpoint).

HikariCP (conexiones DB).

Custom métricas de negocio.

Importa dashboards desde grafana.com/dashboards

## ✅ Alertas con Prometheus

Ejemplo de regla (latencia > 500ms por 5 min):
```yml
groups:
  - name: latency-alerts
    rules:
      - alert: HighRequestLatency
        expr: histogram_quantile(0.95, sum(rate(http_server_requests_seconds_bucket[5m])) by (le))
          > 0.5
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "Latencia alta (p95 > 500ms)"
```

## Conecta a Alertmanager y envía a Slack/Email.

✅ Comandos básicos para Prometheus/Grafana
# Prometheus
kubectl port-forward svc/prometheus 9090:9090 -n monitoring
# Grafana
kubectl port-forward svc/grafana 3000:3000 -n monitoring


Login default Grafana: admin/admin.

## ✅ Buenas prácticas

✔ Define métricas personalizadas para eventos críticos (MeterRegistry).
✔ Usa histogramas y percentiles (p95/p99) en vez de promedios.
✔ Configura scrape_interval adecuado (no abuses del cluster).
✔ Establece SLIs y SLOs medibles (ej. error_rate < 1%).
✔ Automatiza dashboards y alertas (Infra as Code, Grafana Provisioning).

## ✅ ¿Algo extra? (si buscas observabilidad completa)

Logs centralizados: Loki, ELK.

Trazas distribuidas: OpenTelemetry + Tempo/Jaeger.

Service Mesh: métricas automáticas (Istio/Linkerd).

## ✅ Conclusión

Prometheus + Grafana te dan visibilidad total sobre tus microservicios.
Con estas herramientas podrás detectar problemas antes de que los usuarios los sufran, optimizar recursos y cumplir con SLOs.
Monitorear no es opcional, es estratégico. 🚀