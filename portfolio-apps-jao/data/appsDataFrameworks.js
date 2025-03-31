const apps = [
    // R E A C T
  // ###########
    {
  
      //name: "Twitter Follow",
      name: "Componente simple",
      imageUrl: "/img/react/twitterFollow.jpg",
      description: "Aplicación que contine un componente Follow como el de twitter",
      technology: "React",
      repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",
      appUrl: "https://twitterfollow.onrender.com/",
      icon: "/img/react-icon.png" 
  
    },
      {
  
        //name: "Carrito de la compra",
        name: "Componente complejo",
        imageUrl: "/img/react/shopping-card.jpg",
        description: "Aplicación para emular un rarrito de la compra",
        technology: "React",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio",
        appUrl: "https://shoppingcard-1ry4.onrender.com/",
        icon: "/img/react-icon.png" 
  
      },
      {
  
        //name: "Tecnica Scraping",
        name: "Tecnica Scraping",
        imageUrl: "/img/react/react-scraping.jpg",
        description: "Aplicación que nos muestra como hacer una captura json de la info de una web",
        technology: "React",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/scrappingEjemplo",
        appUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/scrappingEjemplo",
        icon: "/img/react-icon.png" 
  
      },
      
      {
  
        //name: "Notas con React",
        name: "Node, Express",
        imageUrl: "/img/react/react-notes.jpg",
        description: "Aplicación para tomar notas con React",
        technology: "React, Express",
        repoUrl: "https://github.com/tu-usuario/react-notes",
        appUrl: "https://react-xhzi.onrender.com/",
        icon: "/img/react-icon.png" 
  
      },
      {
        //name: "Agenda de Personas",
        name: "Node-Express",
        imageUrl: "/img/react/react-persons.jpg",  
        description: "Aplicación para gestionar contactos",
        technology: "React, Express",
        repoUrl: "https://github.com/tu-usuario/react-persons",
        appUrl: "https://reactpersons.onrender.com",
        icon: "/img/react-icon.png" 
  
      },
      {
        //name: "Agenda MongoDB",
        name: "MongoDB",
        imageUrl: "/img/react/mongo-persons.jpg",  
        description: "Aplicación para gestionar contactos con front de react y back en Node-Express y MongoDB",
        technology: "React, MongoDB",
        repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
        appUrl: "https://persosmongodb.onrender.com/",
        icon: "/img/react-icon.png" 
  
      },
      {
        //name: "Librería Autores",
        name: "Graphql",
        imageUrl: "/img/react/react-Graphql.jpg",  
        description: "Aplicación para gestionar los libros y autores de una librería con Graphql y FRONT en react",
        technology: "React, Graphql",
        repoUrl: "https://github.com/jaoprogramador/JAOReactGraphql",
        appUrl: "https://jaoreactgraphqlfront.onrender.com/",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\graphql
  
      },
      {
        //name: "Citas Hospital",
        name: "Typescript",
        imageUrl: "/img/react/typeScript.jpg",  
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
        imageUrl: "/img/react/react-redux-css.jpg",  
        description: "Aplicación para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",
        technology: "React, MongoDB, redux, bootstrap",
        repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
        appUrl: "https://mongouserblogsstilosmenuvar.onrender.com/",
        icon: "/img/react-icon.png" 
  
      },
      {
        //name: "Repositorios , revisiones, usuarios",
        name: "React nativo",
        imageUrl: "/img/react/react-native.jpg",  
        description: "Aplicación para gestionar usuarios y sus repositorios de GitHub con react nativo y GraphQL",
        technology: "React native, GraphQL",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/ReactNativo",
        appUrl: "https://rate-repository-front.onrender.com/",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte10Reactnativo\dProbaryampliarnuestraaplicacion
        
  
      },
      {
        //name: "Pokemon cards",
        name: "github action",
        imageUrl: "/img/react/react-CICD.jpg",  
        description: "Aplicación para visualizar los pokemon con react y gestionar los despliegues y tareas de test con github action , CI-CD",
        technology: "React, CI-CD, webpack",
        repoUrl: "https://github.com/jaoprogramador/EjemploCICD",
        appUrl: "https://ejemplocicd.onrender.com/",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\EjemploCICD"
  
      },
      {
        //name: "Hospital citas",
        name: "CI-CD Actions",
        imageUrl: "/img/react/typeScript.jpg",  
        description: "Aplicación para gestionar las entradas a un hospital con pacientes con front de react, back en Node-Express y typescript y gestionar los despliegues y tareas de test con github action , CI-CD",
        technology: "React, CI-CD, webpack",
        repoUrl: "https://github.com/jaoprogramador/my-ci-cd-app/",
        appUrl: "https://my-ci-cd-app.onrender.com/",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\my-ci-cd-app
  
      },
      {
      //name: "Hospital citas",
      name: "Contenedores Dockerfile",
      imageUrl: "/img/react/react-Docker.jpg",  
      description: "Aplicación para como gestionar un contenedor por medio de docker",
      technology: "React, docker",
      repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2012%20Contenedores/b%20Construir%20y%20configurar%20entornos/part12-containers-applications-main/todo-app",
      appUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2012%20Contenedores/b%20Construir%20y%20configurar%20entornos/part12-containers-applications-main/todo-app",
      icon: "/img/react-icon.png" 
      //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\reactWorkspace\projects\my-ci-cd-app

    },
      //BD - API EN RENDER
      {
        //name: "Notas - Blogs - Usuarios",
        name: "BD relacional con PostgresSQL",
        imageUrl: "/img/react/react-bd-relacional.jpg",  
        description: "Aplicación para gestionar usuarios - notas y blogs, back en Node-Express y BD relacional con PostgresSQL en RENDER",
        technology: "React, PostgresSQL, BD Relacional",
        repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/blob/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/b%20Unir%20tablas%20y%20consultas/notes/",
        appUrl: "https://notaspostgresql.onrender.com/api/notes?important=true",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte 13 Utilizando bases de datos relacionales\b Unir tablas y consultas
  
      },
      //MIGRACION BD - NO DEPLOY RENDER
      {
        //name: "Notas - Blogs - Usuarios",
        name: "Migraciones",
        imageUrl: "/img/react/react-bd-Migracion.jpg",  
        description: "Aplicación para gestionar usuarios - notas y blogs, back en Node-Express y migraciones en BD",
        technology: "React, PostgresSQL, BD Relacional",
        repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",
        appUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",
        icon: "/img/react-icon.png" 
        //repoLocal: "C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\JAO\fullstackopen REACT\Parte 13 Utilizando bases de datos relacionales\c Migraciones, relaciones de muchos-a-muchos
  
      },
  // A N G U L A R
  // ################
      {
        name: "Angular Material",
        imageUrl: "/img/angular/AngularMaterialDrag.jpg",  
        description: "Aplicación con angular para usar angular material y el componente drag-drop",
        technology: "Angular, angular material",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04EJANGULARMATERIAL",
        appUrl: "https://angular-material-ut7i.onrender.com/",
        icon: "/img/angular-icon.png" 
      },
      {
        name: "Angular carga perezosa",
        imageUrl: "/img/angular/AngularCargaPerezosa.jpg",  
        description: "Aplicación con angular",
        technology: "Angular carga perezosa para optimizar el rendimiento de carga",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04ngModules",
        appUrl: "https://angular-cargaperezosamodulos.onrender.com/",
        icon: "/img/angular-icon.png" 
        
      },
      {
        name: "Workspaces",
        imageUrl: "/img/angular/angularWorkspace.jpg",  
        description: "Aplicación con angular que está compuesta cpor un workspace con distintos proyectos",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/05ngWorkpsace",
        appUrl: "https://angular-workspaceproyectos.onrender.com",
        icon: "/img/angular-icon.png" 
  
      },
      //PWA HOLAJAO
      {
        name: "PWA",
        imageUrl: "/img/angular/AngularPipes.jpg",  
        description: "Aplicación con angular PWA",
        technology: "Angular",
        repoUrl: "",
        appUrl: "",
        icon: "/img/angular-icon.png" 
  
      },
      //FORMS Router6
      {
        name: "FORMS",
        imageUrl: "/img/angular/AngularForms.jpg",  
        description: "Aplicación con angular FORMS",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      //PIPES HOLAJAO
      {
        name: "PIPES",
        imageUrl: "/img/angular/AngularPipes.jpg",  
        description: "Aplicación con angular PIPES",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      //RxJS
      {
        name: "RxJS",
        imageUrl: "/img/angular/AngularRxJS.jpg",  
        description: "RxJS es una biblioteca para manejar programación reactiva basada en observables. Se usa para manejar flujos de datos asíncronos, como peticiones HTTP, eventos del usuario y manipulación de estados en la aplicación.",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/06RxJS",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      //Animaciones
      {
        name: "Animaciones",
        imageUrl: "/img/angular/AngularAnimaciones.jpg",  
        description: "Aplicación con angular para hacer y gestionar animaciones",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      {
        name: "Directivas",
        imageUrl: "/img/angular/AngularDirectivas.jpg",  
        description: "Usar directivas ngStyle, ngClass, *ngIf,*ngFor, ngSwitch,ngFor",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      {
        name: "Angular material",
        imageUrl: "/img/angular/AngularMaterial.jpg",  
        description: "Angular Material nos proporciona, una serie de modulos y nos pasa componentes de diseño que podemos usar desde nuestro proyecto: paginación, árbol, datepicker, menus, tables con ordenación..",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04EJANGULARMATERIAL",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      {
        name: "Routing",
        imageUrl: "/img/angular/Routing.jpg",  
        description: "Sistema de enrutado: pasar información entre rutas con el hisorico de navegación, queryparams, sessionStore, tokens, hacer peticiones http, servicio que tiene un array de Contactos… Logarnos, restringir pantallas, ir a login-home-contactos-detalle",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      {
        name: "Peticiones HTTP y gestión de errores",
        imageUrl: "/img/angular/AngularHTTP.jpg",  
        description: "Ver como hacer peticiones HTTP a APIs y gestionar errores",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      //https://github.com/jaoprogramador/angular-apps/tree/master/08PrimeNG/ejemploprimerong
      //PRIMENG
      {
        name: "PrimeNG",
        imageUrl: "/img/angular/AngularPrimeng.jpg",  
        description: "Ver como congigurar y usar primeng en nuestra aplicación gestionando en modulos. PrimeNG es una biblioteca de componentes UI para Angular, desarrollada por PrimeTek, que proporciona una colección de componentes ricos y personalizables para construir aplicaciones web modernas con un diseño atractivo y funcional.",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/08PrimeNG/ejemploprimerong",
        appUrl: "#",
        icon: "/img/angular-icon.png" 
  
      },
      {
        name: "Login Angular",
        imageUrl: "/img/angular/angular-login.jpg",  
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
        imageUrl: "/img/springBoot/spring-framework.jpg",  
        description: "Spring Boot, Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp",
        icon: "/img/springBoot-icon.png" 
  
      },
      //BEAN
      {
        name: "Spring BEAN",
        imageUrl: "/img/springBoot/spring-JBEANS.jpg",  
        description: "En Spring Framework, un Bean es un objeto gestionado por el contenedor de Spring. Se trata de una instancia de una clase que es creada, configurada y administrada por el contenedor de inversión de control (IoC Container) de Spring.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/1EjeSpringBeans",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //DATA
      {
        name: "Spring DATA",
        imageUrl: "/img/springBoot/spring-DATA.jpg",  
        description: "Spring Data es un módulo del Spring Framework que simplifica la interacción con bases de datos al proporcionar una capa de abstracción sobre JPA, JDBC, MongoDB, Redis, entre otros. Su objetivo es reducir el código repetitivo en la gestión de datos y facilitar la implementación del acceso a datos en aplicaciones Java.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/2EjeSpringDataJPA",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //MongoDB
      {
        name: "Spring CRUD Mongo",
        imageUrl: "/img/springBoot/spring-CRUDMongo.jpg",  
        description: "MongoDB, una base de datos NoSQL basada en documentos. Permite interactuar con MongoDB de forma sencilla, sin necesidad de escribir consultas manuales, utilizando la arquitectura de repositorios de Spring.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/16EjeRestDataMongoDB",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //MVC
      {
        name: "Spring MVC",
        imageUrl: "/img/springBoot/spring-REST.jpg",  
        description: "Spring MVC es un módulo de Spring Framework que sigue el patrón Modelo-Vista-Controlador (MVC) para desarrollar aplicaciones web en Java de manera estructurada y eficiente. Proporciona herramientas para manejar peticiones HTTP, formularios, validaciones, vistas dinámicas y más.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      
      //Test unitarioes
      {
        name: "Test unitarios",
        imageUrl: "/img/springBoot/spring-JUNIT.jpg",  
        description: "Test unitarios para probar con Spring Boot, Security, Tipos de cifrado en claves",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //Cifrado
      {
        name: "Cifrados",
        imageUrl: "/img/springBoot/spring-cifrado.jpg",  
        description: "Spring Boot, Security, Tipos de cifrado en claves",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/6SpringSecurityCifrado",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //Security
      {
        name: "Spring Security",
        imageUrl: "/img/springBoot/spring-SECURITY.jpg",  
        description: "Spring Security es un módulo de Spring Framework que proporciona autenticación, autorización y protección contra ataques en aplicaciones Java. Se integra fácilmente con Spring Boot y permite asegurar aplicaciones web y APIs REST",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //Security Roles
      {
        name: "Spring Security Roles",
        imageUrl: "/img/springBoot/spring-SecurityRol.jpg",  
        description: "En Spring Security, los roles y permisos se utilizan para restringir el acceso a ciertas partes de la aplicación. Un rol (ROLE_USER, ROLE_ADMIN) es un conjunto de permisos que definen lo que un usuario puede hacer.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/9SecurityRoles",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //JWT
      {
        name: "JWT",
        imageUrl: "/img/springBoot/SpringJWT.jpg",  
        description: "Spring Security + JWT permite autenticación sin estado, ideal para APIs REST. En lugar de almacenar sesiones, el usuario recibe un token JWT tras iniciar sesión y lo usa en cada solicitud.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/7SpringSecurityJWT",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //Oauth
      {
        name: "OAuth",
        imageUrl: "/img/springBoot/spring-OAuth.jpg",  
        description: "OAuth2 es un protocolo de autorización que permite a los usuarios compartir acceso a recursos sin exponer sus credenciales. Se usa comúnmente para autenticación en Google, Facebook, GitHub, Keycloak, etc.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/8SecurityOauthGithub",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //Medidas de seguridad CSRF,
      {
        name: "CSRF",
        imageUrl: "/img/springBoot/spring-SecurityCSRF.jpg",  
        description: "CSRF (Cross-Site Request Forgery) en Spring SecurityCSRF es un ataque de falsificación de solicitudes entre sitios, en el que un atacante engaña a un usuario autenticado para que ejecute una acción no deseada en una aplicación web. Este tipo de ataque explota la confianza que un sitio tiene en el navegador del usuario.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/10SecurityCSRF",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SWAGGER
      {
        name: "Swagger",
        imageUrl: "/img/springBoot/spring-SWAGGER.jpg",  
        description: "Swagger es una herramienta de documentación interactiva para APIs RESTful. Permite a los desarrolladores documentar, probar y explorar sus APIs de una manera sencilla. En el contexto de Spring Boot, Swagger se utiliza para generar automáticamente documentación interactiva de la API, lo que facilita la prueba de las diferentes rutas del sistema sin necesidad de herramientas externas como Postman.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //CONTROL DE EXCEPCIONES
      {
        name: "ControlExcepciones",
        imageUrl: "/img/springBoot/spring-ControlExcepciones.jpg",  
        description: "En Spring Boot, el control de excepciones es fundamental para manejar los errores de manera consistente y proporcionar respuestas adecuadas a los clientes. Spring proporciona varias formas de gestionar excepciones, tanto globalmente como de manera específica para ciertos controladores.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/13CrtlExcepcionesRoles",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SPRING BATCH
      {
        name: "Spring Batch",
        imageUrl: "/img/springBoot/spring-Batch.jpg",  
        description: "Spring Batch es un framework de Spring diseñado para el procesamiento por lotes (batch processing). Permite procesar grandes volúmenes de datos de manera eficiente, automatizada y escalable. Es ampliamente utilizado en escenarios como importación/exportación de datos, generación de informes, migración de bases de datos y procesamiento masivo de transacciones.",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/21demoBatch",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SPRING CLOUD 
      {//
        name: "Spring Cloud Microservicios",
        imageUrl: "/img/springCloud/spring-Cloud-Arquitec.jpg",  
        description: "Spring Cloud es un conjunto de herramientas y marcos de trabajo que se utiliza para desarrollar aplicaciones distribuidas basadas en microservicios. Está diseñado para simplificar la construcción de sistemas complejos con arquitecturas basadas en microservicios, brindando soluciones para retos comunes en este tipo de arquitectura, como la gestión de configuración, la detección de servicios, el enrutamiento dinámico, la tolerancia a fallos y más. Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::Hola Mundo
        name: "Hola Mundo",
        imageUrl: "/img/springCloud/spring-Cloud-HolaMundo.jpg",  
        description: "Primer micrsoservicio Hola Mundo",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/demo01",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/demo01",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::Products-Category
        name: "Products-Category",
        imageUrl: "/img/springCloud/spring-Cloud-ProductsJPA.jpg",  
        description: "Segundo microservicio Products-Category con JPA ",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/product-service",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/product-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING Lombok :::Products-Category
        name: "Lombok",
        imageUrl: "/img/springCloud/spring-Cloud-Lombock.jpg",  
        description: "Lombok es una biblioteca que reduce el código repetitivo en Java, especialmente en la gestión de POJOs (Plain Old Java Objects). Lombok utiliza anotaciones para generar automáticamente código como getters, setters, constructores, métodos toString(), equals(), hashCode(), y más, sin que el desarrollador tenga que escribirlos manualmente.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/blob/master/product-service/src/main/java/academy/digitallab/store/product/entity/Category.java",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/blob/master/product-service/src/main/java/academy/digitallab/store/product/entity/Category.java",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::Tests con mockito
        name: "Tests con mockito",
        imageUrl: "/img/springCloud/spring-Cloud-TestMockito.jpg",  
        description: "Testear con mockito el servicio products-category ",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/product-service",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/product-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::Servicios
        name: "Servicios",
        imageUrl: "/img/springCloud/spring-Cloud-TestMockito.jpg",  
        description: "Como crear un servicio para Products-Category",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/product-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/product-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::Controller
        name: "Controller",
        imageUrl: "/img/springCloud/spring-Cloud-TestMockito.jpg",  
        description: "Como crear un controller para comunicarse con el service de Products-Category",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/product-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/product-service",
        icon: "/img/springCloud-icon.png" 
      },
      
      {//SPRING CLOUD:::customer-service
        name: "Customer-service",
        imageUrl: "/img/springCloud/spring-Cloud-TestMockito.jpg",  
        description: "Creamos otro microservicio independiente customer-service",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::shopping-service
        name: "Shopping-service",
        imageUrl: "/img/springCloud/spring-Cloud-ShoppingService.jpg",  
        description: "Creamos otro microservicio independiente shopping-service",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/shopping-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Config-------DESDE AQUI
        name: "Config",
        imageUrl: "/img/springCloud/spring-Cloud-Config.jpg",  
        description: "Config es un componente dentro del ecosistema de Spring Cloud que permite la gestión centralizada de la configuración de aplicaciones distribuidas, como las basadas en microservicios. Con Spring Cloud Config, puedes externalizar la configuración de tus aplicaciones a un servidor central y proporcionar a todas tus aplicaciones acceso a su configuración desde ese servidor.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/config-data/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/config-data",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Eureka Server
        name: "Eureka Server",
        imageUrl: "/img/springCloud/spring-Cloud-Eureka.jpg",  
        description: "Eureka Server es un componente que actúa como un servidor de registro de servicios. En un entorno de microservicios, donde existen múltiples servicios distribuidos que necesitan descubrirse entre sí para comunicarse, Eureka Server se convierte en una pieza fundamental.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
       {//SPRING CLOUD::: Feighn
        name: "Feighn",
        imageUrl: "/img/springCloud/spring-Cloud-Feign.jpg",   
        description: "Feighn es un cliente HTTP declarativo que forma parte de Spring Cloud y se utiliza para simplificar las llamadas entre microservicios en una arquitectura distribuida.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
       {//SPRING CLOUD::: Hystry
        name: "Hystry",
        imageUrl: "/img/springCloud/spring-Cloud-Hystrix.jpg",  
        description: "Hystry es una biblioteca de tolerancia a fallos desarrollada por Netflix que está diseñada para aumentar la resiliencia de los sistemas distribuidos, especialmente en arquitecturas de microservicios. Su propósito principal es evitar el fallo total de un sistema cuando una de sus partes se encuentra bajo alta latencia o no responde.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Gateway
        name: "Gateway",
        imageUrl: "/img/springCloud/spring-Cloud-Gateway.jpg",   
        description: "Gateway es una solución de Gateway basada en Spring Boot y Spring WebFlux, lo que significa que es reactiva, escalable y adecuada para manejar aplicaciones de alta concurrencia. Ofrece un enfoque declarativo para definir reglas de enrutamiento y filtros que se aplican a las solicitudes HTTP.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/gateway-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/gateway-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Actuator
        name: "Actuator",
        imageUrl: "/img/springCloud/spring-Cloud-Actuator.jpg",  
        description: "Actuator es un conjunto de herramientas y funcionalidades integradas en Spring Boot que proporcionan monitoreo, métricas, y administración de aplicaciones. Actuator expone varios endpoints que permiten acceder a información sobre el estado de la aplicación, métricas clave, y otros datos útiles para la gestión y operación de una aplicación Spring Boot.",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Sleuth
        name: "Sleuth",
        imageUrl: "/img/springCloud/spring-Cloud-TestMockito.jpg",  
        description: "Es una librería que implementa una solución de trazado distribuido para String Cloud",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/tree/master/customer-service/",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios/customer-service",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD::: Arquitectura Hexagonal
        name: "Arquitectura Hexagonal",
        imageUrl: "/img/springBoot/spring-ArquitecturaHexagonal.jpg",  
        description: "Como construir una arquitectura hexagonal",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/22jaoArcHexa",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/22jaoArcHexa",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::KAFKA:
        name: "KAFKA",
        imageUrl: "/img/springCloud/springArquitecturaKafka.jpg",  
        description: "Apache Kafka es una plataforma de mensajería distribuida y event streaming que permite manejar grandes volúmenes de datos en tiempo real. Se usa para enviar, recibir, almacenar y procesar flujos de datos de manera eficiente",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/SpringJaoForKafka",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/SpringJaoForKafka",
        //C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspace\SpringJaoForKafka
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::ZOOKEEPER:
        name: "ZOOKEEPER",
        imageUrl: "/img/springCloud/springZookeeper.jpg",  
        description: "Listados de comandos para arrancar Kafka, el resurso zookeeper y crear topics, listarlos",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/README.md",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/README.md",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::MODULOPADRE:
        name: "Modulo Padre",
        imageUrl: "/img/springCloud/springModuloPadre.jpg",  
        description: "Modulo contenedor de Consumer y Provider que comparte dependencias",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::CONSUMER:
        name: "Modulo Consumer",
        imageUrl: "/img/springCloud/springKafkaListener.jpg",  
        description: "Modulo Consumer que escucha los mensajes",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoConsumer/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoConsumer/",
        icon: "/img/springCloud-icon.png" 
      },
      {//SPRING CLOUD:::PROVIDER:
        name: "Modulo Provider",
        imageUrl: "/img/springCloud/springKafkaProvider.jpg",  
        description: "Modulo Provider que lanza los mensajes",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoProvider/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoProvider/",
        icon: "/img/springCloud-icon.png" 
      },
      //Patrones de diseño
      {
        name: "Patrones de diseño",
        imageUrl: "/img/java/JavaPatters.jpg",  
        description: "Patrones de diseño, Adapter, Singleton, Build, Facade, ",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/11SecuritySpring-patterns",
        appUrl: "#",
        icon: "/img/springBoot-icon.png" 
  
      },

      {
        name: "Servicio Rest",
        imageUrl: "/img/java/WS-RestSOAPUI.jpg",  
        description: "Servicios Rest que valida un DNI",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/RestDNI",
        appUrl: "https://github.com/jaoprogramador/RestDNI",
        icon: "/img/java.png" 
      },
      {
        name: "Servicio SOAP",
        imageUrl: "/img/java/WS-RestSOAPUI.jpg",  
        description: "Servicios SOAP que sube ficheros al servidor",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
        icon: "/img/java.png" 
      },
      {
        name: "EJB",
        imageUrl: "/img/java/EJB.jpg",  
        description: "EJB Sesión, Entidad",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",
        icon: "/img/java.png" 
      },
      {
        name: "log4j",
        imageUrl: "/img/java/JavaLog4j.jpg",  
        description: "Java, log4j",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",
        appUrl: "#",
        icon: "/img/java.png" 
      },
      {
        name: "Ejercicios de programación",
        imageUrl: "/img/java/jaoweb.jpg",  
        description: "Ejercicios de programación, BD, web...",
        technology: "HTML ",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/jaoprogramadorweb/public",
        appUrl: "https://jaoprogramadorweb.onrender.com/j2ee/index.htm",
        icon: "/img/jaoprogramador-icon.png" 
      }
    ];
  
  export default apps;
  