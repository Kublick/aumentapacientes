import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Footer } from "../components/Footer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

declare const window: Window &
  typeof globalThis & {
    fbq: any;
  };

const Gracias = () => {
  const whatsAppLink = "";

  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "CompleteRegistration");
    }
  }

  const handleAddToWhatsapp = () => {
    console.log("agregar a whatsapp", whatsAppLink);
  };

  return (
    <>
      <div className="pt-10 lg:mt-5">
        <div className="flex justify-center lg:block">
          <StaticImage
            src="../images/aumenta_pacientes_logo.png"
            alt="Aumenta Pacientes Logo"
            className="lg:ml-20"
          />
        </div>
        <div className="mx-10 mt-10 lg:grid lg:items-center lg:grid-cols-2 lg:gap-10 lg:mx-20 text-primary">
          <div>
            <div className="text-4xl text-center lg:text-44">
              <h1 className="mb-2 font-light leading-7 lg:mb-4">
                ¡Felicidades
              </h1>
              <span className="font-bold ">Gracias por registrarte!</span>
            </div>
            <div className="mb-4 text-base font-light md:p-2">
              <p className="mt-8 mb-9 ">
                Para finalmente completar tu registro faltan dos pasos muy
                pequeños e IMPORTANTES
              </p>
              <p className="mb-9">
                1) Unete al grupo privado en WHATSAPP para recibir todas las
                notificaciones del entrenamiento sólo da click aquí mismo.{" "}
              </p>
              <p>
                2) Ve a tu correo con el cual te registraste y busca el correo
                con el título:{" "}
                <span className="font-bold">
                  [IMPORTANTE] tu cupo esta confirmado.
                </span>{" "}
                En este correo viene un LINK que tendrás que presionar para
                AUTORIZARME a que te envíe por este medio el CUADERNO DE TRABAJO
                con el cual vamos a entrenar juntos y los detalles como el
                temario y los horarios, si no lo haces tristemente no podré
                enviártelo.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <CountdownCircleTimer
              isPlaying
              duration={120}
              size={300}
              colors="#004777"
              strokeWidth={24}
            >
              {() => {
                return (
                  <div>
                    <p className="w-64 text-lg text-center">
                      No te pierdas esta oportunidad
                    </p>
                  </div>
                );
              }}
            </CountdownCircleTimer>
          </div>
        </div>
        <div className="flex flex-col px-10 py-8 text-white lg:flex-row lg:items-center lg:justify-center lg:gap-28 bg-primary mt-9 lg:px-0">
          <h1 className="text-4xl font-bold">¡Nos vemos en el taller!</h1>
          <button
            type="submit"
            className="mt-8 font-bold text-white uppercase lg:px-24 h-14 bg-whatsapp lg:mt-0"
            onClick={handleAddToWhatsapp}
          >
            Unirme al grupo
          </button>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Gracias;
