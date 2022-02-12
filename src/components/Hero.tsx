import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Counter from "./Counter";

interface HeroProps {
  fechaEvento: string;
  eventTime: string;
}

export const Hero = ({ fechaEvento, eventTime }: HeroProps): JSX.Element => {
  return (
    <div className="grid grid-cols-2 gap-5 p-6 mx-12 justify-items-end">
      <div className="">
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="mx-12"
        />
        <br />
        <StaticImage
          src="../images/personas_fondo-1.png"
          alt="Personas Hero"
          className="mb-7"
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
            <span className="p-2 font-bold bg-secondary">{fechaEvento}</span>
          </p>
        </div>
        <div>
          <Counter date={new Date(eventTime)} />
        </div>
      </div>
    </div>
  );
};
