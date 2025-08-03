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
      //SPRING LAMBDA  
      {
        name: "Funciones Lambda",
        imageUrl: "/img/springBoot/spring-lambda.jpg",  
        description: "LAs funciones lambda son una característica de java 8 que te permite escribir funciones anónimas sin un nombre específico",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/21demoBatch/src/main/java/com/example/jao/batch/demo/listener/JobListener.java",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/21demoBatch/src/main/java/com/example/jao/batch/demo/listener/JobListener.java",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SPRING MapStruct  
      {
        name: "MapStruct",
        imageUrl: "/img/springBoot/spring-Mapper.jpg",  
        description: "MapStruct es una herramienta (un code generator) que te ayuda a convertir automáticamente objetos entre clases: de una Entidad (UserEntity) a un DTO (UserDTO)",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/25MapStructExample",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/25MapStructExample",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SPRING REDIS
      {
        name: "Redis",
        imageUrl: "/img/springBoot/spring-redis.jpg",  
        description: "Estrategias de carga en cache",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/24RedisDockerEstrategiaCache/24JaoFilmsApp",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/24RedisDockerEstrategiaCache/24JaoFilmsApp",
        icon: "/img/springBoot-icon.png" 
  
      },
      //SPRING Caffeine
      {
        name: "Redis",
        imageUrl: "/img/springBoot/spring-caffeine.jpg",  
        description: "Estrategias de carga en cache con la librería caffeine",
        technology: "Spring Framework ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/24spring-caffeine-poc-main",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/24spring-caffeine-poc-main",
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
       {//SPRING CLOUD::: Arquitectura Hexagonal Hinditex
        name: "Arquitectura Hexagonal ",
        imageUrl: "/img/springBoot/spring-ArquitecturaHexagonal2.jpg",  
        description: "API Rest con spring, maven, JPA, Swagger, Lombock, Mapper, Junit, Docker, slf4j, Control de Excepciones… servicio que devuelve ordenados los articulos de inditex",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/InditexProductosSpringRest",
        appUrl: "https://github.com/jaoprogramador/InditexProductosSpringRest",
        icon: "/img/springCloud-icon.png" 
      },
      //------------------------------------------------------------------------------------------------PROYECTO MICROSERVICIOS
      //PRIMER MICROSERVICIO
      //DISCOVERY SERVICE
      //CONFIG SERVICE
      //REFRESCANDO CONFIGURACIONES
      //HASHCORP VAULT
      //MESSAGE BROKER, REFRESHH CONF RABBITMQ DOCKER
      //API GATEWAY
      //KEYCLOACK
      //JWT OAUTH
      //PATRON CIRCUIT BREAKER
       //----------------------------------------------------------------------------------------------/PROYECTO MICROSERVICIOS
    {//PRIMER MICROSERVICIO
    name: "Primer Microservicio Reserva-ms ",
    imageUrl: "/img/springMS17/spring-primerMS.jpg",  
    description: "API Rest con spring, maven, JPA, Swagger, Lombock, Mapper, Junit, Docker, slf4j, Control de Excepciones… servicio que devuelve ordenados los articulos de inditex",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Reservas-ms",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Reservas-ms",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },

    {//DISCOVERY SERVICE
    name: "Discovery service ",
    imageUrl: "/img/springMS17/spring-Discovery.jpg",  
    description: "Servicio Eureka para registro y localización automática de microservicios dentro del ecosistema distribuido.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Discovery-service",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Discovery-service",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
  },
 
  {//CONFIG SERVICE
    name: "Config service ",
    imageUrl: "/img/springMS17/spring-Config.jpg",  
    description: "Microservicios",
    technology: "Servidor centralizado de configuración. Proporciona archivos de propiedades a los microservicios desde un repositorio Git.",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Config-server",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosConfigDiscovery1/Config-server",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//REFRESCANDO CONFIGURACIONES
    name: "Refrescar configuraciones",
    imageUrl: "/img/springMS17/spring-Refresh.jpg",  
    description: "Microservicios",
    technology: "Mecanismo para actualizar configuraciones en caliente sin reiniciar servicios usando Spring Actuator y Bus.",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosConfigDiscovery1/Service-configuration/GestVuelos-ms-dev.properties",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosConfigDiscovery1/Service-configuration/GestVuelos-ms-dev.properties",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//HASHCORP VAULT 
    name: "HashCorp Vault",
    imageUrl: "/img/springMS17/spring-Vault.jpg",  
    description: "Gestión segura de secretos y credenciales mediante integración con HashiCorp Vault y Spring Cloud Config.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosVaultAPIGatewayKeycloak/Service-configuration/Reservas-ms-dev.properties",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosVaultAPIGatewayKeycloak/Service-configuration/Reservas-ms-dev.properties",
    repoLOCAL: "C:\UsersDocuments\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//MESSAGE BROKER, REFRESH CONF RABBITMQ DOCKER
    name: "Message broker, Refresh, RabbitMQ, Docker",
    imageUrl: "/img/springMS17/spring-Message.jpg",  
    description: "Comunicación asincrónica con RabbitMQ, refresco de configuración vía Spring Cloud Bus, todo orquestado con Docker.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosVaultAPIGatewayKeycloak/Reservas-ms/docker-compose.yml",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosVaultAPIGatewayKeycloak/Reservas-ms/docker-compose.yml",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//API GATEWAY
    name: "API GATEWAY",
    imageUrl: "/img/springMS17/spring-apigateway.jpg",  
    description: "Puerta de entrada unificada. Maneja enrutamiento, seguridad, balanceo y control de tráfico hacia microservicios.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosVaultAPIGatewayKeycloak/Api-gateway",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosVaultAPIGatewayKeycloak/Api-gateway",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//KEYCLOACK
    name: "KEYCLOACK",
    imageUrl: "/img/springMS17/spring-keycloak.jpg",  
    description: "Proveedor de identidad que gestiona autenticación y autorización con OAuth2/OpenID Connect para toda la arquitectura.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Api-gateway/src/main/resources/application.properties",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Api-gateway/src/main/resources/application.properties",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//JWT OAUTH
    name: "JWT OAUTH",
    imageUrl: "/img/springMS17/spring-JWT.jpg",  
    description: "Implementación de autenticación segura basada en tokens JWT y protocolo OAuth2 usando Spring Security.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/config/SecurityConfiguration.java",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/config/SecurityConfiguration.java",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//PATRON CIRCUIT BREAKER
    name: "Patron Circuit breaker",
    imageUrl: "/img/springMS17/spring-circuitbreaker.jpg",  
    description: "Mecanismo de tolerancia a fallos con Resilience4j para evitar cascadas de errores entre microservicios dependientes.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/controller/ReservaController.java",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/controller/ReservaController.java",
    repoLOCAL: "C:\Users\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//FLYWAY
    name: "Flyway",
    imageUrl: "/img/springMS17/spring-flyway.jpg",  
    description: "Control de versiones de base de datos. Permite aplicar migraciones SQL de forma automática y segura al iniciar la app.",
    technology: "Microservicios",
    repoUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/controller/ReservaController.java",
    appUrl: "https://github.com/jaoprogramador/workspaceMSBookingJAO/blob/microserviciosNotificacionesReservas/Reservas-ms/src/main/java/com/jao/booking/controller/ReservaController.java",
    repoLOCAL: "C:\UsersDocuments\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspaceMSBookingJAO",
    icon: "/img/springCloud-icon.png" 
    },
    {//GRAFANA 
    "name": "Monitorización con  Grafana",
    "imageUrl": "/img/springMS17/spring-monitoring.jpg",
    "description": "Integración de Prometheus para recolectar métricas y Grafana para visualizar en tiempo real el estado de los microservicios.",
    "technology": "Microservicios",
    "repoUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosMonitoringGrafanaPrometheus",
    "appUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosMonitoringGrafanaPrometheus",
    "repoLOCAL": "C:\\Users\\user\\Documents\\Juan PC guillermo SpringAngularAWS\\WORKSPACES\\workspaceMSBookingJAO",
    "icon": "/img/springCloud-icon.png"
  },
  {// PROMETHEUS
    "name": "Monitorización con Prometheus",
    "imageUrl": "/img/springMS17/spring-monitoring-prometheus.jpg",
    "description": "Integración de Prometheus para recolectar métricas y Grafana para visualizar en tiempo real el estado de los microservicios.",
    "technology": "Microservicios",
    "repoUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosMonitoringGrafanaPrometheus",
    "appUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/microserviciosMonitoringGrafanaPrometheus",
    "repoLOCAL": "C:\\Users\\user\\Documents\\Juan PC guillermo SpringAngularAWS\\WORKSPACES\\workspaceMSBookingJAO",
    "icon": "/img/springCloud-icon.png"
  },
   {// GESTIONHOTELES
    "name": "Microservicio para la Gestión de Hoteles",
    "imageUrl": "/img/springMS17/spring-monitoring.jpg",
    "description": "Microservicio para gestionar todo lo referente a los hoteles.",
    "technology": "Microservicios",
    "repoUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/GestHoteles-ms",
    "appUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/GestHoteles-ms",
    "repoLOCAL": "C:\\Users\\user\\Documents\\Juan PC guillermo SpringAngularAWS\\WORKSPACES\\workspaceMSBookingJAO",
    "icon": "/img/springCloud-icon.png"
  },
  {// USUARIOS
    "name": "Microservicio para la Gestión de usuarios de la aplicación",
    "imageUrl": "/img/springMS17/spring-monitoring.jpg",
    "description": "Microservicio para gestionar todo lo referente a los usuarios de la aplicación.",
    "technology": "Microservicios",
    "repoUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/Usuarios-ms",
    "appUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/Usuarios-ms",
    "repoLOCAL": "C:\\Users\\user\\Documents\\Juan PC guillermo SpringAngularAWS\\WORKSPACES\\workspaceMSBookingJAO",
    "icon": "/img/springCloud-icon.png"
  },
  ,
  {// WEBFLUX
    "name": "Programación Reactiva asincrona con webflux",
    "imageUrl": "/img/springMS17/spring-monitoring.jpg",
    "description": "Programación Reactiva asincrona con webflux",
    "technology": "Microservicios",
    "repoUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/Usuarios-ms",
    "appUrl": "https://github.com/jaoprogramador/workspaceMSBookingJAO/tree/release_Usuarios_GestHoteles20250730/Usuarios-ms",
    "repoLOCAL": "C:\\Users\\user\\Documents\\Juan PC guillermo SpringAngularAWS\\WORKSPACES\\workspaceMSBookingJAO",
    "icon": "/img/springCloud-icon.png"
  },
       //----------------------------------------------------------------------------------------------TEMAS PENDIENTES
       // CAFFEINE
       // SOLID
       // MIGRACIONES DATOS
       // OPEN API API FIRST
       //----------------------------------------------------------------------------------------------/TEMAS PENDIENTES


      {//SPRING :::KAFKA:
        name: "KAFKA",
        imageUrl: "/img/springCloud/springArquitecturaKafka.jpg",  
        description: "Apache Kafka es una plataforma de mensajería distribuida y event streaming que permite manejar grandes volúmenes de datos en tiempo real. Se usa para enviar, recibir, almacenar y procesar flujos de datos de manera eficiente",
        technology: "Spring KAFKA",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/SpringJaoForKafka",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/SpringJaoForKafka",
        //C:\Users\user\Documents\Juan PC guillermo SpringAngularAWS\WORKSPACES\workspace\SpringJaoForKafka
        icon: "/img/kafka-icon.png" 
      },
      {//SPRING KAFKA:::ZOOKEEPER:
        name: "ZOOKEEPER",
        imageUrl: "/img/springCloud/springZookeeper.jpg",  
        description: "Listados de comandos para arrancar Kafka, el resurso zookeeper y crear topics, listarlos",
        technology: "Spring KAFKA",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/README.md",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/README.md",
        icon: "/img/kafka-icon.png" 
      },
      {//SPRING KAFKA:::MODULOPADRE:
        name: "Modulo Padre",
        imageUrl: "/img/springCloud/springModuloPadre.jpg",  
        description: "Modulo contenedor de Consumer y Provider que comparte dependencias",
        technology: "Spring KAFKA",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/",
        icon: "/img/kafka-icon.png" 
      },
      {//SPRING KAFKA:::CONSUMER:
        name: "Modulo Consumer",
        imageUrl: "/img/springCloud/springKafkaListener.jpg",  
        description: "Modulo Consumer que escucha los mensajes",
        technology: "Spring KAFKA",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoConsumer/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoConsumer/",
        icon: "/img/kafka-icon.png" 
      },
      {//SPRING KAFKA:::PROVIDER:
        name: "Modulo Provider",
        imageUrl: "/img/springCloud/springKafkaProvider.jpg",  
        description: "Modulo Provider que lanza los mensajes",
        technology: "Spring KAFKA",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoProvider/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/SpringJaoForKafka/SpringJaoProvider/",
        icon: "/img/kafka-icon.png" 
      },
      {//SPRING CLOUD:::RabbitMQ:
        name: "RabbitMQ",
        imageUrl: "/img/springCloud/springRabbitMQ.jpg",  
        description: "RabbitMQ es un sistema de mensajería de código abierto que implementa el protocolo AMQP (Advanced Message Queuing Protocol). Es utilizado para enviar, recibir y gestionar mensajes entre aplicaciones o servicios de manera fiable y eficiente. Permite la comunicación asíncrona, lo que significa que los productores de mensajes no tienen que esperar a que los consumidores los procesen, mejorando la escalabilidad y la fiabilidad del sistema.",
        technology: "Spring RabbitMQ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/",
        icon: "/img/rabbitMQ-icon.png" 
      },
      {//SPRING RabbitMQ:::Docker:
        name: "Docker",
        imageUrl: "/img/springCloud/springRabbitMQDocker.jpg",  
        description: "Docker es una plataforma de software que permite empaquetar, distribuir y ejecutar aplicaciones de manera ligera y eficiente dentro de contenedores.",
        technology: "Spring RabbitMQ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/docker-compose.yml/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/docker-compose.yml/",
        icon: "/img/rabbitMQ-icon.png" 
      },
      {//SPRING RabbitMQ:::Consumer:
        name: "Consumer",
        imageUrl: "/img/springCloud/springRabbitMQConsumer.jpg",  
        description: "Modulo Consumer que escucha los mensajes",
        technology: "Spring RabbitMQ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/23RabbitConsumer/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/23RabbitConsumer/",
        icon: "/img/rabbitMQ-icon.png" 
      },
      {//SPRING RabbitMQ:::Publisher:
        name: "Publisher",
        imageUrl: "/img/springCloud/springRabbitMQPublisher.jpg",  
        description: "Modulo Publisher que publica los mensajes.",
        technology: "Spring RabbitMQ",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/23RabbitPublisher/",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/23RabbitPublisher/",
        icon: "/img/rabbitMQ-icon.png" 
      },
      {//DOCKER docker:::Desktop:
        name: "Dockerfile",
        imageUrl: "/img/docker/docker-desktop.jpg",  
        description: "Dockerfile es el fichero con el que se va a generar la plantilla de la imagen docker",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/Docker/blob/master/DOCKER-EXAMPLE/Dockerfile",
        appUrl: "https://github.com/jaoprogramador/Docker/blob/master/DOCKER-EXAMPLE/Dockerfile",
        icon: "/img/icons/docker-icon.png" 
      },
       {//DOCKER docker:::Desktop:
        name: "Docker compose",
        imageUrl: "/img/springBoot/spring-GITACTIONS.jpg",  
        description: "Docker Compose es una herramienta que te permite levantar varios contenedores Docker al mismo tiempo, definidos en un solo archivo .yml",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/docker-compose.yml",
        appUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/blob/master/23RabbitMQ/docker-compose.yml",
        icon: "/img/icons/docker-icon.png" 
      },
      {//DOCKER docker::::
        name: "Comandos",
        imageUrl: "/img/docker/docker-comandos.jpg",  
        description: "Comandos Docker",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/Docker/blob/master/DOCKER-EXAMPLE-SPRING-MySQL/ComandosDocker.txt",
        appUrl: "https://github.com/jaoprogramador/Docker/blob/master/DOCKER-EXAMPLE-SPRING-MySQL/ComandosDocker.txt",
        icon: "/img/icons/docker-icon.png" 
      },
      {//DOCKER docker::::
        name: "Html en container",
        imageUrl: "/img/docker/docker-html.jpg",  
        description: "Desplegar una pagina en docker container",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE",
        appUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE",
        icon: "/img/icons/docker-icon.png"  
      },
      {//DOCKER docker:::Publisher:
        name: "Postgresql en container",
        imageUrl: "/img/docker/docker-postgresql.jpg",  
        description: "Desplegar postgresql en un contenedor de docker",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE",
        appUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE",
        icon: "/img/icons/docker-icon.png"  
      },
      {//DOCKER docker:::Publisher:
        name: "Spring y MySQL en container",
        imageUrl: "/img/docker/docker-Springpostgresql.jpg",  
        description: "Desplegar una API Rest de Spring en un contenedor que se comunica con otro contenedor de MySQL",
        technology: "Docker",
        repoUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE-SPRING-MySQL",
        appUrl: "https://github.com/jaoprogramador/Docker/tree/master/DOCKER-EXAMPLE-SPRING-MySQL",
        icon: "/img/icons/docker-icon.png"  
      },
    
    //KUBERNETES
    //=============
    //SPRING API BACK
	  {
      name: "API BACK",
      imageUrl: "/img/springKubernetes/1BackAPI.jpg",  
      description: "Crear API Back con Spring para devolver los marcadores de blogs con paginación por medio de REST",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/tree/main/26bookmarker-api",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/tree/main/26bookmarker-api",
      icon: "/img/springBoot-icon.png" 

    },
  
  
// TEST CONTROLLER 
{
      name: "Test Controller",
      imageUrl: "/img/springKubernetes/2.TestController.jpg",  
      description: "Vemos como testear un controller con los parametros que debe devolver un JSON parametrizando la llamada",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/26bookmarker-api/src/test/java/com/jao/_bookmarker_api/BookmarksControllerTest.java",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/26bookmarker-api/src/test/java/com/jao/_bookmarker_api/BookmarksControllerTest.java",
      icon: "/img/springBoot-icon.png" 

    },
//SPRING GIT ACTIONS
    {
      name: "GitHub Actions CI/CD Pipeline",
      imageUrl: "/img/springKubernetes/3.GitHubActions.jpg",  
      description: "Este workflow automatiza el proceso de construcción y empaquetado de una aplicación web basada en Spring Boot, Compila el proyecto con Maven, construye una imagen Docker usando Jib, y la publica en Docker Hub cuando hay cambios en la rama main",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/26bookmarker-api/.github/workflows/build.yml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/26bookmarker-api/.github/workflows/build.yml",
      icon: "/img/springBoot-icon.png" 

    },
  //SPRING DOCKER-COMPOSE
  {
      name: "Docker compose",
      imageUrl: "/img/springKubernetes/4.DockerizarAPI.jpg",  
      description: "Crear dos docker-compose uno para API y otro para BD",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/docker-compose-app.yml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/docker-compose.yml",
      icon: "/img/springBoot-icon.png" 

    },
  // FRONT
  {
      name: "Front con ReactJS, NextJS y Bootstrap",
      imageUrl: "/img/springKubernetes/5.ReactNextJS.jpg",  
      description: "Crear un front con con ReactJS, NextJS y Bootstrap para poder listar, buscar y crear marcadores de blogs",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/tree/main/bookmarker-ui-nextjs",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/tree/main/bookmarker-ui-nextjs",
      icon: "/img/springBoot-icon.png" 

    },
  // FRONT DOCKERDIZADO NEXTUI
  {
      name: "Como dockerizar el front",
      imageUrl: "/img/springKubernetes/5.ReactNextJSDockerizing.jpg",  
      description: "Crear un Dockerfile y un docker-compose para desplegar en docker la aplicacion UI por fases",
      technology: "Kubernetes",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/bookmarker-ui-nextjs/Dockerfile",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/26bookmarker-api/Dockerfile",
      icon: "/img/springBoot-icon.png" 

    },
  // COMANDOS KUBERNETES
  {
      name: "Comandos de Kubernetes",
      imageUrl: "/img/springKubernetes/22Comandos.jpg",  
      description: "Como crear pods , borrar, aplicarlos, deploys",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/Kubernetes/ComandosKubernetes.txt",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/Kubernetes/ComandosKubernetes.txt",
      icon: "/img/kubernetes-icon.png" 

    },
  {
      name: "Pods y Deploy",
      imageUrl: "/img/springKubernetes/22Pods.jpg",  
      description: "Como crear pods ,  deploys",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/pod.yaml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/pod.yaml",
      icon: "/img/kubernetes-icon.png" 

    },
   {
      name: "Config Maps y Secretos",
      imageUrl: "/img/springKubernetes/22SecretsMaps.jpg",  
      description: "Como crear mapas de SECRETS para tener menos accesible la información de las claves",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/1-config.yaml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/1-config.yaml",
      icon: "/img/kubernetes-icon.png" 

    },
  {
      name: "Persistence Vol",
      imageUrl: "/img/springKubernetes/22PersistenceVolumen.jpg",  
      description: "Como definir un servicio de BD con volumenes de datos para no perder la información cada vez que reiniciamos",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/1-postgresdb.yaml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/1-postgresdb.yaml",
      icon: "/img/kubernetes-icon.png" 

    },
  {
      name: "Exposing Pods",
      imageUrl: "/img/springKubernetes/22Services.jpg",  
      description: "Como exponer los servicios en kubernetes",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/3-bookmarker-api.yaml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/3-bookmarker-api.yaml",
      icon: "/img/kubernetes-icon.png" 

    },
  
  {
      name: "Routing",
      imageUrl: "/img/springKubernetes/22Routing.jpg",  
      description: "Como definir el enrutado de kubernetes con NGINX",
      technology: "Kubernetes ",
      repoUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/5-ingress-api.yaml",
      appUrl: "https://github.com/jaoprogramador/workspaceReactSpringKubernetesDockerFINAL/blob/main/k8s/6-ingress-ui.yaml",
      icon: "/img/kubernetes-icon.png" 

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
      //Principios SOLID
      {
        name: "Principios SOLID",
        imageUrl: "/img/java/PrincipiosSOLID.jpg",  
        description: "Ejemplo sencillo de como aplicar los principios SOLID ",
        technology: "Java",
        repoUrl: "https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/PrindipiosSOLID",
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
  