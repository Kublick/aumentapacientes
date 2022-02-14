import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { logoFacebook, logoInstagram, logoYouTube } from "./utils/svg";

export const Footer = () => {
  return (
    <div className="pt-16 px-9 md:px-20 md:pt-11 bg-primary">
      <div className="md:flex md:justify-between md:flex-row md:items-center ">
        <StaticImage
          src="../images/aumenta_blanco_desktop.png"
          alt="Aumenta Pacientes Logo"
        />
        <div className="flex gap-5 mt-9">
          <button
            onClick={() =>
              window.open("https://www.instagram.com/psicologaberenice/")
            }
          >
            {logoInstagram}
          </button>
          <button
            onClick={() =>
              window.open(
                "http://www.facebook.com/Psic%C3%B3loga-Berenice-Bastidas-Incrementa-tu-consulta-365202393876165/"
              )
            }
          >
            {logoFacebook}
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCoiQ74yUzLm6ZRUcB_rhPIQ"
              )
            }
          >
            {logoYouTube}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-16 text-xs font-semibold leading-5 text-white md:flex-row mt-14">
        <div>
          <a href="https://aumentapacientes.com">
            https://aumentapacientes.com
          </a>
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
      <div className="flex flex-col gap-6 mt-16 lg:flex-row lg:justify-between md:gap-0">
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
