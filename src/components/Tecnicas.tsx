import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Tecnicas = () => {
  return (
    <>
      <div className="px-8 mt-24 md:px-20 mb-14">
        <h1 className="text-2xl font-bold text-primary">¿Que descubrirás</h1>
        <h1 className="text-2xl font-bold text-primary">
          en este entrenamiento?
        </h1>
      </div>
      {/* <div className="container mx-auto mb-40 background-image"> */}
      <div className="hidden mx-auto mb-40 lg:block">
        <div className="relative flex flex-col gap-4 px-6 mx-20 md:grid md:grid-cols-4 top-14">
          <div>
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
      <Carousel
        className="lg:hidden"
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <StaticImage
            src="../images/oferta_laptop.png"
            alt="oferta laptop"
            className="mb-8"
          />
          <p className="px-12 font-light text-lightgray lg:px-0 ">
            Como eliminar las excusas y creencias que nos auto sabotean para
            conseguir pacientes.
          </p>
        </div>
        <div>
          <StaticImage
            src="../images/oferta_equipo.png"
            alt="oferta equipo"
            className="mb-8"
            placeholder="blurred"
          />
          <p className="px-12 font-light text-lightgray lg:px-0">
            Cuales son las 3 áreas en las que nos conviene poner atención para
            lograr tener la cantidad de pacientes que deseamos.
          </p>
        </div>
        <div>
          <StaticImage
            src="../images/oferta_personas.png"
            alt="oferta equipo"
            className="mb-8"
            loading="eager"
            placeholder="blurred"
          />
          <p className="px-12 font-light text-lightgray lg:px-0">
            Cuales son los 3 secretos de los profesionales que tienen muchos
            pacientes.
          </p>
        </div>
        <div>
          <StaticImage
            src="../images/oferta_crecimiento_desktop.png"
            alt="oferta personas"
            className="mb-8"
            loading="eager"
            placeholder="blurred"
          />
          <p className="px-12 font-light lg:px-0 text-lightgray">
            Cuales son los 7 errores mas comunes que provocan que no crezca
            nuestra lista de pacientes.
          </p>
        </div>
      </Carousel>
    </>
  );
};
