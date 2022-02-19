import React from "react";
import { PriceCard } from "./PriceCard";

export const SalesCards = () => {
  return (
    <div className="flex flex-col gap-4 mt-8 md:flex-row md:justify-center ">
      <PriceCard
        arrow={true}
        title="PLAN ÚNICO"
        text="Ahorra 85 dólares"
        payTerm="*Realiza un solo pago"
        cost="$497 USD"
        buttonStyle="bg-secondary"
        url="https://pay.hotmart.com/W42168207B?off=vjph7fq8"
      />
      <PriceCard
        arrow={false}
        title="PLAN PRACTICO"
        text="2 pagos iguales"
        payTerm="*Primer pago hoy y el segundo el proximo mes"
        cost="$261.03 USD"
        buttonStyle="bg-secondary"
        url="https://pay.hotmart.com/W42168207B?off=zeiwzgpe"
      />
      <PriceCard
        arrow={false}
        title="PLAN FLEXIBLE"
        text="3 pagos iguales"
        payTerm="*Paga a tu ritmo en 3 pagos mensuales"
        cost="$178.35 USD"
        buttonStyle="bg-secondary"
        url="https://pay.hotmart.com/W42168207B?off=j6xxy1dq"
      />
    </div>
  );
};
