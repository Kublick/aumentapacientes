import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Counter from "./Counter";

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-6 justify-items-end">
      <div className="">
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="mx-24"
        />
        <br />
        <StaticImage
          src="../images/personas_fondo-1.png"
          alt="Personas Hero"
          className="mx-12 mb-7"
        />
      </div>
      <div className="place-self-end">
        <div className="md:text-5xl text-primary">
          <h1 className="font-thin">¡Descubre cómo</h1>
          <h1 className="font-bold ">aumentar tu número de pacientes! </h1>
        </div>
        <div className="text-base leading-7 font-base text-primary my-7">
          <p>Por primera en 2022 nuestro entrenamiento online AUMENTA </p>
          <p>
            PACIENTES esta abierto al público del{" "}
            <span className="p-2 font-bold bg-secondary">
              09 al 15 de Marzo
            </span>
          </p>
        </div>
        <div className="">
          <Counter date={Date.now() + 400000} />
        </div>
      </div>
    </div>
  );
};
