import "./style/index.scss";
// eslint-disable-next-line no-unused-vars,import/named
import { getNameById } from "./GetUser/getName";
// import { getEducationById } from "./GetInfomation/getEducation";

// eslint-disable-next-line no-unused-vars
const test = window.location.pathname;
// eslint-disable-next-line no-unused-vars
const userId = test.split("/")[2];
const resultName = getNameById(userId);
// eslint-disable-next-line no-unused-vars
resultName.then((data) => {
  const { avatar } = data;
  // eslint-disable-next-line no-undef
  $("img").attr("src", avatar);
  const { name } = data;
  const { age } = data;
  // eslint-disable-next-line no-undef
  $("#header").append(
    `<p>MY NAME IS ${name} ${age}YO.THESE IS MY RESUME/CV</p>`
  );
  const { description } = data;
  // eslint-disable-next-line no-undef
  $(`#intromyself`).html(description);
});
