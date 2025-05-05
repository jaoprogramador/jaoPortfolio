import React from 'react';
/* import AppCard from './AppCard' */;
import AppCard from "../../components/FrameworkListCards/AppCard";

import { useEffect, useRef, useState } from "react";

  // Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
  { title: "React 18", filter: "React", icon: "/img/icons/react-icon.png"  },
  { title: "Angular 17", filter: "Angular", icon: "/img/icons/angular-icon.png"  },
  { title: "Spring Boot", filter: "Spring Framework", icon:"/img/icons/springboot-icon.png" },
  { title: "Spring Cloud Microservicios 17", filter: "Spring Cloud", icon:"/img/icons/springcloud-icon.png" },
  { title: "Spring Apache Kafka", filter: "Spring KAFKA", icon:"/img/icons/kafka-icon.png" },
  { title: "Spring RabbitMQ", filter: "Spring RabbitMQ", icon:"/img/icons/rabbitMQ-icon.png" },
  { title: "Docker", filter: "Docker", icon:"/img/icons/docker-icon.png" },
  { title: "Kubernetes", filter: "Kubernetes", icon:"/img/icons/kubernetes-icon.png" },
  { title: "Java", filter: "Java", icon:"/img/icons/java.png" },
  { title: "Web jaoprogramador", filter: "HTML", icon:"/img/icons/html-icon.png"  }
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

