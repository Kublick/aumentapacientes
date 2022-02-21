import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { SalesCards } from "./SalesCards";

const Venta = () => {
  const unirme = useRef<null | HTMLDivElement>(null);
  return (
    <>
      <div className="mx-14">
        <div className="flex flex-col items-center mt-10 md:grid md:grid-cols-2">
          <StaticImage
            src="../images/aumenta_pacientes_logo.png"
            alt="Aumenta Pacientes Logo"
            className="mb-10 md:mb-0 lg:mb-0 img"
          />

          <h1 className="text-xl font-bold text-center md:text-right md:mr-7 text-primary lg:text-left lg:text-4xl">
            ¡INSCRIPCIONES ABIERTAS!
          </h1>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="mt-8">
            <div className="player-wrapper">
              <ReactPlayer
                url={"https://youtu.be/q0LBG3uvFV4?t=5579"}
                playing={false}
                controls={false}
                className="react-player"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="mt-7 text-primary">
            <h2 className="text-xl font-semibold">
              ¡Tu ya eres éxito! Solo hagamos que se manifieste
            </h2>
            <h3 className="mt-7">
              Bonos de acción rápida (Solo disponibles las primeras 24 horas)
            </h3>
            <p className="text-lg mt-7">
              {" "}
              <span className="font-bold">
                5 SESIONES INDIVIDUALES DE MENTORÍA
              </span>{" "}
              uno a uno con la psicóloga Berenice Bastidas durante el
              entrenamiento, donde podrás recibir de primera mano ayuda enfocada
              únicamente en tu proyecto profesional.{" "}
            </p>
            <p className="font-bold">Valorado en $500 dólares</p>
            <p className="text-lg mt-7">
              {" "}
              <span className="font-bold">
                MANUAL HERRAMIENTAS DIGITALES
              </span>{" "}
              para que no tengas que pasar horas buscando herramientas buenas,
              este manual en lista las mejores herramientas digitales y
              plataformas con las que podrás trabajar y muchas de ellas en su
              versión gratuita.
            </p>
            <p className="font-bold">Valorado en $47 dólares</p>
          </div>
        </div>
        <div ref={unirme}>
          <h1 className="mt-16 text-xl font-bold text-primary">
            Elige el plan que mejor se adapte a tí
          </h1>
          <SalesCards />
        </div>

        <div>
          <p className="my-16 text-xl text-primary">
            Todo esto es lo que recibes al momento de inscribirte al
            entrenamiento online.
          </p>
          <div>
            <StaticImage
              src="../images/pc_desktop_mock.png"
              alt="Aumenta Pacientes Logo"
              className=""
            />
            <div className="grid mt-10 font-normal gap-7 text-lightgray">
              <div>
                <p className="text-lg ">
                  <span className="font-bold text-primary">
                    PROGRAMA INTENSIVO DE 12 SEMANAS 100% ONLINE
                  </span>{" "}
                  donde aprenderás como lograr que los pacientes lleguen a ti
                  con la estrategia D.E.P.E. y logres incrementar tu numero de
                  pacientes y multiplicar tus ingresos.
                </p>
                <p className="font-bold text-primary">
                  Valorado en $997 dólares
                </p>
              </div>

              <div>
                <p>
                  {" "}
                  <span className="text-bold">
                    6 MODULOS DE TRABAJO CON LECCIONES DE VIDEO EN HD{" "}
                  </span>{" "}
                  donde siguiendo la estrategia D.E.P.E. avanzarás paso a paso
                  de forma ordenada, enfocada, pero sobre todo a tu ritmo por
                  que tu eliges tus propios horarios para ver las lecciones que
                  ya témenos pregrabadas y lo puedes hacer desde tu computadora
                  o desde tu celular.
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-primary">
                    ACCESO POR TODO UN AǸO AL PORTAL ONLINE
                  </span>{" "}
                  para que así puedas ver y repetir las lecciones luego de
                  concluir el programa las veces que tu preﬁeras.
                </p>
                <p className="font-bold text-primary">
                  Valorado en $497 dólares
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold text-primary">
                    PERTENECER DE POR VIDA A LA COMUNIDAD INTERNACIONAL DE
                    EXITOSAS Y EXITOSOS VIP
                  </span>{" "}
                  alumnos profesionales del entregamiento incrementa tu
                  consulta, el pertenecer a la comunidad es algo invaluable por
                  que dentro de ella podrás ir compartiendo los avances que
                  vayas logrando con tus compañeros, y empiezas a sentir el
                  empuje de ser parte de una tribu que creme no te va a dejar
                  sola.
                </p>
                <p className="font-bold text-primary">
                  Valorado en $497 dólares
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-primary">
                    12 MENTORIAS GRUPALES EN VIVO ONLINE
                  </span>{" "}
                  con la psicóloga Berenice Bastidas para obtener seguimiento,
                  responder preguntas, aclarar dudas, obtener feedback de tus
                  avances y ayudarte a lograr alcanzar tu meta.
                </p>
                <p className="font-bold text-primary">
                  Valorado en $597 dólares
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-primary">
                    PLAN DE ESTUDIOS EN PDF
                  </span>{" "}
                  para que sepas exactamente en dónde debes de enfocarte cada
                  semana, para así lograr avanzar a pasos seguros y que así ya
                  nada te detenga triunfar
                </p>
                <p className="font-bold text-primary">
                  Valorado en $47 dólares
                </p>
              </div>
              <div>
                <p>
                  <span className="font-bold text-primary">
                    METAS SEMANALES DE TRABAJO
                  </span>{" "}
                  que aceleraran tus resultados para que nada quede en teoría,
                  cada lección te lleva a la acción con ejercicios detallados,
                  de esta manera a medida que avanzas en el programa, también
                  avanzas en tu negocio.
                </p>
                <p className="font-bold text-primary">Falta Cantidad</p>
              </div>
              <button
                className="px-12 py-4 text-base font-bold uppercase transition-transform transform border-2 md:px-20 bg-secondary text-primary border-primary active:scale-75 hover:bg-secondarylight"
                onClick={() =>
                  unirme.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                ¡Quiero Unirme!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Venta;
