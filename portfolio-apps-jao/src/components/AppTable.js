import React from 'react';
import AppCard from './AppCard';

const apps = [
    {

      name: "Carrito de la compra",
      imageUrl: "/img/shopping-card.jpg",
      description: "Aplicación para emular un rarrito de la compra",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio",
      appUrl: "https://shoppingcard-1ry4.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {

      name: "Twitter Follow",
      imageUrl: "/img/twitterFollow.jpg",
      description: "Aplicación que contine un componente Follow como el de twitter",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",
      appUrl: "https://twitterfollow.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {

      name: "Notas con React",
      imageUrl: "/img/react-notes.jpg",
      description: "Aplicación para tomar notas con React",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-notes",
      appUrl: "https://react-xhzi.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      name: "Agenda de Personas",
      imageUrl: "/img/react-persons.jpg",  
      description: "Aplicación para gestionar contactos",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-persons",
      appUrl: "https://reactpersons.onrender.com",
      icon: "/img/react-icon.png" 

    },
    {
      name: "Agenda MongoDB",
      imageUrl: "/img/mongo-persons.jpg",  
      description: "Aplicación para gestionar contactos con front de react y back en Node-Express y MongoDB",
      technology: "React, MongoDB",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://persosmongodb.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      name: "Citas Hospital",
      imageUrl: "/img/typeScript.jpg",  
      description: "Aplicación para gestionar las entradas a un hospital con pacientes con front de react y back en Node-Express y typescript",
      technology: "React, typescript",
      repoUrl: "https://github.com/jaoprogramador/TipescriptPacientesHospital",
      appUrl: "https://tipescriptpacienteshospital.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      name: "Usuarios Blogs",
      imageUrl: "/img/react-redux-css.jpg",  
      description: "Aplicación para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",
      technology: "React, MongoDB, redux, bootstrap",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://mongouserblogsstilosmenuvar.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      name: "Angular Material",
      imageUrl: "/img/AngularMaterialDrag.jpg",  
      description: "Aplicación con angular para usar angular material y el componente drag-drop",
      technology: "Angular, angular material",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04EJANGULARMATERIAL",
      appUrl: "https://angular-material-ut7i.onrender.com/",
      icon: "/img/angular-icon.png" 
    },
    {
      name: "Angular carga perezosa",
      imageUrl: "/img/AngularCargaPerezosa.jpg",  
      description: "Aplicación con angular",
      technology: "Angular carga perezosa para optimizar el rendimiento de carga",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04ngModules",
      appUrl: "https://angular-cargaperezosamodulos.onrender.com/",
      icon: "/img/angular-icon.png" 
      
    },
    {
      name: "Workspaces",
      imageUrl: "/img/angularWorkspace.jpg",  
      description: "Aplicación con angular que está compuesta cpor un workspace con distintos proyectos",
      technology: "Angular",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/05ngWorkpsace",
      appUrl: "https://angular-workspaceproyectos.onrender.com",
      icon: "/img/angular-icon.png" 

    },
    
    {
      name: "Login Angular",
      imageUrl: "/img/angular-login.jpg",  
      description: "Aplicación con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas páginas en las que podemos ver como pasar información entre componentes. La aplicación hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes genéricos control de errores, validacion de formularios, componentes de Angular material...",
      technology: "Angular, Firebase",
      repoUrl: "https://github.com/jaoprogramador/MongoUserBlogsStilosMenuVar",
      appUrl: "https://proyecto-final-angular-42db4.web.app/login",
      icon: "/img/angular-icon.png" 

    },

    {
      name: "Spring Framework",
      imageUrl: "/img/spring-framework.jpg",  
      description: "Spring Boot, Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
      appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
      icon: "/img/springBoot-icon.png" 

    },
    {
      name: "Spring Cloud Microservicios",
      imageUrl: "/img/spring-cloud.jpg",  
      description: "Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",
      technology: "Spring Cloud",
      repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
      appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
      icon: "/img/springCloud-icon.png" 
    },
    {
      name: "Ejercicios de programación",
      imageUrl: "/img/jaoweb.jpg",  
      description: "Ejercicios de programación, BD, web...",
      technology: "HTML ",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/jaoprogramadorweb/public",
      appUrl: "https://jaoprogramadorweb.onrender.com/j2ee/index.htm",
      icon: "/img/jaoprogramador-icon.png" 
    }
  ];
  
  // Filtramos las aplicaciones por su tecnología
  const reactApps = apps.filter(app => app.technology.includes("React"));
  const angularApps = apps.filter(app => app.technology.includes("Angular"));
  const springFrameworkApps = apps.filter(app => app.technology.includes("Spring"));
  const springCloud = apps.filter(app => app.technology.includes("SpringCloud"));
  const webEstatica = apps.filter(app => app.technology.includes("HTML"));

  // Mapeo de categorías con sus respectivas tecnologías y títulos
const categories = [
  { title: "Aplicaciones en React", filter: "React", icon: "/img/icons/react-icon.png"  },
  { title: "Aplicaciones en Angular", filter: "Angular", icon: "/img/icons/angular-icon.png"  },
  { title: "Aplicaciones en Spring Boot", filter: "Spring Framework", icon:"/img/icons/springboot-icon.png" },
  { title: "Aplicaciones en Spring Cloud", filter: "Spring Cloud", icon:"/img/icons/springcloud-icon.png" },
  { title: "Web jaoprogramador", filter: "HTML", icon:"/img/icons/html-icon.png"  }
];
  
const AppTable = () => {
  return (
    <table className="app-table">
      {categories.map(({ title, filter, icon }) => {
        const filteredApps = apps.filter(app => app.technology.includes(filter));
        return (
          <React.Fragment key={title}>
            <thead>
              <tr>
                <th>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {title}
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
                  {filteredApps.map(app => (
                    <AppCard key={app.name} app={app} />
                  ))}
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

