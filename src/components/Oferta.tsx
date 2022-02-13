import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { libroTrabajo, whatsapp } from "./utils/svg";

export const Oferta = () => {
  return (
    <div className="mx-24 mt-16 mb-20">
      <div className="grid items-center grid-cols-2">
        <div className=" text-primary">
          <h1 className="text-2xl font-bold">¿Para quien</h1>
          <h1 className="text-2xl font-bold">es este taller?</h1>
          <div className="grid grid-cols-2 mt-12">
            <ul className="text-base font-light text-lightgray">
              <li>-Psicólogo</li>
              <li>-Nutriólogo</li>
              <li>-Cosmetologia</li>
            </ul>
            <ul className="text-base font-light">
              <li>-Terapeuta</li>
              <li>-Coach</li>
              <li>-Profesional de la salud</li>
            </ul>
          </div>
        </div>
        <div>
          <StaticImage src="../images/mock_oferta_h1.png" alt="Mock Oferta" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-24">
        <div>
          <StaticImage
            src="../images/oferta_laptop_web.png"
            alt="Oferta Laptop"
          />
        </div>
        <div className="text-primary">
          <h1 className="text-2xl font-bold">¿Qué incluye</h1>
          <h1 className="text-2xl font-bold">tu entrenamiento?</h1>
          <div className="grid grid-cols-2 ">
            <div className="flex gap-4">
              <StaticImage
                src="../images/oferta_libro_trabajo_desktop.png"
                alt="logo plantilla trabajo"
              />
              <p className="self-center text-lg font-semibold">
                Plantilla de trabajo
              </p>
            </div>
            <div className="flex gap-4">
              <StaticImage
                src="../images/oferta_whatsapp.svg"
                alt="logo whatasapp oferta"
                className="w-auto"
              />

              <p className="self-center text-lg font-semibold">
                Comunidad de Whatsapp
              </p>
            </div>
            <div className="flex gap-4">
              <StaticImage
                src="../images/oferta_mentoria_desktop.png"
                alt="logo mentoria grupal"
                className="min-w-100"
              />
              <p className="self-center text-lg font-semibold leading-5">
                Mentoria grupal <br /> <span>el último día</span> del evento
              </p>
            </div>
            <div className="flex gap-4">
              <StaticImage
                src="../images/oferta_video_desktop.png"
                alt="logo facebook"
              />
              <p className="self-center text-lg font-semibold">
                Transmisión <br />
                en vivo del taller
              </p>
            </div>
            <div className="flex gap-4">
              <StaticImage
                src="../images/oferta_facebook_desktop.png"
                alt="logo facebook"
              />
              <p className="self-center text-lg font-semibold">
                Grupo de Facebook
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-9">
            <button className="px-20 py-4 text-base font-bold uppercase border-2 bg-secondary text-primary border-primary">
              ¡Quiero registrarme!
            </button>
            <h2 className="text-4xl font-bold line-through mt-9 text-primary">
              Total: $97 dólares
            </h2>
            <h1 className="font-bold text-93">GRATIS</h1>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl font-bold text-primary">¿Que descubrirás</h1>
        <h1 className="text-2xl font-bold text-primary">
          en este entrenamiento?
        </h1>
      </div>
    </div>
  );
};