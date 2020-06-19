export const getNameById = async () => {
  const id = 1;
  const address = "http://localhost/user";
  const url = `${address}${id}`;
  // eslint-disable-next-line no-unused-vars
  const arr = [];
  await fetch(url, { method: "GET" })
    .then((response) => {
      return response.text();
    })
    // eslint-disable-next-line no-unused-vars
    .then((data) => {})
    .catch((err) => {
      console.log(err);
    });
  return arr;
};
