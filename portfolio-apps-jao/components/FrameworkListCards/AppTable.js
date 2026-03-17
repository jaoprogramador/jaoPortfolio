import React from 'react';
/* import AppCard from './AppCard' */;
import AppCard from "../../components/FrameworkListCards/AppCard";

import { useEffect, useRef, useState } from "react";

// Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
  { title: "React 18", filter: "React", icon: "/img/icons/react-icon.png" , descBlock:"En este apartado podemos ver aplicaciones creadas en React, Node, Express, GraphQL, Typescript, Bootstrap" },
  { title: "Angular 17", filter: "Angular", icon: "/img/icons/angular-icon.png", descBlock:"En este apartado encontrarás los disntintos modulos de angular, PWA, Pipes, Angular Materia, Primeng, directivas y con todo ello hacer una aplicación final"},
  { title: "Spring Boot", filter: "Spring Framework", icon:"/img/icons/springboot-icon.png", descBlock:"En este apartado encontras distintos temas o módulos de Spring Boot" },
  { title: "Spring Cloud Microservicios 8", filter: "Spring Cloud", icon:"/img/icons/springcloud-icon.png", descBlock:"En este apartado veremos como crear un proyecto de microservicios con Spring , java 8 y Gradle" },
  { title: "Proyecto Microservicios 17", filter: "Microservicios", icon:"/img/icons/springcloud-icon.png", descBlock:"Proyecto de booking de viajes con microservicios con Java 17 y Maven, Login-aut, Usuarios, Reservas, Hoteles, Vuelos, Alquileres, Notifiaciones y Pagos. El proyecto tiene Config-server, Discovery-service, patrón Api-gateway, Mensajería con Kafka y Rabbit, WebFlux, Keycloak, Vault, OAuth-JWT, Encriptación, Domain-Driven Design" },
  { title: "Apache Kafka", filter: "Spring KAFKA", icon:"/img/icons/kafka-icon.png", descBlock:"En este apartado veremos como comunicar microservicios de forma asíncrona con Kafka" },
  { title: "RabbitMQ", filter: "Spring RabbitMQ", icon:"/img/icons/rabbitMQ-icon.png", descBlock:"En este apartado veremos como comunicar microservicios de forma asíncrona con RabbitMQ" },
  { title: "Patrón SAGA", filter: "SAGA", icon:"/img/icons/kafka-icon.png", descBlock:"Veremos como aplicar el patrón SAGA coreografiado en 3 microservicios con java 21" },
  { title: "Spring AI", filter: "Spring IA", icon:"/img/icons/springAI-icon.png", descBlock:"En este apartado veremos como con Java 21 conectar mi proyecto con ChatGPT para hacer un API que le pregunta a ChatGPT y nos devuelve resultados" },
  { title: "Spring Security", filter: "Spring Security", icon:"/img/icons/SpringSecurity.png", descBlock:"En este apartado veremos como con Java 21 crear un microservicio securizado con JWT, encriptación de claves para acceder al ecosistema de microservicios..." },
  { title: "Observabilidad", filter: "ELK", icon:"/img/icons/ELK.png", descBlock:"En este apartado veremos como con Java 21 configurar mi API con ELK gestionar los logs con un dasboard mediante Elastic Search, logdash y Kibana" },
  { title: "Jenkins", filter: "Jenkins", icon:"/img/icons/Jenkins.png", descBlock:"En este apartado veremos como con Java 21 configurar mi API para hacer CICD mediante Jenkins" },
  { title: "Docker", filter: "Docker", icon:"/img/icons/docker-icon.png" , descBlock:"En este apartado podemos ver que es Docker y como usarlo"},
  { title: "gRPC", filter: "gRPC", icon:"/img/icons/gRPC-icon.png" , descBlock:"En este apartado podemos ver como crear un servicio gRPC cliente servidor"},
  { title: "GraphQL", filter: "GraphQL-Spring", icon:"/img/icons/GraphQL-icon.png" , descBlock:"En este apartado podemos ver como crear un servicio con GraphQL mediante mutaciones y hacer consultas dinámicas"},
  { title: "Kubernetes", filter: "Kubernetes", icon:"/img/icons/kubernetes-icon.png", descBlock:"Proyecto en tres capas con Spring para el BACK con APIs y react con next-js para el FRONT. El proyecto está orquestado con Kubernetes y emula una aplicación para crear POSTs con paginación y operaciones CRUD" },
  { title: "Java", filter: "Java", icon:"/img/icons/java.png", descBlock:"En este modulo podemos encontrar pcontenidos java como servicios, EJBs, patrones de diseño..." },
  { title: "Web jaoprogramador", filter: "HTML", icon:"/img/icons/html-icon.png", descBlock:"Mi primer portalweb con contenidos de programación, BDs, web..." }
];

const AppTable = ({ dataFrameworks = [] }) => {
  // 1. Establece la categoría inicial por defecto (la primera)
  const defaultCategory = categories[0].filter;

  // 2. Estado para la categoría activa
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  
  // 3. Hook para leer la URL y establecer la categoría inicial al montar el componente
  useEffect(() => {
    // Usamos URLSearchParams para leer de forma segura los query parameters
    const params = new URLSearchParams(window.location.search);
    const urlTema = params.get('tema');
    
    if (urlTema) {
      // Normaliza y verifica si el valor de la URL es una categoría válida
      const normalizedTema = urlTema.trim();
      const isValidCategory = categories.some(cat => cat.filter === normalizedTema);

      if (isValidCategory) {
        // Si es válido, establece esa categoría como activa
        setActiveCategory(normalizedTema);
      }
      // Opcional: Si no es válido, se mantiene la categoría por defecto
    }
    // El array de dependencias vacío [] asegura que esto solo se ejecute al montar
  }, []); 
  
  // Encontrar el objeto de la categoría activa para mostrar el título, ícono y descripción
  const active = categories.find(cat => cat.filter === activeCategory) || categories[0]; // Fallback por seguridad

  // Filtrar las aplicaciones
  const filteredApps = dataFrameworks.filter(
    app => app.technology && app.technology.includes(activeCategory)
  );

  return (
    <div className="app-table px-4">
      {/* SUBMENÚ / SUBNAV */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 border-b pb-4">
        {categories.map(({ title, filter }) => (
          <button
            key={filter}
            onClick={() => {
              setActiveCategory(filter);
              // Opcional: Actualizar la URL sin recargar la página
              window.history.pushState(null, '', `?tema=${filter}`);
            }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition border ${
              activeCategory === filter
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* TÍTULO E ÍCONO DE LA CATEGORÍA ACTIVA */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold">{active.title}</h2>
        <img src={active.icon} alt={`${active.title} icon`} className="w-6 h-6" />
      </div>

      {/* DESCRIPCIÓN DE LA CATEGORÍA */}
      {active.descBlock && (
        <p className="text-gray-600 italic mb-6">
          <strong>Contexto:</strong> {active.descBlock}
        </p>
      )}

      {/* TARJETAS */}
      <div className="flex flex-wrap gap-4 justify-start">
        {filteredApps.length > 0 ? (
          filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))
        ) : (
          <p>No hay aplicaciones en esta categoría.</p>
        )}
      </div>
    </div>
  );
};

export default AppTable;