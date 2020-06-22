export const getEducationById = (id) => {
  const address = "http://localhost:3000/users/";
  const ed = "/educations";
  const url = `${address}${id}${ed}`;
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
          console.log(data);
          resolve(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return promise;
};
