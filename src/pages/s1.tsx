import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Videoplayer from "../components/Videoplayer";
import { whatsapp } from "../components/utils/svg";
import { CommentsFacebook } from "../components/CommentsFacebook";

export const S1 = () => {
  const getWorkBook = () => {
    window.open(
      "https://incrementafiles.s3.us-west-1.amazonaws.com/Aumenta+Pacientes.pdf"
    );
  };

  const whatsappGroup = () => {
    window.open("https://chat.whatsapp.com/JQ2qY3qWZ8qLzw1BZHkMZO");
  };

  return (
    <div>
      <div className="pt-10 mx-9 lg:mt-5">
        <div className="flex justify-center lg:block">
          <StaticImage
            src="../images/aumenta_pacientes_logo.png"
            alt="Aumenta Pacientes Logo"
            className="lg:ml-20"
          />
        </div>
        <h1 className="mt-12 font-light text-primary text-27">
          Tu oportunidad de tener pacientes{" "}
          <span className="font-bold">Desde las redes sociales</span>
        </h1>
        <div className="mt-10">
          <Videoplayer
            url="https://www.youtube.com/embed/Q_Z-_q-_Zz4"
            controls={false}
          />
          <h2 className="text-base font-bold mt-7 text-primary">
            ¿No pudiste tomar nota o tienes duda?
          </h2>
          <p className="mt-10 text-base font-light text-primary">
            No te preocupes! Vuelve a ver el video y revisa tu cuaderno de
            trabajo. También puedes acceder al grupo de Facebook y Whatsapp.
          </p>

          <div className="flex flex-col gap-4 mt-7">
            <button
              className="w-full py-4 text-base font-bold transition-transform transform border-2 md:px-20 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight"
              onClick={() => getWorkBook()}
            >
              Cuaderno de Trabajo
            </button>
            <button
              className="w-full py-4 text-base font-bold text-white transition-transform transform md:px-20 bg-whatsapp active:scale-75 "
              onClick={() => whatsappGroup()}
            >
              Grupo de Whatsapp
            </button>
            <button className="w-full py-4 text-base font-bold uppercase transition-transform transform border-2 md:px-20 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight">
              No te lo pierdas
            </button>
          </div>
          <div className="my-20">
            <p className="text-base font-bold text-primary">
              Agrega un comentario público…
            </p>
          </div>
          <CommentsFacebook />
        </div>
      </div>
    </div>
  );
};

export default S1;
