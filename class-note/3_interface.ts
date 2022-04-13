interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let yujin: User = {
  age: 30,
  name: "유진",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 100,
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr2: StringArray = ["a", "b", "c"];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj2: StringRegexDictionary = {
  // sth: /abc/
  cssFile: /\.css$/,
  jfFile: /\.js$/,
};
// obj['cssFile'] = 'a';

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let josh: Developer = {
  name: "조쉬",
  age: 11,
  language: "Python",
};
