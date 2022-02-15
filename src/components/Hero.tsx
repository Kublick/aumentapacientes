import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Counter from "./Counter";
import { useWindowSize } from "../hooks/useWindowSize";

interface HeroProps {
  fechaEvento: string;
  eventTime: string;
}

export const Hero = ({ fechaEvento, eventTime }: HeroProps): JSX.Element => {
  const { width } = useWindowSize();
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (width < 768) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  }, [width]);

  return (
    <div className="pt-8 md:grid px-9 lg:p-6 lg:gap-5 lg:mx-12 md:grid-cols-2 md:justify-items-end md:pt-6 md:gap-5">
      <div>
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="lg:mx-12"
        />
        {showImage && (
          <StaticImage
            src="../images/personas_fondo-1.png"
            alt="Personas Hero"
            className="lg:block "
          />
        )}
      </div>
      <div className="lg:place-self-end">
        <div className="mt-8 text-3xl md:text-3xl lg:text-5xl text-primary ">
          <h1 className="font-thin">¡Descubre cómo</h1>
          <h1 className="font-bold lg:text-3xl text-27">
            aumentar tu número de pacientes!{" "}
          </h1>
        </div>
        <div className="my-4 text-base font-light leading-7 md:leading-6 text-primary lg:my-7">
          <p>Por primera en 2022 nuestro entrenamiento online AUMENTA </p>
          <p>
            PACIENTES esta abierto al público del{" "}
            <span className="p-2 font-bold bg-secondary">{fechaEvento}</span>
          </p>
        </div>
        <div className="flex justify-center lg:block">
          <Counter date={new Date(eventTime)} />
        </div>
      </div>
    </div>
  );
};
