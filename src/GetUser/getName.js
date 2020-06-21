export const getNameById = (id) => {
  const address = "http://localhost:3000/users/";
  const url = `${address}${id}`;
  // eslint-disable-next-line no-unused-vars,no-new
  const promise = new Promise(function (resolve, reject) {
    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
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

  return promise;
};
