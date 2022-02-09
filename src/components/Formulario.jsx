import { navigate } from "gatsby";
import React, { useState } from "react";

export const Formulario = () => {
  const [form, setForm] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if (form.email === "" || !form.fullname === "") {
      setFormError("Por favor, llene todos los campos");
      return;
    }

    console.log("el", e.target);

    const data = new FormData(e.target);

    const url = "https://psicologaberenicebastidas.activehosted.com/proc.php";

    fetch(url, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        setTimeout(() => {
          navigate("/gracias");
          setFormError("");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center gap-12 py-8 text-white bg-primary">
        <div>
          <h1 className="text-3xl font-bold">¡Cupo limitado!</h1>
          <p className="text-base font-thin">
            Aprovecha esta oportunidad{" "}
            <span className="font-bold">sin costo</span>
          </p>
        </div>
        <form className="flex gap-4 " onSubmit={handleSubmit}>
          <input type="hidden" name="u" value="33" />
          <input type="hidden" name="f" value="33" />
          <input type="hidden" name="s" />
          <input type="hidden" name="c" value="0" />
          <input type="hidden" name="m" value="0" />
          <input type="hidden" name="act" value="sub" />
          <input type="hidden" name="v" value="2" />
          <input
            type="hidden"
            name="or"
            value="ccdd57901eba6f15ca6262851317a292"
          />
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="px-8 h-14 text-primary"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="px-8 h-14 text-primary"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="px-4 font-bold uppercase bg-secondary h-14 text-primary"
          >
            ¡Si, Quiero entrar!
          </button>
        </form>
      </div>
    </div>
  );
};