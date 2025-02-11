# RUN PROYECT IN LOCAL
# =====================
## JAO npm install 
## npm install --legacy-peer-deps
## npm run build
## npm start


#PONER IDIOMA
npm install i18next react-i18next i18next-browser-languagedetector --legacy-peer-deps

crear fichero src/i18n.js

crear fichero json multilenguaje
    src/locales/en.json

importarlo en index.js





npm install react-i18next i18next
npm install react-i18next i18next --legacy-peer-deps

=====================
src/
└── translations/
    ├── en/
    │   ├── portfolio.json      # Traducción de portfolio.json en inglés
    │   └── posts/              # Traducción de los posts en inglés
    │       ├── firstblog.md
    │       ├── secondblog.md
    │       └── fiveblog.md
    ├── es/
    │   ├── portfolio.json      # Traducción de portfolio.json en castellano
    │   └── posts/              # Traducción de los posts en castellano
    │       ├── firstblog.md
    │       ├── secondblog.md
    │       └── fiveblog.md
    └── eu/
        ├── portfolio.json      # Traducción de portfolio.json en euskera
        └── posts/              # Traducción de los posts en euskera
            ├── firstblog.md
            ├── secondblog.md
            └── fiveblog.md


Page                                       Size     First Load JS
┌ ○ /                                      2.54 kB         140 kB
├   /_app                                  0 B            93.2 kB
├ ○ /404                                   194 B          93.4 kB
├ λ /api/blog                              0 B            93.2 kB
├ λ /api/blog/edit                         0 B            93.2 kB
├ λ /api/portfolio                         0 B            93.2 kB
├ ● /blog                                  1.33 kB         137 kB
├ ● /blog/[slug] (7330 ms)                 856 B           457 kB
├   ├ /blog/secondblog (2295 ms)
├   ├ /blog/fourblog (2269 ms)
├   ├ /blog/threeblog (2169 ms)
├   ├ /blog/fiveblog (311 ms)
├   └ /blog/firstblog
├ ○ /edit                                  3.62 kB         139 kB
├ ● /frameworks (444 ms)                   4.56 kB         140 kB
├ ● /frameworks/[slug] (4438 ms)           858 B           457 kB
├   ├ /frameworks/firstblog (2180 ms)
├   ├ /frameworks/secondblog (1960 ms)
├   ├ /frameworks/fiveblog
├   ├ /frameworks/fourblog
├   └ /frameworks/threeblog
├ ○ /frameworks/AppCard                    574 B          93.8 kB
├ ○ /frameworks/AppTable                   1.04 kB        94.3 kB
└ ○ /resume                                1.97 kB         137 kB
+ First Load JS shared by all              93.2 kB
  ├ chunks/framework-75db3117d1377048.js   45 kB
  ├ chunks/main-6d31f1caf3df54dd.js        28.8 kB
  ├ chunks/pages/_app-5f8ee1ef90dcf6c7.js  18.6 kB
  ├ chunks/webpack-5752944655d749a0.js     845 B
  └ css/48ecd580c56102f8.css               3.92 kB

  # PDF
  npm install jspdf

  npm install jspdf html2canvas

  npm install react-to-print

  # IMAGEN POSTS https://unsplash.com/es/fotos/un-fondo-azul-muy-bonito-con-una-gran-cantidad-de-pliegues-LAsBMFrH_WY
  # "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  #   "https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  #   "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  #   "https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80",
 #  IMAGEN PC


 #Curriculum pdf import React, { useEffect, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import ResumeDownload from "../components/ResumeDownload";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const resumeRef = useRef(null);
  
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,  // Cambié content a contentRef
  });

  // Contexto de idioma
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  // Cargar datos dinámicamente según el idioma
  const data = require(`../src/translations/${language}/portfolio.json`);
  const dataInit = require(`../src/translations/${language}/${language}.json`);
  const { showResume, resume } = data;
  
  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, [showResume, router]);

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
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full ${
                theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{resume?.name}</h1>
              <h2 className="text-xl mt-5">{resume?.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume?.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              {/* PDF CURRICULUM */}
              <div ref={resumeRef} >
                {/* Tu currículum aquí */}
                <ResumeDownload />
              </div>

              <Button onClick={handlePrint} type={"primary"}>
                Imprimir / Guardar como PDF
              </Button>
              {/* PDF */}
              <div></div>

              {/* Educación */}
              {resume?.education && (
                <div className="mt-5">
                  <h1 className="text-2xl font-bold"> {dataInit.resume.education} </h1>
                  <div className="mt-2">
                    <h2 className="text-lg">
                      {resume.education.universityName}
                    </h2>
                    <h3 className="text-sm opacity-75">
                      {resume.education.universityDate}
                    </h3>
                    <p className="text-sm mt-2 opacity-50">
                      {resume.education.universityPara}
                    </p>
                  </div>
                </div>
              )}

              {/* Formaciones */}
              {resume?.formations && (
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">{dataInit.resume.formations}</h1>
                  {resume.formations.map(
                    ({ id, dates, center, description, content }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={center}
                        position={description}
                        bullets={content}
                      />
                    )
                  )}
                </div>
              )}

              {/* Certificados */}
              {resume?.certifications && (
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">{dataInit.resume.certifications}</h1>
                  {resume.certifications.map(
                    ({ id, dates, center, description, content }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={center}
                        position={description}
                        bullets={content}
                      />
                    )
                  )}
                </div>
              )}

              {/* Experiencia */}
              {resume?.experiences && (
                <div className="mt-5">
                  <h1 className="text-2xl font-bold">{dataInit.resume.experience}</h1>
                  {resume.experiences.map(
                    ({ id, dates, type, position, bullets }) => (
                      <ProjectResume
                        key={id}
                        dates={dates}
                        type={type}
                        position={position}
                        bullets={bullets}
                      />
                    )
                  )}
                </div>
              )}

              {/* Habilidades */}
              <div className="mt-5">
                <h1 className="text-2xl font-bold">{dataInit.resume.skills}</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume?.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">{dataInit.resume.languajes}</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume?.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">{dataInit.resume.frameworks}</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume?.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">{dataInit.resume.others}</h2>
                      <ul className="list-disc">
                        {resume.others.map((other, index) => (
                          <li key={index} className="ml-5 py-2">
                            {other}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;



