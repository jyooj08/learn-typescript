// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;
// developer = person;
person = developer;

// 함수
let add = function (a: number) {
  // ..
};

let sum = function (a: number, b: number) {
  // ..
};

// add = sum;
sum = add;

// 제네릭
interface Empty<T> {
  // ..
}
let e1: Empty<String>;
let e2: Empty<number>;
e1 = e2;
e2 = e1;

interface NotEmpty<T> {
  data: T;
}
let ne1: NotEmpty<string>;
let ne2: NotEmpty<number>;
// ne1 = ne2;
// ne2 = ne1;
