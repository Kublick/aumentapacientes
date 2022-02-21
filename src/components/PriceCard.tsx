import React from "react";

type PriceProps = {
  title: string;
  text?: string;
  payTerm: string;
  cost?: string;
  url?: string;
  buttonStyle?: string;
  arrow: boolean;
};

export const PriceCard = ({
  arrow,
  title,
  text,
  cost,
  url,
  payTerm,
  buttonStyle,
}: PriceProps) => {
  const arrowClass = arrow ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  ) : (
    ""
  );

  return (
    <div className="border-2 md:w-60 lg:w-[348px] border-primary">
      <div className="flex items-center justify-center h-[60px] gap-2 text-2xl font-semibold text-white bg-primary ">
        <span>{arrowClass}</span>
        {title}
      </div>
      <div className="flex flex-col items-center p-[21px]">
        <p className="mb-1 text-xl font-light text-lightgray">{text}</p>
        <p className="mt-2 text-3xl font-bold text-primary ">{cost}</p>
        <button
          className={`${buttonStyle} text-base font-semibold border-primary border-4 w-full px-2 py-4 mt-4 text-primary`}
          onClick={() => window.open(url)}
        >
          Seleccionar
        </button>
        <p className="p-2 text-xs font-semibold text-center text-primary">
          {payTerm}
        </p>
      </div>
    </div>
  );
};
