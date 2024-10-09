import React from 'react'; 

const AppCard = ({ app }) => {
  return (
    <div className="app-card">
      <a href={app.appUrl} target="_blank" rel="noopener noreferrer">
        <img src={app.imageUrl} alt={app.name} className="app-image" />
      </a>
      <div className="app-info">
        <h3>{app.name}</h3>
        <p><strong>Descripción:</strong> {app.description}</p>
        <p><strong>Tecnología:</strong> {app.technology}</p>
        <p><a href={app.repoUrl} target="_blank" rel="noopener noreferrer">Repositorio en GitHub</a></p>
      </div>
    </div>
  );
};

export default AppCard;
