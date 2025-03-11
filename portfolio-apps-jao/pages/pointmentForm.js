import React, { useEffect, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";


const PointmentForm = () => {
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

            JAO CITA

           
          </div>
        </div>
      )}
    </div>
  </>
  );
};

export default PointmentForm;