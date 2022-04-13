interface Person {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
};

let seho: Person = {
  name: "세호",
  age: 30,
};

let jeho: Person2 = {
  name: "재호",
  age: 24,
};

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

/*
interface는 확장 가능
type은 확장 불가능
*/
