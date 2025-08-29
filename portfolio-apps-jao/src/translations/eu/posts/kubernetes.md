---
date: "2025-08-29T17:00:00.000Z"
title: "Kubernetes para Microservicios con Spring"
tagline: "Del JAR al cluster: despliega, escala y observa tus microservicios con K8s"
preview: >-
  Kubernetes (K8s) es el estándar de facto para orquestar contenedores. Aprende qué es, cuándo conviene usarlo, ventajas y desventajas, y cómo orquestar una app de microservicios Spring paso a paso, con ejemplos y comandos básicos.
image: >-
  /images/blogs/kubernetes.jpg
---
# Kubernetes para Microservicios con Spring 🚢

Kubernetes (K8s) es una **plataforma de orquestación de contenedores** que automatiza el **despliegue, escalado, resiliencia y actualización** de tus aplicaciones.  
Se integra como anillo al dedo con **microservicios en Spring Boot**, empaquetados en **Docker**.

---

## ✅ ¿Qué es y para qué sirve Kubernetes?

- **Programa contenedores** en un **cluster** de máquinas (nodos).
- Gestiona **despliegues declarativos**, **autorreparación** (restarts), **escalado** (HPA), **rollouts** y **rollbacks**.
- Proporciona **networking** consistente, **descubrimiento de servicios** y **configuración** centralizada.
- Facilita **observabilidad** (métricas, logs, trazas) y **seguridad** (RBAC, policies).

**Úsalo para**: apps con múltiples servicios, alta disponibilidad, picos de carga, equipos independientes y CI/CD moderno.

---

## 🤔 ¿Cuándo usarlo y cuándo no?

**Úsalo si:**
- Tienes **varios microservicios** y necesitas **escalar** por componente.
- Requieres **alta disponibilidad**, **rollouts** sin downtime y **multi-entorno**/multi-cloud.
- Quieres **infra como código** y pipelines de **CI/CD** maduros.

**Piensa dos veces si:**
- Tu app es **simple/monolítica** con bajo tráfico.
- **Equipo pequeño** sin experiencia en contenedores/DevOps.
- Un **PaaS** (Cloud Run, App Service, Heroku) o **FaaS** cubre tu caso más rápido y barato.

---

## ⚖️ Ventajas y desventajas

### Ventajas
- **Portabilidad** entre clouds/on-prem.
- **Escalado automático** y **resiliencia**.
- **Rolling updates/rollbacks** declarativos.
- **Aislamiento** por namespace y políticas.

### Desventajas
- **Curva de aprendizaje** y **complejidad operativa**.
- **Coste** de cluster + observabilidad.
- Requiere **disciplina** (recursos, seguridad, backups).

---

## 🧩 Conceptos clave (mini-glosario útil)

- **Cluster**: conjunto de nodos controlados por el **control plane**.
- **Nodo**: máquina (VM/física) que ejecuta contenedores.
- **Pod**: mínima unidad desplegable (uno o más contenedores).
- **Deployment**: gestiona réplicas y actualizaciones de Pods.
- **Service**: IP/puerto estable para acceder a Pods (ClusterIP/NodePort/LoadBalancer).
- **Ingress**: reglas HTTP para exponer servicios con dominio/paths.
- **ConfigMap/Secret**: config no sensible/sensible para inyectar en Pods.
- **Volume/PersistentVolume**: datos persistentes.
- **StatefulSet**: para cargas **stateful** (orden e identidad).
- **HPA**: autoscaling por CPU/RAM/métricas personalizadas.
- **DaemonSet**: 1 Pod por nodo (agentes).
- **Job/CronJob**: trabajos batch/planificados.
- **Namespace**: segmentación lógica.
- **RBAC**: permisos por rol/usuario/SA.

---

## 🛠️ Preparación de microservicios Spring (previos recomendados)

- Añade **Spring Actuator** para `/actuator/health` (readiness/liveness).
- Externaliza config (profiles, vars de entorno).  
- Empaqueta con **Docker** o **Jib** (sin Dockerfile).
- Expone **métricas** (Micrometer/Prometheus) y **trazas** (OpenTelemetry).

---

## 🚀 Orquestar una app de microservicios Spring en Kubernetes (paso a paso)

1. **Conteneriza cada servicio**
   - Dockerfile típico:
     ```dockerfile
     FROM eclipse-temurin:21-jre
     WORKDIR /app
     COPY target/app.jar app.jar
     EXPOSE 8080
     ENTRYPOINT ["java","-jar","/app/app.jar"]
     ```
   - O usa **Jib** (sin Dockerfile).

2. **Crea un cluster local**
   - `minikube start`  ó  `kind create cluster --name demo`

3. **Sube imágenes al registry**
   - Etiqueta y push (`docker tag/push`) a Docker Hub/GHCR o usa `minikube image load`.

4. **Define manifiestos por servicio (IaC)**
   - Namespace, Deployment (recursos, probes), Service (ClusterIP), ConfigMap/Secret.

5. **Exposición HTTP**
   - Instala un **Ingress Controller** (p. ej., NGINX) y crea un **Ingress** por dominio/path.

6. **Base de datos**
   - Preferible **servicio gestionado** (cloud) o **StatefulSet** con PVC si corre en K8s.

7. **Observabilidad**
   - **Prometheus/Grafana** (métricas), **Loki/ELK** (logs), **Jaeger/Tempo** (trazas).

8. **Autoscaling y recursos**
   - Define **requests/limits** y **HPA** por servicio.

9. **CI/CD**
   - Pipeline: build → test → image push → deploy (kubectl/Helm/Kustomize).
   - Considera **GitOps** con Argo CD.

10. **Seguridad base**
    - **RBAC**, **NetworkPolicies**, **Pod Security Standards**, secrets cifrados.

---

## 📦 Manifiestos de ejemplo (users-service)

### Deployment + Service (con probes y recursos)
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: users-deploy
  labels: { app: users }
spec:
  replicas: 2
  selector:
    matchLabels: { app: users }
  template:
    metadata:
      labels: { app: users }
    spec:
      containers:
        - name: users
          image: ghcr.io/org/users:1.0.0
          ports:
            - containerPort: 8080
          env:
            - name: SPRING_PROFILES_ACTIVE
              value: k8s
            - name: DB_URL
              valueFrom:
                secretKeyRef:
                  name: users-secrets
                  key: db-url
          readinessProbe:
            httpGet: { path: /actuator/health/readiness, port: 8080 }
            initialDelaySeconds: 10
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /actuator/health/liveness, port: 8080 }
            initialDelaySeconds: 20
            periodSeconds: 10
          resources:
            requests: { cpu: "200m", memory: "256Mi" }
            limits:   { cpu: "500m", memory: "512Mi" }

---
apiVersion: v1
kind: Service
metadata:
  name: users-svc
spec:
  selector: { app: users }
  ports:
    - port: 80
      targetPort: 8080
  type: ClusterIP
```
## Ingress (NGINX) para API gateway sencillo
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$1
spec:
  rules:
    - host: api.local
      http:
        paths:
          - path: /users/?(.*)
            pathType: Prefix
            backend:
              service:
                name: users-svc
                port: { number: 80 }
```
## HPA (autoscaling por CPU)
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: users-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: users-deploy
  minReplicas: 2
  maxReplicas: 8
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```
## 🔧 Configuración de Spring para probes (Actuator)
## application-k8s.yml
```yaml
management:
  endpoints:
    web:
      exposure:
        include: "health,prometheus"
  endpoint:
    health:
      probes:
        enabled: true
server:
  port: 8080
```
## ⌨️ Comandos básicos (cheat-sheet)
```text
# contexto/namespace
kubectl config get-contexts
kubectl config use-context <ctx>
kubectl get ns
kubectl create ns demo

# aplicar/manifiestos
kubectl apply -f k8s/ -n demo
kubectl delete -f k8s/ -n demo

# inspección
kubectl get pods,svc,ingress,deploy,cm,secrets -n demo
kubectl describe pod <pod> -n demo
kubectl logs -f deploy/users-deploy -n demo

# depuración
kubectl exec -it deploy/users-deploy -n demo -- sh
kubectl port-forward svc/users-svc 8080:80 -n demo

# despliegues
kubectl rollout status deploy/users-deploy -n demo
kubectl rollout undo deploy/users-deploy -n demo
kubectl scale deploy/users-deploy --replicas=4 -n demo

# autoscaling (requiere metrics-server)
kubectl top pods -n demo
```

**Minikube** útil: minikube addons enable ingress y minikube tunnel para servicios tipo LoadBalancer.

## ✅ Buenas prácticas (lo esencial)

No uses :latest; etiqueta por versión/commit.

Define requests/limits SIEMPRE.

Probes reales con Actuator (readiness/liveness).

ConfigMaps/Secrets para configuración (no hardcode).

Rollouts canary/blue-green si el cambio es sensible (Argo Rollouts/Flagger).

Logs estructurados (JSON) y correlación de trazas.

NetworkPolicies mínimas y RBAC por entorno.

Evita meter bases de datos en Pods productivos si puedes usar un servicio gestionado.

## 🧭 ¿Algo más? (opcional pero recomendable)

Helm o Kustomize para empaquetar despliegues.

Service Mesh (Istio/Linkerd) para mTLS, rate limiting, retries/timeouts a nivel malla.

GitOps (Argo CD/Flux) para despliegues declarativos desde Git.

Pruebas con Testcontainers + perfiles K8s para integración realista.

## ✅ Conclusión
Kubernetes te da resiliencia, escalado y despliegues seguros para microservicios Spring, a cambio de complejidad que debes gestionar con buenas prácticas.
Empieza en local (minikube/kind), automatiza con CI/CD y evoluciona hacia observabilidad y GitOps.
Del JAR al cluster, sin sustos. 🚀
