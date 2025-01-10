(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{96530:function(r,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/frameworks",function(){return e(16282)}])},81353:function(r,o,e){"use strict";e.d(o,{E:function(){return p}});var a=e(10990),n=e(25317);function t(r,o,e){return o in r?Object.defineProperty(r,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[o]=e,r}function i(r){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{},a=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})))),a.forEach((function(o){t(r,o,e[o])}))}return r}var p=function(r,o,e){return a.ZP.fromTo(r,i({opacity:0},o),i({opacity:1},e,{stagger:.2,ease:n.Aq.easeOut}))}},69729:function(r,o,e){"use strict";e.r(o);var a=e(85893);e(67294);o.default=function(r){var o=r.app;return o?(console.log("AppTable:",o),(0,a.jsx)("div",{className:"app-card",children:(0,a.jsxs)("a",{href:o.appUrl,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)("h2",{children:o.name}),(0,a.jsx)("img",{src:o.imageUrl,alt:o.name,className:"app-image"}),(0,a.jsxs)("div",{className:"app-info",children:[(0,a.jsx)("h3",{children:o.name}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Descripci\xf3n:"})," ",o.description]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Tecnolog\xeda:"})," ",o.technology]}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:o.appUrl,target:"_blank",rel:"noopener noreferrer",children:"Visitar App"})}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:o.repoUrl,target:"_blank",rel:"noopener noreferrer",children:"Repositorio en GitHub"})}),(0,a.jsx)("p",{children:(0,a.jsx)("img",{src:o.imageUrl,alt:o.name,className:"app-image"})})]})]})})):(console.error("App data is missing."),(0,a.jsx)("div",{children:"Error: Missing app data"}))}},71879:function(r,o,e){"use strict";e.r(o);var a=e(85893),n=e(67294),t=e(69729),i=[{title:"React",filter:"React",icon:"/img/icons/react-icon.png"},{title:"Angular",filter:"Angular",icon:"/img/icons/angular-icon.png"},{title:"Spring Boot",filter:"Spring Framework",icon:"/img/icons/springboot-icon.png"},{title:"Spring Cloud",filter:"Spring Cloud",icon:"/img/icons/springcloud-icon.png"},{title:"Java",filter:"Java",icon:"/img/icons/java.png"},{title:"Web jaoprogramador",filter:"HTML",icon:"/img/icons/html-icon.png"}];o.default=function(r){var o=r.dataFrameworks,e=void 0===o?[]:o;(0,n.useRef)();return console.log("AppTable:"),(0,a.jsx)("table",{className:"app-table",children:i.map((function(r){var o=r.title,i=r.filter,p=r.icon,c=e.filter((function(r){return r.technology&&r.technology.includes(i)}));return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("th",{children:(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[(0,a.jsx)("h1",{className:"mt-5 text-4xl",children:o}),(0,a.jsx)("img",{src:p,alt:"".concat(o," icon"),style:{width:"24px",height:"24px"}})]})})})}),(0,a.jsx)("tbody",{children:(0,a.jsx)("tr",{children:(0,a.jsx)("td",{children:c.length>0?c.map((function(r){return(0,a.jsx)(t.default,{app:r},r.name)})):(0,a.jsx)("p",{children:"No hay aplicaciones en esta categor\xeda."})})})})]},o)}))})}},16282:function(r,o,e){"use strict";e.r(o),e.d(o,{__N_SSG:function(){return h},default:function(){return j}});var a=e(85893),n=e(9008),t=e.n(n),i=e(11163),p=e(67294),c=e(81353),s=(e(25542),e(29617)),g=e(42665),l=e(69954),m=e(71879),u=[{name:"Componente simple",imageUrl:"/img/twitterFollow.jpg",description:"Aplicaci\xf3n que contine un componente Follow como el de twitter",technology:"React",repoUrl:"https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",appUrl:"https://twitterfollow.onrender.com/",icon:"/img/react-icon.png"},{name:"Componente complejo",imageUrl:"/img/shopping-card.jpg",description:"Aplicaci\xf3n para emular un rarrito de la compra",technology:"React",repoUrl:"https://github.com/jaoprogramador/jaoPortfolio",appUrl:"https://shoppingcard-1ry4.onrender.com/",icon:"/img/react-icon.png"},{name:"Node, Express",imageUrl:"/img/react-notes.jpg",description:"Aplicaci\xf3n para tomar notas con React",technology:"React, Express",repoUrl:"https://github.com/tu-usuario/react-notes",appUrl:"https://react-xhzi.onrender.com/",icon:"/img/react-icon.png"},{name:"Node-Express",imageUrl:"/img/react-persons.jpg",description:"Aplicaci\xf3n para gestionar contactos",technology:"React, Express",repoUrl:"https://github.com/tu-usuario/react-persons",appUrl:"https://reactpersons.onrender.com",icon:"/img/react-icon.png"},{name:"MongoDB",imageUrl:"/img/mongo-persons.jpg",description:"Aplicaci\xf3n para gestionar contactos con front de react y back en Node-Express y MongoDB",technology:"React, MongoDB",repoUrl:"https://github.com/tu-usuario/react-persons-mongodb",appUrl:"https://persosmongodb.onrender.com/",icon:"/img/react-icon.png"},{name:"Graphql",imageUrl:"/img/react-Graphql.jpg",description:"Aplicaci\xf3n para gestionar los libros y autores de una librer\xeda con Graphql y FRONT en react",technology:"React, Graphql",repoUrl:"https://github.com/jaoprogramador/JAOReactGraphql",appUrl:"https://jaoreactgraphqlfront.onrender.com/",icon:"/img/react-icon.png"},{name:"Typescript",imageUrl:"/img/typeScript.jpg",description:"Aplicaci\xf3n para gestionar las entradas a un hospital con pacientes con front de react y back en Node-Express y typescript",technology:"React, typescript",repoUrl:"https://github.com/jaoprogramador/TipescriptPacientesHospital",appUrl:"https://tipescriptpacienteshospital.onrender.com/",icon:"/img/react-icon.png"},{name:"Bootstrap-Redux",imageUrl:"/img/react-redux-css.jpg",description:"Aplicaci\xf3n para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",technology:"React, MongoDB, redux, bootstrap",repoUrl:"https://github.com/tu-usuario/react-persons-mongodb",appUrl:"https://mongouserblogsstilosmenuvar.onrender.com/",icon:"/img/react-icon.png"},{name:"React nativo",imageUrl:"/img/react-native.jpg",description:"Aplicaci\xf3n para gestionar usuarios y sus repositorios de GitHub con react nativo y GraphQL",technology:"React native, GraphQL",repoUrl:"https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte10Reactnativo/dProbaryampliarnuestraaplicacion",appUrl:"#",icon:"/img/react-icon.png"},{name:"github action",imageUrl:"/img/react-CICD.jpg",description:"Aplicaci\xf3n para visualizar los pokemon con react y gestionar los despliegues y tareas de test con github action , CI-CD",technology:"React, CI-CD, webpack",repoUrl:"https://github.com/jaoprogramador/EjemploCICD",appUrl:"https://ejemplocicd.onrender.com/",icon:"/img/react-icon.png"},{name:"CI-CD",imageUrl:"/img/typeScript.jpg",description:"Aplicaci\xf3n para gestionar las entradas a un hospital con pacientes con front de react, back en Node-Express y typescript y gestionar los despliegues y tareas de test con github action , CI-CD",technology:"React, CI-CD, webpack",repoUrl:"https://github.com/jaoprogramador/my-ci-cd-app/",appUrl:"https://my-ci-cd-app.onrender.com/",icon:"/img/react-icon.png"},{name:"BD relacional con PostgresSQL",imageUrl:"/img/react-bd-relacional.jpg",description:"Aplicaci\xf3n para gestionar usuarios - notas y blogs, back en Node-Express y BD relacional con PostgresSQL en RENDER",technology:"React, PostgresSQL, BD Relacional",repoUrl:"https://github.com/jaoprogramador/FullStackOpenReact/blob/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/b%20Unir%20tablas%20y%20consultas/notes/",appUrl:"https://notaspostgresql.onrender.com/api/notes?important=true",icon:"/img/react-icon.png"},{name:"Migraciones",imageUrl:"/img/react-bd-Migracion.jpg",description:"Aplicaci\xf3n para gestionar usuarios - notas y blogs, back en Node-Express y migraciones en BD",technology:"React, PostgresSQL, BD Relacional",repoUrl:"https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",appUrl:"https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",icon:"/img/react-icon.png"},{name:"Angular Material",imageUrl:"/img/AngularMaterialDrag.jpg",description:"Aplicaci\xf3n con angular para usar angular material y el componente drag-drop",technology:"Angular, angular material",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/04EJANGULARMATERIAL",appUrl:"https://angular-material-ut7i.onrender.com/",icon:"/img/angular-icon.png"},{name:"Angular carga perezosa",imageUrl:"/img/AngularCargaPerezosa.jpg",description:"Aplicaci\xf3n con angular",technology:"Angular carga perezosa para optimizar el rendimiento de carga",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/04ngModules",appUrl:"https://angular-cargaperezosamodulos.onrender.com/",icon:"/img/angular-icon.png"},{name:"Workspaces",imageUrl:"/img/angularWorkspace.jpg",description:"Aplicaci\xf3n con angular que est\xe1 compuesta cpor un workspace con distintos proyectos",technology:"Angular",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/05ngWorkpsace",appUrl:"https://angular-workspaceproyectos.onrender.com",icon:"/img/angular-icon.png"},{name:"PWA",imageUrl:"/img/AngularPipes.jpg",description:"Aplicaci\xf3n con angular PWA",technology:"Angular",repoUrl:"",appUrl:"",icon:"/img/angular-icon.png"},{name:"FORMS",imageUrl:"/img/AngularForms.jpg",description:"Aplicaci\xf3n con angular FORMS",technology:"Angular",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",appUrl:"#",icon:"/img/angular-icon.png"},{name:"PIPES",imageUrl:"/img/AngularPipes.jpg",description:"Aplicaci\xf3n con angular PIPES",technology:"Angular",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",appUrl:"#",icon:"/img/angular-icon.png"},{name:"RxJS",imageUrl:"/img/AngularRxJS.jpg",description:"Aplicaci\xf3n con angular RxJS",technology:"Angular",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/06RxJS",appUrl:"#",icon:"/img/angular-icon.png"},{name:"Login Angular",imageUrl:"/img/angular-login.jpg",description:"Aplicaci\xf3n con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas p\xe1ginas en las que podemos ver como pasar informaci\xf3n entre componentes. La aplicaci\xf3n hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes gen\xe9ricos control de errores, validacion de formularios, componentes de Angular material...",technology:"Angular, Firebase",repoUrl:"https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",appUrl:"https://proyecto-final-angular-42db4.web.app/login",icon:"/img/angular-icon.png"},{name:"Spring Framework",imageUrl:"/img/spring-framework.jpg",description:"Spring Boot, Data, Beans, MVC, Security, JWT, OAuth, Swagger, Maven, REST, Postman, Lambda, JUnit, Postgresql, MongoDB",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp",appUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp",icon:"/img/springBoot-icon.png"},{name:"Spring BEAN",imageUrl:"/img/spring-JBEANS.jpg",description:"Spring Boot, Beans",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/1EjeSpringBeans",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Spring DATA",imageUrl:"/img/spring-DATA.jpg",description:"Spring Boot, Data, JPA",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/2EjeSpringDataJPA",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Spring MVC",imageUrl:"/img/spring-REST.jpg",description:"Spring Boot, MVC, Rest",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Spring Security",imageUrl:"/img/spring-SECURITY.jpg",description:"Spring Boot, Security",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/5SpringSecurity",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"JWT",imageUrl:"/img/SpringJWT.jpg",description:"Spring Boot, Security, JWT",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/7SpringSecurityJWT",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"OAuth",imageUrl:"/img/spring-OAuth.jpg",description:"Spring Boot, Security, Oauth",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/8SecurityOauthGithub",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Swagger",imageUrl:"/img/spring-SWAGGER.jpg",description:"Spring Boot, Swagger, DATA, JPA, REST",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/3EjeRestDatajpa",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"ControlExcepciones",imageUrl:"/img/spring-ControlExcepciones.jpg",description:"Spring Boot, REST, Control de Excepciones",technology:"Spring Framework ",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/13CrtlExcepcionesRoles",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Spring Cloud Microservicios",imageUrl:"/img/springCloud.jpg",description:"Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",technology:"Spring Cloud",repoUrl:"https://github.com/jaoprogramador/SpringCloudMicroservicios",appUrl:"https://github.com/jaoprogramador/SpringCloudMicroservicios",icon:"/img/springCloud-icon.png"},{name:"Patrones de dise\xf1o",imageUrl:"/img/JavaPatters.jpg",description:"Patrones de dise\xf1o, Adapter, Singleton, Build, Facade, ",technology:"Java",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/11SecuritySpring-patterns",appUrl:"#",icon:"/img/springBoot-icon.png"},{name:"Java",imageUrl:"/img/WS-RestSOAPUI.jpg",description:"Servicios Rest que valida un DNI",technology:"Java",repoUrl:"https://github.com/jaoprogramador/RestDNI",appUrl:"https://github.com/jaoprogramador/RestDNI",icon:"/img/java.png"},{name:"Servicio SOAP",imageUrl:"/img/WS-RestSOAPUI.jpg",description:"Servicios SOAP que sube ficheros al servidor",technology:"Java",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",appUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",icon:"/img/java.png"},{name:"EJB",imageUrl:"/img/EJB.jpg",description:"EJB Sesi\xf3n, Entidad",technology:"Java",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",appUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19EJBSessionDocumentos",icon:"/img/java.png"},{name:"log4j",imageUrl:"/img/JavaLog4j.jpg",description:"Java, log4j",technology:"Java",repoUrl:"https://github.com/jaoprogramador/CursoSpringOpenBootCamp/tree/master/19ContentManagerSOAP",appUrl:"#",icon:"/img/java.png"},{name:"Ejercicios de programaci\xf3n",imageUrl:"/img/jaoweb.jpg",description:"Ejercicios de programaci\xf3n, BD, web...",technology:"HTML ",repoUrl:"https://github.com/jaoprogramador/jaoPortfolio/tree/master/jaoprogramadorweb/public",appUrl:"https://jaoprogramadorweb.onrender.com/j2ee/index.htm",icon:"/img/jaoprogramador-icon.png"}],d=e(20558),h=!0,j=function(r){r.posts;var o=(0,p.useRef)(l.showBlog),e=(0,p.useRef)(),n=(0,i.useRouter)(),h=(0,p.useState)(!1),j=(h[0],h[1]);return(0,d.LI)((function(){(0,c.E)([e.current],{y:40,x:-10,transform:"scale(0.95) skew(10deg)"},{y:0,x:0,transform:"scale(1)"}),o.current?(0,c.E)([e.current],{y:30},{y:0}):n.push("/")}),[]),(0,p.useEffect)((function(){console.log("Frameworksindex :::dataFrameworks"),j(!0)}),[]),o.current&&(0,a.jsxs)(a.Fragment,{children:[l.showCursor&&(0,a.jsx)(s.Z,{}),(0,a.jsx)(t(),{children:(0,a.jsx)("title",{children:"Frameworks"})}),(0,a.jsxs)("div",{className:"container mx-auto mb-10 ".concat(l.showCursor&&"cursor-none"),children:[(0,a.jsx)(g.Z,{isBlog:!0}),(0,a.jsxs)("div",{className:"mt-10",children:[(0,a.jsx)("h1",{ref:e,className:"mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full",children:"Frameworks."}),(0,a.jsx)("div",{className:"desktop:grid-cols-6 justify-between gap-10",children:(0,a.jsx)(m.default,{dataFrameworks:u})})]})]})]})}},20558:function(r,o,e){"use strict";e.d(o,{KO:function(){return n},LI:function(){return a}});var a=e(67294).useLayoutEffect;function n(r){if(r){var o=new Date(r);return o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate()}}},9008:function(r,o,e){r.exports=e(83121)}},function(r){r.O(0,[802,144,835,774,888,179],(function(){return o=96530,r(r.s=o);var o}));var o=r.O();_N_E=o}]);