import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Regalo = () => {
  const redirect = () => {
    window.open(
      "https://incrementafiles.s3.us-west-1.amazonaws.com/Aumenta+Pacientes.pdf"
    );
  };

  return (
    <div>
      <div className="m-4 ">
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="mb-10 md:mb-0 lg:mb-0 img"
        />
      </div>
      <div className="flex justify-center">
        <div className="mx-2 mt-8">
          <h1 className="text-2xl font-bold text-center text-primary ">
            !Felicitaciones por haber tomado acción nos vemos en el taller!
          </h1>

          <h1 className="text-xl font-bold text-center">
            Ya puedes descargar tu manual
          </h1>
          <img
            src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/source.gif"
            className="mx-auto"
            alt="regalo"
          />
          <div className="flex justify-center">
            <button
              className="px-12 py-4 text-base font-bold uppercase transition-transform transform border-2 md:px-20 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight"
              onClick={() => redirect()}
            >
              Abrir mi Regalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regalo;
