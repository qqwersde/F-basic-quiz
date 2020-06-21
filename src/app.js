import "./style/index.scss";
// eslint-disable-next-line no-unused-vars,import/named
import { getNameById } from "./GetUser/getName";

// eslint-disable-next-line no-unused-vars
const test = window.location.pathname;
// eslint-disable-next-line no-unused-vars
const id = test.split("/")[2];

const result = getNameById(id);
// eslint-disable-next-line no-unused-vars
result.then((data) => {
  const { description } = data;
  // eslint-disable-next-line no-undef
  $(`#intromyself`).html(description);
});
