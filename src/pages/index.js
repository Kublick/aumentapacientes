import * as React from "react";
import { Formulario } from "../components/Formulario";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <div>
      <Hero fechaEvento={"09 al 15 de Marzo"} />
      <Formulario />
    </div>
  );
};

export default IndexPage;
