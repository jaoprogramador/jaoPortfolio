import React from "react";
import { jsPDF } from "jspdf";

const Curriculum = () => {
  const personalInfo = {
    name: "Juan Arana Olalde",
    email: "jaoprogramador@gmail.com",
    birthDate: "17-05-1981",
  };

  const education = [
    "CFGS Desarrollo de Aplicaciones Informáticas, San Jorge Santurce (2003 - 2005)",
    "CFGS Administración de Sistemas Informáticos, Saturnino de la Peña, Sestao (2001 - 2003)",
  ];

  const experience = [
    "Analista Funcional - Interior (06/2023 - 10/2023) - Java, Hibernate, IBM WebSphere",
    "Analista Funcional - EJIE (10/2022 - 05/2023) - Java-J2EE, Spring MVC, Oracle",
    "Analista Programador - Vaillant Group (05/2019 - 10/2022) - Java, Microservicios, JSP, Oracle",
  ];

  const skills = [
    "Java , Spring, React, Angular, NodeJS, Docker, AWS, Git, SVN",
    "Microservicios, API REST, GraphQL, SQL, MongoDB",
    "Wildfly, Weblogic, Tomcat, JBoss",
    "CI/CD, Linux, Kubernetes, Seguridad en Redes",
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    doc.text(`Currículum de ${personalInfo.name}`, 20, 20);
    doc.text(`Email: ${personalInfo.email}`, 20, 30);
    doc.text(`Fecha de nacimiento: ${personalInfo.birthDate}`, 20, 40);
    
    doc.text("\nFormación Académica:", 20, 50);
    education.forEach((edu, index) => {
      doc.text(`- ${edu}`, 20, 60 + index * 10);
    });

    doc.text("\nExperiencia Laboral:", 20, 90);
    experience.forEach((exp, index) => {
      doc.text(`- ${exp}`, 20, 100 + index * 10);
    });

    doc.text("\nHabilidades Técnicas:", 20, 140);
    skills.forEach((skill, index) => {
      doc.text(`- ${skill}`, 20, 150 + index * 10);
    });

    doc.save("curriculum.pdf");
  };

  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <p>Email: {personalInfo.email}</p>
      <p>Fecha de nacimiento: {personalInfo.birthDate}</p>
      
      <h2>Formación Académica</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>{edu}</li>
        ))}
      </ul>
      
      <h2>Experiencia Laboral</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
      
      <h2>Habilidades Técnicas</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      
      <button onClick={generatePDF}>Generar PDF</button>
    </div>
  );
};

export default Curriculum;
