import React from "react";
import Videoplayer from "./Videoplayer";

export const Testimonios = () => {
  return (
    <div>
      <h2 className="mb-8 text-xl font-bold text-center text-primary">
        Mira las historias inspiradoras, los casos de éxito que ya tomaron
        acción.
      </h2>
      <h1 className="mb-8 text-xl font-bold text-center bg-secondary text-primary">
        ¿Serás el próximo?
      </h1>
      <div className="grid gap-8">
        <div>
          <Videoplayer url="https://youtu.be/z9CsFqeleUo" controls={false} />
          <h1 className="px-4 py-2 text-base font-bold text-center bg-secondary text-primary">
            Triplicó su retorno de inversión antes de concluir el entrenamiento
          </h1>
        </div>
        <div>
          <Videoplayer
            url="https://www.youtube.com/watch?v=DUTbbtn9vJs"
            controls={false}
          />
        </div>
        <div>
          <Videoplayer url="https://youtu.be/wXHrOaaJZoM" controls={false} />
        </div>
        <div>
          <Videoplayer url="https://youtu.be/TFc8I4yWV6o" controls={false} />
        </div>
      </div>
    </div>
  );
};
