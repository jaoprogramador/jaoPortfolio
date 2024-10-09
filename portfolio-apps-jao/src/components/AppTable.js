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
      description: "Aplicación para gestionar contactos con front de react y back en Node-Express yMongoDB",
      technology: "React, MongoDB",
      repoUrl: "https://github.com/tu-usuario/react-persons-mongodb",
      appUrl: "https://persosmongodb.onrender.com"
    },
    {
      name: "Login Angular",
      imageUrl: "/img/angular-login.jpg",  
      description: "Aplicación con angular v17 logueo que se autentica contra un API Rest que nos proporciona un token de acceso. Hacemos un routing securizado de distintas páginas en las que podemos ver como pasar información entre componentes. La aplicación hace uso de servicios y peticiones HTTP para el login o para obtener respuestas JSON y tratar la info por pantalla.Se hace uso de PIPE, para definir componentes genéricos control de errores, validacion de formularios, componentes de Angular material...",
      technology: "Angular, Firebase",
      repoUrl: "https://github.com/jaoprogramador/angular-apps/tree/master",
      appUrl: "https://proyecto-final-angular-42db4.web.app/login"
    }
  ];
  
  // Filtramos las aplicaciones por su tecnología
  const reactApps = apps.filter(app => app.technology.includes("React"));
  const angularApps = apps.filter(app => app.technology.includes("Angular"));
  
  const AppTable = () => {
    return (
      <table className="app-table">
        <thead>
          <tr>
            <th>Aplicaciones en React</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {reactApps.map(app => (
                <AppCard key={app.name} app={app} />
              ))}
            </td>
          </tr>
        </tbody>
  
        <thead>
          <tr>
            <th>Aplicaciones en Angular</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {angularApps.map(app => (
                <AppCard key={app.name} app={app} />
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default AppTable;
