import React, { useEffect, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const resumeRef = useRef(null); // Referencia para capturar el currículum

  //const data = require(`../src/translations/${language}/portfolio.json`);
  const data = require(`../src/translations/${language}/resumeCurriculum.json`);
  const dataInit = require(`../src/translations/${language}/${language}.json`);
  const { showResume, resume } = data;

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [showResume, router]);

  // Función para descargar el PDF
  /* const downloadPDF = () => {
    const input = resumeRef.current;
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
  
      const imgWidth = 190; // Ancho útil en mm (dejamos márgenes)
      const pageHeight = 297; // Alto A4 en mm
      const marginTop = 20; // Espacio para encabezado
      const marginBottom = 20; // Espacio para pie de página
      const contentHeight = pageHeight - marginTop - marginBottom; // Espacio disponible
  
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = marginTop;
      let pageNumber = 1;
  
      while (heightLeft > 0) {
        if (pageNumber > 1) pdf.addPage(); // Añadir nueva página si no es la primera
  
        // 🔹 ENCABEZADO

        console.log('downloadPDF::::ENCABEZADO')
        pdf.setFontSize(14);
        pdf.text(resume?.fullName, 15, 10); // Nombre en la esquina superior izquierda
        pdf.setFontSize(10);
        pdf.text("Currículum Vitae", 150, 10); // Título en la esquina superior derecha
  
        // 🔹 CONTENIDO
        console.log('downloadPDF::::CONTENIDO')
        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
  
        // 🔹 PIE DE PÁGINA
        console.log('downloadPDF::::PIE')
        pdf.setFontSize(10);
        pdf.text(`Página ${pageNumber}`, 105, 290, { align: "center" });
  
        heightLeft -= contentHeight;
        position -= contentHeight;
        pageNumber++;
      }
  
      pdf.save(`${resume?.name}_CV.pdf`);
    });
  }; */
  
  

  return (
    <>
    {process.env.NODE_ENV === "development" && (
      <div className="fixed bottom-6 right-6">
        <Button onClick={() => router.push("/edit")} type={"primary"}>
          Edit Resume
        </Button>
      </div>
    )}
    {data.showCursor && <Cursor />}
    <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
      <Header isBlog />
      {mount && (
        <div className="mt-5 w-full flex flex-col items-center">
          <div
            ref={resumeRef}
            className={`w-full ${theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"}
            max-w-4xl p-10 mob:p-3 desktop:p-10 rounded-lg shadow-sm`}
          >
            <h1 className="text-3xl font-bold">{resume?.name}</h1>
            <h2 className="text-xl mt-2">{resume?.tagline}</h2>
            <h2 className="w-4/5 text-lg mt-2 opacity-50">{resume?.description}</h2>
            <div className="mt-2">
              <Socials />
            </div>

            {/* Educación */}
            {resume?.education && (
              <div className="mt-6">
                <h1 className="text-2xl font-bold">{dataInit.resume.education}</h1>
                {resume.education.map((edu, index) => (
                  <div key={index} className="mt-2">
                    <p className="font-semibold">► {edu.program} ({edu.universityName})</p>
                    <p className="text-sm opacity-75">{edu.dates}</p>
                    <p className="text-sm opacity-50">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Experiencia */}
            {resume?.experiences && (
              <div className="mt-6">
                <h1 className="text-2xl font-bold">{dataInit.resume.experience}</h1>
                {resume.experiences.map(({ id, dates, type, position, bullets }) => (
                  <div key={id} className="mt-4">
                    <p className="font-semibold">► {position} ({type})</p>
                    <p className="text-sm opacity-75">{dates}</p>
                    <ul className="mt-2">
                      {bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm opacity-75">• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Certificaciones */}
            {resume?.certifications && (
              <div className="mt-6">
                <h1 className="text-2xl font-bold">{dataInit.resume.certifications}</h1>
                {resume.certifications.map(({ id, title, date }) => (
                  <div key={id} className="mt-2">
                    <p className="font-semibold">► {title}</p>
                    <p className="text-sm opacity-75">{date}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Habilidades técnicas */}
            {resume?.skills && (
              <div className="mt-6">
                <h1 className="text-2xl font-bold">{dataInit.resume.skills}</h1>
                <div className="mt-4">
                  {Object.entries(resume.skills).map(([category, skills], index) => (
                    <div key={index} className="mb-4">
                      <h2 className="text-xl font-semibold">{category.replace(/([A-Z])/g, ' $1')}</h2> {/* Capitaliza y formatea el nombre de la categoría */}
                      <ul className="mt-2">
                        {skills.map((skill, i) => (
                          <li key={i} className="text-sm opacity-75">• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Botón para descargar el PDF */}
            <div className="mt-6 flex justify-center">
              <Button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/pdfCurriculum/JAOCuriculum.pdf'; // Ruta al archivo en la carpeta raíz
                    link.download = 'JAOCuriculum.pdf'; // Nombre del archivo que se descargará
                    link.click(); // Simula el clic para descargar el archivo
                  }}
                  type="primary" 
              /* onClick={downloadPDF} type="primary" */
              >
                Descargar PDF
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default Resume;