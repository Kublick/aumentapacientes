import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Tecnicas = () => {
  return (
    <>
      <div className="px-8 mt-24 md:px-20">
        <h1 className="text-2xl font-bold text-primary">¿Que descubrirás</h1>
        <h1 className="text-2xl font-bold text-primary">
          en este entrenamiento?
        </h1>
      </div>
      {/* <div className="container mx-auto mb-40 background-image"> */}
      <div className="mx-auto mb-40">
        <div className="relative flex flex-col gap-4 px-6 mx-20 md:grid md:grid-cols-4 mt-14 top-14">
          <div className="">
            <StaticImage
              src="../images/oferta_laptop.png"
              alt="oferta laptop"
              className="mb-8"
            />
            <p className="font-light text-lightgray">
              Como eliminar las excusas y creencias que nos auto sabotean para
              conseguir pacientes.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/oferta_equipo.png"
              alt="oferta equipo"
              className="mb-8"
            />
            <p className="font-light text-lightgray">
              Cuales son las 3 áreas en las que nos conviene poner atención para
              lograr tener la cantidad de pacientes que deseamos.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/oferta_personas.png"
              alt="oferta equipo"
              className="mb-8"
            />
            <p className="font-light text-lightgray">
              Cuales son los 3 secretos de los profesionales que tienen muchos
              pacientes.
            </p>
          </div>
          <div>
            <StaticImage
              src="../images/oferta_crecimiento_desktop.png"
              alt="oferta personas"
              className="mb-8"
            />
            <p className="font-light text-lightgray">
              Cuales son los 7 errores mas comunes que provocan que no crezca
              nuestra lista de pacientes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
