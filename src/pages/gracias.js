import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Footer } from "../components/Footer";

const Gracias = () => {
  const handleAddToWhatsapp = () => {
    console.log("agregar a whatsapp");
  };

  return (
    <>
      <div className="mt-5">
        <StaticImage
          src="../images/aumenta_pacientes_logo.png"
          alt="Aumenta Pacientes Logo"
          className="ml-20"
        />
        <div className="grid items-center grid-cols-2 gap-10 mx-20 mt-10 text-primary">
          <div>
            <div className="text-44">
              <h1 className="font-light leading-7 ">¡Felicidades</h1>
              <span className="font-bold ">Gracias por registrarte!</span>
            </div>
            <div className="text-base font-light md:p-2">
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
          <div>
            <StaticImage
              src="../images/gracias_portrait.png"
              alt="Aumenta Pacientes Logo"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-8 text-white gap-28 bg-primary mt-9">
          <h1 className="text-4xl font-bold">¡Nos vemos en el taller!</h1>
          <button
            type="submit"
            className="px-24 font-bold uppercase h-14 bg-secondary text-primary"
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
