import { useEffect, useState } from "react";

export const useGetUrls = (): any => {
  const [urls, setUrls] = useState([]);
  const backend = "http://209.145.48.29:4000/links";

  useEffect(() => {
    const getUrls = async () => {
      try {
        const response = await fetch(backend);
        const data = await response.json();
        console.log(data[0].whatsappAumenta);
        setUrls(data[0].whatsappAumenta);
      } catch (error) {
        console.log(error);
      }
    };
    getUrls();
  }, []);
  return urls;
};
