/* import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";
// Data
//import { name, showResume } from "../data/portfolio.json";
//import { resume } from "../data/portfolio.json";
//import data from "../data/portfolio.json";

const Resume = () => {
  // Contexto de idioma
  const { language } = useContext(LanguageContext);
  
  // Cargar datos dinámicamente según el idioma
  const data = require(`../src/translations/${language}/portfolio.json`);
  const showResume = require(`../src/translations/${language}/portfolio.json`);
  const resume = require(`../src/translations/${language}/portfolio.json`);
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    console.log('showResume:::',resume);
    console.log('resume:::',showResume);
    console.log('data:::',data);
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
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
                mount && theme.theme === "dark" ? "bg-slate-800" : "bg-gray-50"
              } max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              <h1 className="text-3xl font-bold">{resume.name}</h1>
              <h2 className="text-xl mt-5">{resume.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">
                {resume.description}
              </h2>
              <div className="mt-2">
                <Socials />
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Experience</h1>

                {resume.experiences.map(
                  ({ id, dates, type, position, bullets }) => (
                    <ProjectResume
                      key={id}
                      dates={dates}
                      type={type}
                      position={position}
                      bullets={bullets}
                    ></ProjectResume>
                  )
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Education</h1>
                <div className="mt-2">
                  <h2 className="text-lg">{resume.education.universityName}</h2>
                  <h3 className="text-sm opacity-75">
                    {resume.education.universityDate}
                  </h3>
                  <p className="text-sm mt-2 opacity-50">
                    {resume.education.universityPara}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="flex mob:flex-col desktop:flex-row justify-between">
                  {resume.languages && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Languages</h2>
                      <ul className="list-disc">
                        {resume.languages.map((language, index) => (
                          <li key={index} className="ml-5 py-2">
                            {language}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.frameworks && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Frameworks</h2>
                      <ul className="list-disc">
                        {resume.frameworks.map((framework, index) => (
                          <li key={index} className="ml-5 py-2">
                            {framework}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {resume.others && (
                    <div className="mt-2 mob:mt-5">
                      <h2 className="text-lg">Others</h2>
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

export default Resume; */
import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";

const Resume = () => {
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

