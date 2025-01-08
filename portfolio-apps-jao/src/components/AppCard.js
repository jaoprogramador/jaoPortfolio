import React from 'react'; 

const AppCard = ({ app }) => {
  console.log('AppTable:', app);
  return (
    <div className="app-card">
      <a href={app.appUrl} target="_blank" rel="noopener noreferrer">
        <h5>{app.name}</h5>
        
          <img src={app.imageUrl} alt={app.name} className="app-image" />
        
        <div className="app-info">
          <h3>{app.name}</h3>
          <p><strong>Descripción:</strong> {app.description}</p>
          <p><strong>Tecnología:</strong> {app.technology}</p>
          <p><a href={app.appUrl} target="_blank" rel="noopener noreferrer">Visitar App</a></p>
          <p><a href={app.repoUrl} target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a></p>
          <p>
          <img src={app.imageUrl} alt={app.name} className="app-image" />
          </p>
        
        </div>
      </a>
    </div>
  );
};

export default AppCard;
