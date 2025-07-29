import React from 'react';
/* import AppCard from './AppCard' */;
import AppCard from "../../components/FrameworkListCards/AppCard";

import { useEffect, useRef, useState } from "react";

  // Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
  { title: "React 18", filter: "React", icon: "/img/icons/react-icon.png" , descBlock:"En este apartado podemos ver aplicaciones creadas en React, Node, Express, GraphQL, Typescript, Bootstrap" },
  { title: "Angular 17", filter: "Angular", icon: "/img/icons/angular-icon.png", descBlock:"En este apartado encontrarás los disntintos modulos de angular, PWA, Pipes, Angular Materia, Primeng, directivas y con todo ello hacer una aplicación final"},
  { title: "Spring Boot", filter: "Spring Framework", icon:"/img/icons/springboot-icon.png", descBlock:"En este apartado encontras distintos temas o módulos de Spring Boot" },
  { title: "Spring Cloud Microservicios 8", filter: "Spring Cloud", icon:"/img/icons/springcloud-icon.png", descBlock:"En este apartado veremos como crear un proyecto de microservicios con Spring 8 y Gradle" },
  { title: "Proyecto Microservicios 17", filter: "Microservicios", icon:"/img/icons/springcloud-icon.png", descBlock:"Proyecto de booking de viajes con microservicios con Java 17 y Maven, Usuarios, Reservas, Hoteles, Vuelos, Alquileres, Notifiaciones y Pagos. El proyecto tiene Config-server, Discovery-service, patrón Api-gateway Keycloak y Vaulth" },
  { title: "Spring Apache Kafka", filter: "Spring KAFKA", icon:"/img/icons/kafka-icon.png", descBlock:"En este apartado veremos como comunicar microservicios de forma asíncrona con Kafka" },
  { title: "Spring RabbitMQ", filter: "Spring RabbitMQ", icon:"/img/icons/rabbitMQ-icon.png", descBlock:"En este apartado veremos como comunicar microservicios de forma asíncrona con RabbitMQ" },
  { title: "Docker", filter: "Docker", icon:"/img/icons/docker-icon.png" , descBlock:"En este apartado podemos ver que es Docker y como usarlo"},
  { title: "Kubernetes", filter: "Kubernetes", icon:"/img/icons/kubernetes-icon.png", descBlock:"Proyecto en tres capas con Spring para el BACK con APIs y react con next-js para el FRONT. El proyecto está orquestado con Kubernetes y emula una aplicación para crear POSTs con paginación y operaciones CRUD" },
  { title: "Java", filter: "Java", icon:"/img/icons/java.png", descBlock:"En este modulo podemos encontrar pcontenidos java como servicios, EJBs, patrones de diseño..." },
  { title: "Web jaoprogramador", filter: "HTML", icon:"/img/icons/html-icon.png", descBlock:"Mi primer portalweb con contenidos de programación, BDs, web..."  }
];
  
const AppTable = ({ dataFrameworks = [] }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].filter);
  const active = categories.find(cat => cat.filter === activeCategory);

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
            onClick={() => setActiveCategory(filter)}
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

