import React from 'react';
import AppCard from './AppCard';

const apps = [
    {

      name: "Carrito de la compra",
      imageUrl: "/img/shopping-card.jpg",
      description: "Aplicación para emular un rarrito de la compra",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio",
      appUrl: "https://shoppingcard-1ry4.onrender.com/"
    },
    {

      name: "Twitter Follow",
      imageUrl: "/img/twitterFollow.jpg",
      description: "Aplicación que contine un componente Follow como el de twitter",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",
      appUrl: "https://twitterfollow.onrender.com/"
    },
    {

      name: "Notas con React",
      imageUrl: "/img/react-notes.jpg",
      description: "Aplicación para tomar notas con React",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-notes",
      appUrl: "https://react-xhzi.onrender.com/"
    },
    {
      name: "Agenda de Personas",
      imageUrl: "/img/react-persons.jpg",  
      description: "Aplicación para gestionar contactos",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-persons",
      appUrl: "https://reactpersons.onrender.com"
    },
    {
      name: "Agenda MongoDB",
      imageUrl: "/img/mongo-persons.jpg",  
      description: "Aplicación para gestionar contactos con front de react y back en Node-Express y MongoDB",
      technology: "React, MongoDB",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://persosmongodb.onrender.com/"
    },
    {
      name: "Agenda MongoDB",
      imageUrl: "/img/typeScript.jpg",  
      description: "Aplicación para gestionar las entradas a un hospital con pacientes con front de react y back en Node-Express y typescript",
      technology: "React, typescript",
      repoUrl: "https://github.com/jaoprogramador/TipescriptPacientesHospital",
      appUrl: "https://tipescriptpacienteshospital.onrender.com/"
    },
    {
      name: "Usuarios Blogs",
      imageUrl: "/img/react-redux-css.jpg",  
      description: "Aplicación para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",
      technology: "React, MongoDB, redux, bootstrap",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://mongouserblogsstilosmenuvar.onrender.com/"
    },
    {
      name: "Login Angular",
      imageUrl: "/img/angular-login.jpg",  
      description: "Aplicación con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas páginas en las que podemos ver como pasar información entre componentes. La aplicación hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes genéricos control de errores, validacion de formularios, componentes de Angular material...",
      technology: "Angular, Firebase",
      repoUrl: "https://github.com/jaoprogramador/MongoUserBlogsStilosMenuVar",
      appUrl: "https://proyecto-final-angular-42db4.web.app/login"
    },
    {
      name: "Spring Framework",
      imageUrl: "/img/spring-framework.jpg",  
      description: "Spring Boot, Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
      appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp"
    },
    {
      name: "Spring Cloud Microservicios",
      imageUrl: "/img/spring-cloud.jpg",  
      description: "Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",
      technology: "Spring Cloud",
      repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
      appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios"
    },
    {
      name: "Ejercicios de programación",
      imageUrl: "/img/jaoweb.jpg",  
      description: "Ejercicios de programación, BD, web...",
      technology: "HTML ",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/jaoprogramadorweb/public",
      appUrl: "https://jaoprogramadorweb.onrender.com/j2ee/index.htm"
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
  { title: "Aplicaciones en React", filter: "React" },
  { title: "Aplicaciones en Angular", filter: "Angular" },
  { title: "Aplicaciones en Spring Boot", filter: "Spring Framework" },
  { title: "Aplicaciones en Spring Cloud", filter: "Spring Cloud" },
  { title: "Web jaoprogramador", filter: "HTML" }
];
  
const AppTable = () => {
  return (
    <table className="app-table">
      {categories.map(({ title, filter }) => {
        const filteredApps = apps.filter(app => app.technology.includes(filter));
        return (
          <React.Fragment key={title}>
            <thead>
              <tr>
                <th>{title}</th>
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

