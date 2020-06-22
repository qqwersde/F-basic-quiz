// eslint-disable-next-line import/no-unresolved
import fetchMock from "fetch-mock";
import { getEducationById } from "../getEducation";

fetchMock.mock("http://localhost:3000/users/1/educations", [
  {
    userId: 1,
    year: "1990",
    title: "I was born in Katowice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
  },
]);

// eslint-disable-next-line jest/expect-expect
test("get education by id", async () => {
  let result;
  await getEducationById(1).then((data) => {
    result = data;
  });
  expect(result).toEqual([
    {
      userId: 1,
      year: "1990",
      title: "I was born in Katowice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
    },
  ]);
});
