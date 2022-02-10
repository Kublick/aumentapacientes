import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { socialesBlancos } from "./utils/svg";

export const Footer = () => {
  return (
    <div className="px-20 pt-11 bg-primary">
      <div className="flex items-center justify-between ">
        <StaticImage
          src="../images/aumenta_blanco_desktop.png"
          alt="Aumenta Pacientes Logo"
        />
        {socialesBlancos}
      </div>
      <div className="flex gap-16 text-xs font-semibold leading-5 text-white mt-14">
        <div>
          <p>https://incrementatuconsulta.com</p>
          <p>Psicologa Berenice Bastidas</p>
        </div>
        <div>
          <p>Mexicali Baja California, México</p>
          <p>Whatsapp: + 52 (686) 234-9366</p>
        </div>
      </div>
      <p className="mt-12 text-xs leading-5 text-white">
        Este sitio no forma parte del sitio de Facebook o Facebook Inc. Además,
        este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK
        es una marca registrada de FACEBOOK, Inc. Cuando se registre para este
        taller gratuito, ocasionalmente recibirá correos electrónicos gratuitos,
        consejos útiles, videos y actualizaciones para hacer crecer tu lista de
        pacientes y temas relacionados. Estamos compartiendo lo que hemos
        aprendido de nuestras experiencias y la lo desee, utilizando el enlace
        para des suscribirse que aparecerá en los correos electrónicos.
      </p>
      <div className="flex justify-between mt-16">
        <p className="mt-5 text-sm font-extrabold leading-4 text-white">
          Legal Terms - Acerca de las politicas de privacidad y uso de cookies
        </p>
        <p className="px-2 pt-5 pb-12 text-sm font-extrabold text-primary bg-secondary">
          Aumenta Pacientes Derechos Reservados 2022
        </p>
      </div>
    </div>
  );
};
