// 타입 추론 기본 1
let a = "abc";

function getB(b = 10) {
  let c = "10";
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

let shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

// 타입 추론 기본 3
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

let detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ABC",
  value: "a",
  tag: "a",
};

// Best Common Type
let arr = [1, 2, true];
