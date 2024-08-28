import _ from "lodash";

type Todo = {
  id: () => Promise<number>;
  text: () => Promise<string>;
  done: () => Promise<boolean>;
};

async function getTodos() {
  return Promise.resolve(todos);
}

const todos: Todo[] = [
  {
    id: async () => 1,
    text: async () => "Buy milk",
    done: async () => false,
  },
  {
    id: async () => 2,
    text: async () => "Buy eggs",
    done: async () => false,
  },
  {
    id: async () => 3,
    text: async () => "Buy bread",
    done: async () => false,
  },
];

async function main() {
  const results = await Promise.all(
    _.map(await getTodos(), async (n) => {
      return await n.text();
    })
  );
  console.log(results);
}

main();
