import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Counter from "./Counter";

interface HeroProps {
  fechaEvento: string;
  eventTime: string;
}

export const Hero = ({ fechaEvento, eventTime }: HeroProps): JSX.Element => {
  return (
    <div className="pt-10 lg:grid px-9 lg:p-6 lg:gap-5 lg:mx-12 lg:grid-cols-2 lg:justify-items-end">
      <div>
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="lg:mx-12"
        />
        <br />
        <StaticImage
          src="../images/personas_fondo-1.png"
          alt="Personas Hero"
          className="hidden mb-7 lg:block "
        />
      </div>
      <div className="lg:place-self-end">
        <div className="mt-20 text-3xl lg:text-5xl text-primary">
          <h1 className="font-thin">¡Descubre cómo</h1>
          <h1 className="font-bold lg:text-3xl text-27">
            aumentar tu número de pacientes!{" "}
          </h1>
        </div>
        <div className="my-8 text-base leading-7 font-base text-primary lg:my-7">
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
