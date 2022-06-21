// ES5 - 함수 선언문
function sum(a, b) {
  return a + b;
}

// ES5 - 함수 표현식
let sum = function (a, b) {
  return a + b;
};

// ES6 - 함수 표현식(화살표 함수)
let sum2 = (a, b) => {
  return a + b;
};
let sum3 = (a, b) => a + b;

// 타입스크립트의 화살표 함수
let sum4 = (a: number, b: number): number => {
  return a + b;
};
