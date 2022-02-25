import { useEffect, useState } from "react";

export const useGetUrls = (): any => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const getUrls = async () => {
      try {
        const response = await fetch(process.env.BACKEND);
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
