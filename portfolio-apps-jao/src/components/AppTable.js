import React from 'react';
import AppCard from './AppCard';

/* const apps = [
  // R E A C T
// ###########
  {

    //name: "Twitter Follow",
    name: "Componente simple",
    imageUrl: "/img/twitterFollow.jpg",
    description: "Aplicación que contine un componente Follow como el de twitter",
    technology: "React",
    repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",
    appUrl: "https://twitterfollow.onrender.com/",
    icon: "/img/react-icon.png" 

  },
    {

      //name: "Carrito de la compra",
      name: "Componente complejo",
      imageUrl: "/img/shopping-card.jpg",
      description: "Aplicación para emular un rarrito de la compra",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio",
      appUrl: "https://shoppingcard-1ry4.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    
    {

      //name: "Notas con React",
      name: "Node, Express",
      imageUrl: "/img/react-notes.jpg",
      description: "Aplicación para tomar notas con React",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-notes",
      appUrl: "https://react-xhzi.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      //name: "Agenda de Personas",
      name: "Node-Express",
      imageUrl: "/img/react-persons.jpg",  
      description: "Aplicación para gestionar contactos",
      technology: "React, Express",
      repoUrl: "https://github.com/tu-usuario/react-persons",
      appUrl: "https://reactpersons.onrender.com",
      icon: "/img/react-icon.png" 

    },
    {
      //name: "Agenda MongoDB",
      name: "MongoDB",
      imageUrl: "/img/mongo-persons.jpg",  
      description: "Aplicación para gestionar contactos con front de react y back en Node-Express y MongoDB",
      technology: "React, MongoDB",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://persosmongodb.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      //name: "Librería Autores",
      name: "Graphql",
      imageUrl: "/img/react-Graphql.jpg",  
      description: "Aplicación para gestionar los libros y autores de una librería con Graphql y FRONT en react",
      technology: "React, Graphql",
      repoUrl: "https://github.com/jaoprogramador/JAOReactGraphql",
      appUrl: "https://jaoreactgraphqlfront.onrender.com//",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\graphql

    },
    {
      //name: "Citas Hospital",
      name: "Typescript",
      imageUrl: "/img/typeScript.jpg",  
      description: "Aplicación para gestionar las entradas a un hospital con pacientes con front de react y back en Node-Express y typescript",
      technology: "React, typescript",
      repoUrl: "https://github.com/jaoprogramador/TipescriptPacientesHospital",
      appUrl: "https://tipescriptpacienteshospital.onrender.com/",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\TipescriptPacientesHospital

    },
    {
      //name: "Usuarios Blogs",
      name: "Bootstrap-Redux",
      imageUrl: "/img/react-redux-css.jpg",  
      description: "Aplicación para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",
      technology: "React, MongoDB, redux, bootstrap",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://mongouserblogsstilosmenuvar.onrender.com/",
      icon: "/img/react-icon.png" 

    },
    {
      //name: "Repositorios , revisiones, usuarios",
      name: "React nativo",
      imageUrl: "/img/react-native.jpg",  
      description: "Aplicación para gestionar usuarios y sus repositorios de GitHub con react nativo y GraphQL",
      technology: "React native, GraphQL",
      repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte10Reactnativo/dProbaryampliarnuestraaplicacion",
      appUrl: "#",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte10Reactnativo\dProbaryampliarnuestraaplicacion
      

    },
    {
      //name: "Pokemon cards",
      name: "github action",
      imageUrl: "/img/react-CICD.jpg",  
      description: "Aplicación para visualizar los pokemon con react y gestionar los despliegues y tareas de test con github action , CI-CD",
      technology: "React, CI-CD, webpack",
      repoUrl: "https://github.com/jaoprogramador/EjemploCICD",
      appUrl: "https://ejemplocicd.onrender.com/",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\EjemploCICD"

    },
	{
      //name: "Hospital citas",
      name: "CI-CD",
      imageUrl: "/img/typeScript.jpg",  
      description: "Aplicación para gestionar las entradas a un hospital con pacientes con front de react, back en Node-Express y typescript y gestionar los despliegues y tareas de test con github action , CI-CD",
      technology: "React, CI-CD, webpack",
      repoUrl: "https://github.com/jaoprogramador/my-ci-cd-app/",
      appUrl: "https://my-ci-cd-app.onrender.com/",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\my-ci-cd-app

    },
    //BD
    {
      //name: "Notas - Blogs - Usuarios",
      name: "BD relacional con PostgresSQL",
      imageUrl: "/img/react-bd-relacional.jpg",  
      description: "Aplicación para gestionar usuarios - notas y blogs, back en Node-Express y BD relacional con PostgresSQL en RENDER",
      technology: "React, PostgresSQL, BD Relacional",
      repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/blob/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/b%20Unir%20tablas%20y%20consultas/notes/",
      appUrl: "https://notaspostgresql.onrender.com/api/notes?important=true",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte 13 Utilizando bases de datos relacionales\b Unir tablas y consultas

    },
    //MIGRACION BD
    {
      //name: "Notas - Blogs - Usuarios",
      name: "Migraciones",
      imageUrl: "/img/react-bd-Migracion.jpg",  
      description: "Aplicación para gestionar usuarios - notas y blogs, back en Node-Express y migraciones en BD",
      technology: "React, PostgresSQL, BD Relacional",
      repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",
      appUrl: "#",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte 13 Utilizando bases de datos relacionales\c Migraciones, relaciones de muchos-a-muchos

    },
// A N G U L A R
// ################
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
    //PWA HOLAJAO
    {
      name: "PWA",
      imageUrl: "/img/AngularPipes.jpg",  
      description: "Aplicación con angular PWA",
      technology: "Angular",
      repoUrl: "",
      appUrl: "",
      icon: "/img/angular-icon.png" 

    },
    //FORMS Router6
    {
      name: "FORMS",
      imageUrl: "/img/AngularForms.jpg",  
      description: "Aplicación con angular FORMS",
      technology: "Angular",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
      appUrl: "#",
      icon: "/img/angular-icon.png" 

    },
    //PIPES HOLAJAO
    {
      name: "PIPES",
      imageUrl: "/img/AngularPipes.jpg",  
      description: "Aplicación con angular PIPES",
      technology: "Angular",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",
      appUrl: "#",
      icon: "/img/angular-icon.png" 

    },
    //RxJS
    {
      name: "RxJS",
      imageUrl: "/img/AngularRxJS.jpg",  
      description: "Aplicación con angular RxJS",
      technology: "Angular",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/06RxJS",
      appUrl: "#",
      icon: "/img/angular-icon.png" 

    },
    {
      name: "Login Angular",
      imageUrl: "/img/angular-login.jpg",  
      description: "Aplicación con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas páginas en las que podemos ver como pasar información entre componentes. La aplicación hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes genéricos control de errores, validacion de formularios, componentes de Angular material...",
      technology: "Angular, Firebase",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
      appUrl: "https://proyecto-final-angular-42db4.web.app/login",
      icon: "/img/angular-icon.png" 

    },
// S P R I N G
// ###########    
    {
      name: "Spring Framework",
      imageUrl: "/img/spring-framework.jpg",  
      description: "Spring Boot, Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
      appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
      icon: "/img/springBoot-icon.png" 

    },
    //BEAN
    {
      name: "Spring BEAN",
      imageUrl: "/img/spring-JBEANS.jpg",  
      description: "Spring Boot, Beans",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/1EjeSpringBeans",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //DATA
    {
      name: "Spring DATA",
      imageUrl: "/img/spring-DATA.jpg",  
      description: "Spring Boot, Data, JPA",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/2EjeSpringDataJPA",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //MVC
    {
      name: "Spring MVC",
      imageUrl: "/img/spring-REST.jpg",  
      description: "Spring Boot, MVC, Rest",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //Security
    {
      name: "Spring Security",
      imageUrl: "/img/spring-SECURITY.jpg",  
      description: "Spring Boot, Security",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //JWT
    {
      name: "JWT",
      imageUrl: "/img/SpringJWT.jpg",  
      description: "Spring Boot, Security, JWT",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/7SpringSecurityJWT",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //Oauth
    {
      name: "OAuth",
      imageUrl: "/img/spring-OAuth.jpg",  
      description: "Spring Boot, Security, Oauth",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/8SecurityOauthGithub",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //SWAGGER
    {
      name: "Swagger",
      imageUrl: "/img/spring-SWAGGER.jpg",  
      description: "Spring Boot, Swagger, DATA, JPA, REST",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    //CONTROL DE EXCEPCIONES
    {
      name: "ControlExcepciones",
      imageUrl: "/img/spring-ControlExcepciones.jpg",  
      description: "Spring Boot, REST, Control de Excepciones",
      technology: "Spring Framework ",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/13CrtlExcepcionesRoles",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    {//
      name: "Spring Cloud Microservicios",
      imageUrl: "/img/spring-cloud.jpg",  
      description: "Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",
      technology: "Spring Cloud",
      repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
      appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
      icon: "/img/springCloud-icon.png" 
    },

    //Patrones de diseño
    {
      name: "Patrones de diseño",
      imageUrl: "/img/JavaPatters.jpg",  
      description: "Patrones de diseño, Adapter, Singleton, Build, Facade, ",
      technology: "Java",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/11SecuritySpring-patterns",
      appUrl: "#",
      icon: "/img/springBoot-icon.png" 

    },
    {
      name: "Java",
      imageUrl: "/img/WS-RestSOAPUI.jpg",  
      description: "Servicios Rest que valida un DNI",
      technology: "Java",
      repoUrl: "https://github.com/jaoprogramador/RestDNI",
      appUrl: "https://github.com/jaoprogramador/RestDNI",
      icon: "/img/java.png" 
    },
    {
      name: "Servicio SOAP",
      imageUrl: "/img/WS-RestSOAPUI.jpg",  
      description: "Servicios SOAP que sube ficheros al servidor",
      technology: "Java",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
      appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
      icon: "/img/java.png" 
    },
    {
      name: "EJB",
      imageUrl: "/img/EJB.jpg",  
      description: "EJB Sesión, Entidad",
      technology: "Java",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",
      appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",
      icon: "/img/java.png" 
    },
    {
      name: "log4j",
      imageUrl: "/img/JavaLog4j.jpg",  
      description: "Java, log4j",
      technology: "Java",
      repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
      appUrl: "#",
      icon: "/img/java.png" 
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
  ]; */
  
  // Filtramos las aplicaciones por su tecnología
  /* const reactApps = apps.filter(app => app.technology.includes("React"));
  const angularApps = apps.filter(app => app.technology.includes("Angular"));
  const springFrameworkApps = apps.filter(app => app.technology.includes("Spring"));
  const springCloud = apps.filter(app => app.technology.includes("SpringCloud"));
  const java = apps.filter(app => app.technology.includes("Java"));
  const webEstatica = apps.filter(app => app.technology.includes("HTML")); */

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
const AppTable = ({ apps = [] }) => {
  console.log('AppTable:', apps);

  return (
    <table className="app-table">
      {categories.map(({ title, filter, icon }) => {
        //const filteredApps = apps.filter(app => app.technology.includes(filter));
        const filteredApps = apps.filter(app => app.technology && app.technology.includes(filter));

        return (
          <React.Fragment key={title}>
            <thead>
              <tr>
                <th>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <h2>{title}</h2>
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
                  {/* {filteredApps.map(app => (
                    <AppCard key={app.name} app={app} />
                  ))} */}
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

