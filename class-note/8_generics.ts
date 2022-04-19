function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 타입은 호출할 때 결정한다!
logText<string>("하이");

// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}
