import fetchMock from "fetch-mock";
import { getNameById } from "../getName";

fetchMock.mock("http://localhost:3000/users/1", [
  {
    id: 1,
    name: "KAMIL",
    age: 24,
    avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
  },
]);

// eslint-disable-next-line jest/expect-expect
test("get name by id", async () => {
  let result;
  await getNameById(1).then((data) => {
    result = data;
    console.log(result);
  });
  expect(result).toEqual([
    {
      id: 1,
      name: "KAMIL",
      age: 24,
      avatar: "https://inews.gtimg.com/newsapp_match/0/3581582328/0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
    },
  ]);
});
