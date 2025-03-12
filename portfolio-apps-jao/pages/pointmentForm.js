import React, { useEffect, useState, useContext, useRef } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import { useTheme } from "next-themes";
import { LanguageContext } from "../context/LanguageContext";
import Head from "next/head";
import emailjs from "emailjs-com";
import Button from "../components/Button";
const PointmentForm = () => {
  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const resumeRef = useRef(null); // Referencia para capturar el currículum
  const text = useRef();
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

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    fecha: "",
    hora: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bb5n3qh", // Reemplaza con tu Service ID
        "template_zcgtqjq", // Reemplaza con tu Template ID
        formData,
        "3nVB-3t7-qFEv-s7s" // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          alert("¡Cita programada con éxito! Revisa tu correo.");
          setFormData({
            nombre: "",
            apellidos: "",
            email: "",
            fecha: "",
            hora: "",
          }); // Limpia el formulario tras enviarlo
        },
        (error) => {
          alert("Error al enviar el correo. Inténtalo de nuevo.");
        }
      );
  };

  return (
    <>
      {data.showCursor && <Cursor />}
      <Head>
        <title>Programar cita</title>
      </Head>
      <div className={`container mx-auto mb-10 ${data.showCursor && "cursor-none"}`}>
        <Header isBlog={true}></Header>
        <div className="mt-10">
          <h1 ref={text} className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full">
            Programar cita.
          </h1>
        </div>
        {/* FORMULARIO CITA */}
        {/* ================= */}
        <form onSubmit={handleSubmit} className="mt-10 p-5 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <div className="mb-4">
            <label className="block text-lg">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Hora</label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>
           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Enviar
          </button> 
          {/* <Button type="submit" >Enviar</Button> ARREGLAR COLOR y que use el boton*/}
        </form>
      </div>
    </>
  );
};

export default PointmentForm;
