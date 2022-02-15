import * as React from "react";
import { useRef } from "react";
import { Footer } from "../components/Footer";
import { Formulario } from "../components/Formulario";
import { Hero } from "../components/Hero";
import { Oferta } from "../components/Oferta";
import SEO from "../components/seo";
import { Tecnicas } from "../components/Tecnicas";

const IndexPage = () => {
  const registroRef = useRef<null | HTMLDivElement>(null);

  function handleClick() {
    registroRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <SEO
        title="Aumenta tu numero de pacientes"
        keywords={[
          `psicologo`,
          `curso`,
          `pacientes`,
          `formacion`,
          `nutriologos`,
          `medicos`,
          `fisioterapeutas`,
        ]}
      />

      <Hero fechaEvento={"10 al 15 de Marzo"} eventTime={"13 March 2022"} />
      <div ref={registroRef}>
        <Formulario />
      </div>
      <Oferta handleClick={handleClick} />
      <Tecnicas />
      <Formulario />
      <footer className="mt-24">
        <Footer />
      </footer>
    </>
  );
};

export default IndexPage;
