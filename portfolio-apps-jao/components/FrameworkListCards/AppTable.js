import React from 'react';
/* import AppCard from './AppCard' */;
import AppCard from "../../components/FrameworkListCards/AppCard";

import { useEffect, useRef, useState } from "react";

  // Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
  { title: "React", filter: "React", icon: "/img/icons/react-icon.png"  },
  { title: "Angular", filter: "Angular", icon: "/img/icons/angular-icon.png"  },
  { title: "Spring Boot", filter: "Spring Framework", icon:"/img/icons/springboot-icon.png" },
  { title: "Spring Cloud", filter: "Spring Cloud", icon:"/img/icons/springcloud-icon.png" },
  { title: "Java", filter: "Java", icon:"/img/icons/java.png" },
  { title: "Web jaoprogramador", filter: "HTML", icon:"/img/icons/html-icon.png"  }
];
  
/* const AppTable = ({ apps } ) => { */
const AppTable = ({ dataFrameworks = [] }) => {
  
  const text = useRef();
  console.log('AppTable:', );

  return (
    <table className="app-table">
      {categories.map(({ title, filter, icon }) => {
        //const filteredApps = apps.filter(app => app.technology.includes(filter));
        const filteredApps = dataFrameworks.filter(app => app.technology && app.technology.includes(filter));

        return (
          <React.Fragment key={title}>
            <thead>
              <tr>
                <th>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {/* <h1 ref={text}>{title}</h1>   className="mt-5 text-4xl"*/}
                  <h1 className="mt-5 text-4xl">{title}</h1>
                    <img 
                      src={icon} 
                      alt={`${title} icon`} 
                      style={{ width: '24px', height: '24px' }} 
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  
                  {filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                      <AppCard key={app.name} app={app} />
                    ))
                  ) : (
                    <p>No hay aplicaciones en esta categoría.</p>
                  )}
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        );
      })}
    </table>
  );
};

export default AppTable;

