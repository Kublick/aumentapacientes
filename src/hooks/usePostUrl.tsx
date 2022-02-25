const usePostUrl = ({ group }) => {
  const updateUrl = async () => {
    console.log(group);
    let id = "621873e0c4b7aba94dbc3dd9";
    try {
      const response = await fetch(`${process.env.BACKEND}/${id}`, {
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
