function logMessage(value: any) {
  console.log(value);
}
logMessage("hello");
logMessage(100);

// 유니온 타입
let heono: string | number | boolean;
function logMessage2(value: string | number) {
  // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 과정
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage2("hello");
logMessage2(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}
