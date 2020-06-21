export const getNameById = (id) => {
  const address = "http://localhost:3000/user";
  const url = `${address}${id}`;
  // eslint-disable-next-line no-unused-vars,no-new
  new Promise(function (resolve, reject) {
    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // eslint-disable-next-line no-undef
        if (data.code === 404) {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(`request exception${data.msg}`);
        } else {
          resolve(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
