"use strict";
(() => {
var exports = {};
exports.id = 1;
exports.ids = [1,241,884];
exports.modules = {

/***/ 6030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apps = [
    // R E A C T
    // ###########
    {
        //name: "Twitter Follow",
        name: "Componente simple",
        imageUrl: "/img/twitterFollow.jpg",
        description: "Aplicaci\xf3n que contine un componente Follow como el de twitter",
        technology: "React",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/00-hola-mundo",
        appUrl: "https://twitterfollow.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Carrito de la compra",
        name: "Componente complejo",
        imageUrl: "/img/shopping-card.jpg",
        description: "Aplicaci\xf3n para emular un rarrito de la compra",
        technology: "React",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio",
        appUrl: "https://shoppingcard-1ry4.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Notas con React",
        name: "Node, Express",
        imageUrl: "/img/react-notes.jpg",
        description: "Aplicaci\xf3n para tomar notas con React",
        technology: "React, Express",
        repoUrl: "https://github.com/tu-usuario/react-notes",
        appUrl: "https://react-xhzi.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Agenda de Personas",
        name: "Node-Express",
        imageUrl: "/img/react-persons.jpg",
        description: "Aplicaci\xf3n para gestionar contactos",
        technology: "React, Express",
        repoUrl: "https://github.com/tu-usuario/react-persons",
        appUrl: "https://reactpersons.onrender.com",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Agenda MongoDB",
        name: "MongoDB",
        imageUrl: "/img/mongo-persons.jpg",
        description: "Aplicaci\xf3n para gestionar contactos con front de react y back en Node-Express y MongoDB",
        technology: "React, MongoDB",
        repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
        appUrl: "https://persosmongodb.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Librería Autores",
        name: "Graphql",
        imageUrl: "/img/react-Graphql.jpg",
        description: "Aplicaci\xf3n para gestionar los libros y autores de una librer\xeda con Graphql y FRONT en react",
        technology: "React, Graphql",
        repoUrl: "https://github.com/jaoprogramador/JAOReactGraphql",
        appUrl: "https://jaoreactgraphqlfront.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Citas Hospital",
        name: "Typescript",
        imageUrl: "/img/typeScript.jpg",
        description: "Aplicaci\xf3n para gestionar las entradas a un hospital con pacientes con front de react y back en Node-Express y typescript",
        technology: "React, typescript",
        repoUrl: "https://github.com/jaoprogramador/TipescriptPacientesHospital",
        appUrl: "https://tipescriptpacienteshospital.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Usuarios Blogs",
        name: "Bootstrap-Redux",
        imageUrl: "/img/react-redux-css.jpg",
        description: "Aplicaci\xf3n para gestionar usuarios y sus blogs con react y back en Node-Express, Bootstrap, Redux y MongoDB",
        technology: "React, MongoDB, redux, bootstrap",
        repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
        appUrl: "https://mongouserblogsstilosmenuvar.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Repositorios , revisiones, usuarios",
        name: "React nativo",
        imageUrl: "/img/react-native.jpg",
        description: "Aplicaci\xf3n para gestionar usuarios y sus repositorios de GitHub con react nativo y GraphQL",
        technology: "React native, GraphQL",
        repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte10Reactnativo/dProbaryampliarnuestraaplicacion",
        appUrl: "#",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Pokemon cards",
        name: "github action",
        imageUrl: "/img/react-CICD.jpg",
        description: "Aplicaci\xf3n para visualizar los pokemon con react y gestionar los despliegues y tareas de test con github action , CI-CD",
        technology: "React, CI-CD, webpack",
        repoUrl: "https://github.com/jaoprogramador/EjemploCICD",
        appUrl: "https://ejemplocicd.onrender.com/",
        icon: "/img/react-icon.png"
    },
    {
        //name: "Hospital citas",
        name: "CI-CD",
        imageUrl: "/img/typeScript.jpg",
        description: "Aplicaci\xf3n para gestionar las entradas a un hospital con pacientes con front de react, back en Node-Express y typescript y gestionar los despliegues y tareas de test con github action , CI-CD",
        technology: "React, CI-CD, webpack",
        repoUrl: "https://github.com/jaoprogramador/my-ci-cd-app/",
        appUrl: "https://my-ci-cd-app.onrender.com/",
        icon: "/img/react-icon.png"
    },
    //BD - API EN RENDER
    {
        //name: "Notas - Blogs - Usuarios",
        name: "BD relacional con PostgresSQL",
        imageUrl: "/img/react-bd-relacional.jpg",
        description: "Aplicaci\xf3n para gestionar usuarios - notas y blogs, back en Node-Express y BD relacional con PostgresSQL en RENDER",
        technology: "React, PostgresSQL, BD Relacional",
        repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/blob/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/b%20Unir%20tablas%20y%20consultas/notes/",
        appUrl: "https://notaspostgresql.onrender.com/api/notes?important=true",
        icon: "/img/react-icon.png"
    },
    //MIGRACION BD - NO DEPLOY RENDER
    {
        //name: "Notas - Blogs - Usuarios",
        name: "Migraciones",
        imageUrl: "/img/react-bd-Migracion.jpg",
        description: "Aplicaci\xf3n para gestionar usuarios - notas y blogs, back en Node-Express y migraciones en BD",
        technology: "React, PostgresSQL, BD Relacional",
        repoUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",
        appUrl: "https://github.com/jaoprogramador/FullStackOpenReact/tree/main/Parte%2013%20Utilizando%20bases%20de%20datos%20relacionales/c%20Migraciones%2C%20relaciones%20de%20muchos-a-muchos/notes",
        icon: "/img/react-icon.png"
    },
    // A N G U L A R
    // ################
    {
        name: "Angular Material",
        imageUrl: "/img/AngularMaterialDrag.jpg",
        description: "Aplicaci\xf3n con angular para usar angular material y el componente drag-drop",
        technology: "Angular, angular material",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04EJANGULARMATERIAL",
        appUrl: "https://angular-material-ut7i.onrender.com/",
        icon: "/img/angular-icon.png"
    },
    {
        name: "Angular carga perezosa",
        imageUrl: "/img/AngularCargaPerezosa.jpg",
        description: "Aplicaci\xf3n con angular",
        technology: "Angular carga perezosa para optimizar el rendimiento de carga",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/04ngModules",
        appUrl: "https://angular-cargaperezosamodulos.onrender.com/",
        icon: "/img/angular-icon.png"
    },
    {
        name: "Workspaces",
        imageUrl: "/img/angularWorkspace.jpg",
        description: "Aplicaci\xf3n con angular que est\xe1 compuesta cpor un workspace con distintos proyectos",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/05ngWorkpsace",
        appUrl: "https://angular-workspaceproyectos.onrender.com",
        icon: "/img/angular-icon.png"
    },
    //PWA HOLAJAO
    {
        name: "PWA",
        imageUrl: "/img/AngularPipes.jpg",
        description: "Aplicaci\xf3n con angular PWA",
        technology: "Angular",
        repoUrl: "",
        appUrl: "",
        icon: "/img/angular-icon.png"
    },
    //FORMS Router6
    {
        name: "FORMS",
        imageUrl: "/img/AngularForms.jpg",
        description: "Aplicaci\xf3n con angular FORMS",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/03ngRouting",
        appUrl: "#",
        icon: "/img/angular-icon.png"
    },
    //PIPES HOLAJAO
    {
        name: "PIPES",
        imageUrl: "/img/AngularPipes.jpg",
        description: "Aplicaci\xf3n con angular PIPES",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/HolaJAO",
        appUrl: "#",
        icon: "/img/angular-icon.png"
    },
    //RxJS
    {
        name: "RxJS",
        imageUrl: "/img/AngularRxJS.jpg",
        description: "Aplicaci\xf3n con angular RxJS",
        technology: "Angular",
        repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master/06RxJS",
        appUrl: "#",
        icon: "/img/angular-icon.png"
    },
    {
        name: "Login Angular",
        imageUrl: "/img/angular-login.jpg",
        description: "Aplicaci\xf3n con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas p\xe1ginas en las que podemos ver como pasar informaci\xf3n entre componentes. La aplicaci\xf3n hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes gen\xe9ricos control de errores, validacion de formularios, componentes de Angular material...",
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
    {
        name: "Spring Cloud Microservicios",
        imageUrl: "/img/springCloud.jpg",
        description: "Servicios Rest, JPA, Api Rest, Config, Eureka Server, Feighn, Hystry, Gateway, Actuator, Loombok, Gradle",
        technology: "Spring Cloud",
        repoUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
        appUrl: "https://github.com/jaoprogramador/SpringCloudMicroservicios",
        icon: "/img/springCloud-icon.png"
    },
    //Patrones de diseño
    {
        name: "Patrones de dise\xf1o",
        imageUrl: "/img/JavaPatters.jpg",
        description: "Patrones de dise\xf1o, Adapter, Singleton, Build, Facade, ",
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
        description: "EJB Sesi\xf3n, Entidad",
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
        name: "Ejercicios de programaci\xf3n",
        imageUrl: "/img/jaoweb.jpg",
        description: "Ejercicios de programaci\xf3n, BD, web...",
        technology: "HTML ",
        repoUrl: "https://github.com/jaoprogramador/jaoPortfolio/tree/master/jaoprogramadorweb/public",
        appUrl: "https://jaoprogramadorweb.onrender.com/j2ee/index.htm",
        icon: "/img/jaoprogramador-icon.png"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apps);


/***/ }),

/***/ 1030:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1353);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5542);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9617);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2665);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9954);
/* harmony import */ var _pages_frameworks_AppTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1879);
/* harmony import */ var _data_appsDataFrameworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6030);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(558);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_7__]);
_components_Header__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











//"../../data/appsDataFrameworks.json";


const Framework = ({ posts  })=>{
    const showBlog = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showBlog);
    const text = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .E)([
            text.current
        ], {
            y: 40,
            x: -10,
            transform: "scale(0.95) skew(10deg)"
        }, {
            y: 0,
            x: 0,
            transform: "scale(1)"
        });
        if (showBlog.current) (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .stagger */ .E)([
            text.current
        ], {
            y: 30
        }, {
            y: 0
        });
        else router.push("/");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        console.log("Frameworksindex :::dataFrameworks");
        setMounted(true);
    }, []);
    return showBlog.current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Frameworks"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container mx-auto mb-10 ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_8__.showCursor && "cursor-none"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isBlog: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                ref: text,
                                className: "mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full",
                                children: "Frameworks."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "desktop:grid-cols-6 justify-between gap-10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_frameworks_AppTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    dataFrameworks: _data_appsDataFrameworks__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    const posts = (0,_utils_api__WEBPACK_IMPORTED_MODULE_12__/* .getAllPosts */ .Bd)([
        "slug",
        "title",
        "image",
        "preview",
        "author",
        "date", 
    ]);
    return {
        props: {
            posts: [
                ...posts
            ]
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Framework);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1263:
/***/ ((module) => {

module.exports = require("custom-cursor-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [835,134,382,729,879], () => (__webpack_exec__(1030)));
module.exports = __webpack_exports__;

})();