import { graphql, useStaticQuery } from "gatsby";
import {
  GatsbyImage,
  getImage,
  StaticImage,
  withArtDirection,
} from "gatsby-plugin-image";
import React, { useEffect } from "react";
import { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import Counter from "./Counter";
import { PriceCard } from "./PriceCard";

interface Props {
  salesDate: string;
}

export const SalesCards = ({ salesDate }: Props) => {
  const { desktopImage, tabletImage } = useStaticQuery(
    graphql`
      query {
        desktopImage: file(relativePath: { eq: "bere_garantia_desktop.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
        tabletImage: file(relativePath: { eq: "bere_garantia_tablet.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
      }
    `
  );

  const images = withArtDirection(getImage(tabletImage), [
    {
      media: `(max-width: ${1280}px)`,
      image: getImage(desktopImage),
    },
  ]);

  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width <= 833) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 md:flex-row md:justify-around">
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
      <div className="flex flex-col items-center md:grid md:grid-cols-2 mt-9 ">
        {isMobile ? (
          <div className="flex flex-col items-center">
            <StaticImage
              src="../images/bere_garantia_mobile.png"
              alt="oferta laptop"
            />
            <Counter date={salesDate} />
          </div>
        ) : (
          <div className="flex flex-col items-center self-end lg:gap-16">
            <StaticImage
              src="../images/logo_garantia_desktop.png"
              alt="oferta laptop"
              className=""
            />
            <Counter date={salesDate} />
          </div>
        )}
        {!isMobile && (
          <GatsbyImage image={images} alt="foto anfitrion" className="" />
        )}
      </div>
    </div>
  );
};
