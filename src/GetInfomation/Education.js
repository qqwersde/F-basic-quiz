import { getEducationById } from "./getEducation";

export const Edu = () => {
  const test = window.location.pathname;
  // eslint-disable-next-line no-unused-vars
  const edu = test.split("/")[2];
  const resultEdu = getEducationById(edu);
  resultEdu.then((data) => {
    data.forEach((b, index) => {
      // eslint-disable-next-line default-case
      switch (index) {
        case 0:
          // eslint-disable-next-line no-undef
          $(`#yearone`).html(b.year);
          // eslint-disable-next-line no-undef
          $(`#title1`).html(b.title);
          // eslint-disable-next-line no-undef
          $(`#des1`).html(b.description);
          break;
        case 1:
          // eslint-disable-next-line no-undef
          $(`#yeartwo`).html(b.year);
          // eslint-disable-next-line no-undef
          $(`#title2`).html(b.title);
          // eslint-disable-next-line no-undef
          $(`#des2`).html(b.description);
          break;
        case 2:
          // eslint-disable-next-line no-undef
          $(`#year3`).html(b.year);
          // eslint-disable-next-line no-undef
          $(`#title3`).html(b.title);
          // eslint-disable-next-line no-undef
          $(`#des3`).html(b.description);
          break;
        case 3:
          // eslint-disable-next-line no-undef
          $(`#year4`).html(b.year);
          // eslint-disable-next-line no-undef
          $(`#title4`).html(b.title);
          // eslint-disable-next-line no-undef
          $(`#des4`).html(b.description);
          break;
      }
    });
  });
};
