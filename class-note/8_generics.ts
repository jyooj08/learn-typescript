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

const obj: Dropdown<string> = { value: "abc", selected: true };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]) {
  console.log(text.length);
  return text;
}

logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T) {
  console.log(text.length);
  return text;
}

logTextLength2("a");
logTextLength2({ length: 10 });

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T) {
  return itemOption;
}

// getShoppingItemOption(10);
getShoppingItemOption("name");
