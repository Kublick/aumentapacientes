const usePostUrl = ({ group }) => {
  const updateUrl = async () => {
    const backend = "http://209.145.48.29:4000/links";
    let id = "621873e0c4b7aba94dbc3dd9";
    try {
      const response = await fetch(`${backend}/${id}`, {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          whatsappAumenta: group,
        }),
      });
      return;
    } catch (error) {
      console.log(error);
    }
  };
  updateUrl();
  return;
};

export default usePostUrl;
