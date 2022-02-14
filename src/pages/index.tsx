import * as React from "react";
import { Footer } from "../components/Footer";
import { Formulario } from "../components/Formulario";
import { Hero } from "../components/Hero";
import { Oferta } from "../components/Oferta";
import { Tecnicas } from "../components/Tecnicas";

const IndexPage = () => {
  return (
    <>
      <header>
        <Hero fechaEvento={"09 al 15 de Marzo"} eventTime={"13 March 2022"} />
      </header>
      {/* <Formulario />
      <Oferta />
      <Tecnicas />
      <Formulario />
      <footer className="mt-24">
        <Footer />
      </footer> */}
    </>
  );
};

export default IndexPage;
